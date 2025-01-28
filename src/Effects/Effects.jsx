/* eslint-disable react/prop-types */
import { ShaderArt } from 'https://esm.sh/shader-art';
import { UniformPlugin } from 'https://esm.sh/@shader-art/plugin-uniform';
import {useEffect, useRef, useState} from "react";
import { useSprings, animated } from '@react-spring/web';

ShaderArt.register([() => new UniformPlugin()]);

const Canvas = (color1, color2, color3, color4) => {
  return (
    <shader-art autoplay="" play-state="running">
      <uniform type="float" name="scale" value=".4" min="0.1" max="4" step="0.01">
        <uniform type="float" name="ax" value="5" min="1" max="15" step=".01">
          <uniform type="float" name="ay" value="7" min="1" max="15" step=".01">
            <uniform type="float" name="az" value="9" min="1" max="15" step=".01">
              <uniform type="float" name="aw" value="13" min="1" max="15" step=".01">
                <uniform type="float" name="bx" value="1" min="-1" max="1" step="0.01">
                  <uniform type="float" name="by" value="1" min="-1" max="1" step="0.01">
                    <uniform type="color" name="color1" value={color1}>
                      <uniform type="color" name="color2" value={color2}>
                        <uniform type="color" name="color3" value={color3}>
                          <uniform type="color" name="color4" value={color4}>

                            <script type="buffer" name="position" data-size="2">
                              [-1, 1, -1,-1, 1,1, 1, 1, -1,-1, 1,-1]
                            </script>
                            <script type="buffer" name="uv" data-size="2">
                              [ 0, 0, 0, 1, 1,0, 1, 0, 0, 1, 1, 1]
                            </script>

                            <script type="vert">{`
                                          precision highp float;
                                          attribute vec4 position;
                                          attribute vec2 uv;
                                          varying vec2 vUv;
                                          void main() {
                                          vUv = uv;
                                          gl_Position = position;
                                        }
                                        `}</script>

                            <script type="frag">{`
                                          precision highp float;
                                          varying vec2 vUv;
                                          uniform float time;
                                          uniform float scale;
                                          uniform vec2 resolution;
                                          uniform vec3 color1, color2, color3, color4;
                                          uniform int numOctaves;
                                          const float PI = 3.141592654;
                                          uniform float ax, ay, az, aw;
                                          uniform float bx, by;

                                          // just a bunch of sin & cos to generate an interesting pattern
                                          float cheapNoise(vec3 stp) {

                                          vec3 p = vec3(stp.st, stp.p);
                                          vec4 a = vec4(ax, ay, az, aw);
                                          return mix(
                                          sin(p.z + p.x * a.x + cos(p.x * a.x - p.z)) *
                                          cos(p.z + p.y * a.y + cos(p.y * a.x + p.z)),
                                          sin(1. + p.x * a.z + p.z + cos(p.y * a.w - p.z)) *
                                          cos(1. + p.y * a.w + p.z + cos(p.x * a.x + p.z)),
                                          .436
                                          );
                                        }

                                          void main() {

                                          vec2 aR = vec2(resolution.x/resolution.y, 1.);
                                          vec2 st = vUv * aR * scale;
                                          float S = sin(time * .005);
                                          float C = cos(time * .005);
                                          vec2 v1 = vec2(cheapNoise(vec3(st, 2.)), cheapNoise(vec3(st, 1.)));
                                          vec2 v2 = vec2(
                                          cheapNoise(vec3(st + bx*v1 + vec2(C * 1.7, S * 9.2), 0.15 * time)),
                                          cheapNoise(vec3(st + by*v1 + vec2(S * 8.3, C * 2.8), 0.126 * time))
                                          
                                          //  rapidité du truc
                                          
                                          );
                                          float n = .5 + .4 * cheapNoise(vec3(st + v2, 0.));

                                          //couleur de fou
                                          
                                          /*vec3 color = mix(color1,
                                          color2,
                                          clamp((n*n)*40.,0.0,3.0));

                                          color = mix(color,
                                          color3,
                                          clamp(length(v1),0.0,3.0));

                                          color = mix(color,
                                          color4,
                                          clamp(length(v2.x),0.0,6.0));*/
                                          vec3 color = mix(color1,
                                          color2,
                                          clamp((n*n)*8.,0.0,1.0));

                                          color = mix(color,
                                          color3,
                                          clamp(length(v1),0.0,1.0));

                                          color = mix(color,
                                          color4,
                                          clamp(length(v2.x),0.0,1.0));

                                          //       color *= n * n * n + .6  * n * n + .5 * n;
                                          color /= n*n + n * 7.;
                                          gl_FragColor = vec4(color,1.);
                                        }
                                        `}</script>
                          </uniform>
                        </uniform>
                      </uniform>
                    </uniform>
                  </uniform>
                </uniform>
              </uniform>
            </uniform>
          </uniform>
        </uniform>
      </uniform>
    </shader-art>
  );
};

const Magnet = ({ children, padding = 100, disabled = false }) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef(null);

  useEffect(() => {
    if (disabled) {
      // Reset position when disabled
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e) => {
      if (magnetRef.current) {
        const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const distX = Math.abs(centerX - e.clientX);
        const distY = Math.abs(centerY - e.clientY);

        // Check if the mouse is within the padding area
        if (distX < width / 2 + padding && distY < height / 2 + padding) {
          setIsActive(true);
          // Calculate the offset
          const offsetX = (e.clientX - centerX) / 2;
          const offsetY = (e.clientY - centerY) / 2;
          setPosition({ x: offsetX, y: offsetY });
        } else {
          setIsActive(false);
          setPosition({ x: 0, y: 0 });
        }
      }
    };

    // Attach mouse move event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [padding, disabled]);

  return (
    <div ref={magnetRef} style={{ position: "relative", display: "inline-block" }}>
      <div
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: isActive ? "transform 0.3s ease-out" : "transform 0.2s ease-in-out",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.50)" }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden sm:p-8 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
};

function GradientText({
                        children,
                        className = "",
                        colors = ["#ffaa40", "#9c40ff", "#ffaa40"], // Default colors
                        animationSpeed = 8, // Default animation speed in seconds
                        showBorder = false, // Default overlay visibility
                        }) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`, // This will be applied directly to the style
  };

  return (
    <span
      className={`font-medium backdrop-blur transition-shadow duration-500 overflow-hidden ${className}`}
    >
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
          style={{
            ...gradientStyle,
            backgroundSize: "300% 100%",
            // Direct animation style will override Tailwind animation duration
          }}
        >
          <div
            className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>
      )}
      <div
        className="inline-block relative z-2 text-transparent bg-cover animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "300% 100%",
        }}
      >
        {children}
      </div>
    </span>
  );
}


const BlurText = ({ text, delay = 200, className = '', space = 1, transi = 0 }) => {
  const words = text.split(' ');
  const [inView, setInView] = useState(false);
  const ref = useRef();
  let sp = "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current); // Unobserve after triggering the animation
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  const springs = useSprings(
    words.length,
    words.map((_, i) => ({
      from: { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' },
      to: inView
        ? async (next) => {
          await next({ filter: 'blur(5px)', opacity: 0.5, transform: 'translate3d(0,5px,0)' });
          await next({ filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' });
        }
        : { filter: 'blur(10px)', opacity: 0 },
      delay: (i + transi) * delay,
    }))
  );
  if (space === 1){
    sp = '\xa0'
  }
  if (text === "Randy" && ", a French Developer."){
    return (
      <span ref={ref} className={`${className}`}>
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={props}
          className="inline-block will-change-transform will-change-filter will-change-opacity"
        >
          <h1>{words[index]}{sp}</h1>
        </animated.span>
      ))}
    </span>
    );

  }
  else {
    return (
      <span ref={ref} className={`${className}`}>
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={props}
          className="inline-block will-change-transform will-change-filter will-change-opacity"
        >
          {words[index]}{sp}
        </animated.span>
      ))}
    </span>
    );
  }


};

const StarBorder = ({
                      as: Component = "button",
                      className = "",
                      color = "white",
                      speed = "6s",
                      children,
                      ...rest
                    }) => {
  return (
    <Component className={`relative inline-block py-[1px] overflow-hidden rounded-[20px] ${className}`} {...rest}>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-10"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-10"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="relative z-11 bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-center text-[16px] py-[16px] px-[26px] rounded-[20px]">
        {children}
      </div>
    </Component>
  );
};


export {
  Canvas,
  Magnet,
  SpotlightCard,
  ShinyText,
  GradientText,
  BlurText,
  StarBorder
}