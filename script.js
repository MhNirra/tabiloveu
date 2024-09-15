const tl = new TimelineMax();

const oneText = new SplitType("#one");
const fiveText = new SplitType("#five-text-1");
const sixText = new SplitType("#six-text-1");
const sevenText = new SplitType("#seven-text-1");
const eightText = new SplitType("#eight-text-1");
const twelveText = new SplitType("#twelve");

const textContainer = document.getElementById("four");
const text = document.getElementById("four-text");

// The original text you want to scramble
let originalText = "Pero tu siempre seras especial en donde sea que estés!";

// Split the text into an array of characters
const characters = originalText.split("");

// Shuffle the characters randomly
characters.sort(() => Math.random() - 0.5);

// Join the characters back together
const scrambledText = characters.join("");

// Set the scrambled text as the text content of the element
text.textContent = scrambledText;

window.onload = function () {
  document.getElementById("startbutton").disabled = false;
  document.getElementById("startbutton").innerHTML =
  "Clickea acá, tengo algo para ti!-";
};

function startAnimation() {
  // Get the audio element
  var audio = document.getElementById("myAudio");

  gsap.to(".container", {
    opacity: 1,
  });
  gsap.to("#startbutton", {
    opacity: 0,
  });

  document.getElementById("startbutton").remove();

  // Play the audio
  audio.play();
  audio.volume = 0.25;
  tl.to("#one .char", {
    y: 0,
    autoAlpha: 1,
    stagger: 0.1,
    delay: 0.1,
    duration: 0.25,
  })
    .to("#one .char", {
      y: -115,
      autoAlpha: 1,
      stagger: 0.1,
      delay: 1.75,
      duration: 0.25,
    })
    .from("#two", {
      opacity: 0,
      y: 115, // Position the element just off the bottom of the screen
      delay: 0.5,
      duration: 1.25,
      ease: Power2.easeOut, // Add an ease-out effect for a smoother animation
    })
    .to("#two", {
      opacity: 0,
      y: -115, // Position the element just off the bottom of the screen
      delay: 2,
      duration: 1,
      ease: Power2.easeOut, // Add an ease-out effect for a smoother animation
    })
    .from("#three", {
      opacity: 0,
      y: -115, // Position the element just off the bottom of the screen
      duration: 1,
      ease: Power2.easeOut, // Add an ease-out effect for a smoother animation
    })
    .from(".three-span-1", { autoAlpha: 0, delay: 0.5, duration: 1 })
    .to(".three-span-1", { autoAlpha: 0, duration: 1, delay: 2 })
    .from(".three-span-2", { autoAlpha: 0, duration: 1 })
    .to(".three-span-2", { autoAlpha: 0, duration: 1, delay: 2 })
    .from(".three-span-3", { autoAlpha: 0, duration: 1 })
    .to(".three-span-3", { autoAlpha: 0, duration: 1, delay: 2 })
    .to("#three", { color: "#000" }, "start")
    .to(".three-span-4", { color: "#000" }, "start")
    .to(".container", { backgroundColor: "#fff" }, "start")
    .from(".three-span-4", { autoAlpha: 0, duration: 1 })
    .to("#three", { autoAlpha: 0, duration: 1, delay: 2 })
    .set("#four", { opacity: 0 })
    .from("#four", { opacity: 0, duration: 1 })
    .to(text, {
      duration: 1, // Animation duration
      text: {
        autoAlpha: 1,
        value: originalText, // Set the target text
        speed: 0.8, // Scramble speed
        chars: "lowerCase", // Scramble characters
        ease: "linear",
        onComplete: () => {
          setTimeout(() => {
            gsap.to(text, {
              duration: 1, // Animation duration
              text: {
                autoAlpha: 1,
                value: "Y como eres especial", // Set the target text
                speed: 0.8, // Scramble speed
                chars: "lowerCase", // Scramble characters
                ease: "linear",
              },
            });
          }, [5000]);
        },
      },
    })
    .from("#four-second-text", { delay: 7.5, autoAlpha: 0, duration: 1 })
    .to("#four", { scale: 0, duration: 3, delay: 1, ease: "power4.in" })
    .to("#four", {
      autoAlpha: 0,
      duration: 1,
      onComplete: () => {
        gsap.set("html, body", { height: "100vh" });
        gsap.set("#snowfall", { perspective: 600 });

        var total = 100;
        var warp = document.getElementById("snowfall"),
          w = window.innerWidth,
          h = window.innerHeight;

        for (i = 0; i < total; i++) {
          var Div = document.createElement("div");
          gsap.set(Div, {
            attr: { class: "dot" },
            x: R(0, w),
            y: R(-200, -150),
            z: R(-200, 200),
          });
          warp.appendChild(Div);
          animm(Div);
        }

        function animm(elm) {
          gsap.set(elm, {
            y: R(-500, -300), // Change this value to start the snowfall above the screen
            x: R(0, w),
            z: R(-200, 200),
          });
          gsap.to(elm, R(3, 6.5), {
            y: h + 100,
            ease: Linear.easeNone,
            repeat: -1,
            delay: -15,
          });
          gsap.to(elm, R(5, 7), {
            repeat: -1,
            yoyo: true,
            ease: Sine.easeInOut,
          });
        }

        function R(min, max) {
          return min + Math.random() * (max - min);
        }

        gsap.to("#four", { scale: 0, duration: 0.01 });
      },
    })
    .to(
      ".container",
      {
        backgroundImage: "linear-gradient(135deg, #D0EFFF 0%, #ffffff 100%)",
        duration: 1,
        delay: -1,
        ease: "none",
      },
      "second-start"
    )
    .to(".container", {
      backgroundImage: "linear-gradient(135deg, #D0EFFF 100%, #ffffff 100%)",
      duration: 1,
      delay: -1,
      ease: "none",
    })
    .from(
      "#five #five-text-1 .char",
      {
        autoAlpha: 0,
        delay: -1,
        stagger: 0.05,
        duration: 1,
      },
      "second-start"
    )
    .to("#five #five-text-1 .char", {
      autoAlpha: 0,
      duration: 1,
      stagger: 0.05,
      delay: 3,
      onComplete: () => {
        var falling = true;

        gsap.set("#leaffall", { perspective: 600 });

        var total = 30;
        var container = document.getElementById("leaffall"),
          w = window.innerWidth,
          h = window.innerHeight;

        for (i = 0; i < total; i++) {
          var Div = document.createElement("div");
          gsap.set(Div, {
            attr: { class: "leafdot" },
            x: R(0, w),
            y: R(-200, -150),
            z: R(-200, 200),
          });

          console.log(w, Div.innerWidth);
          container.appendChild(Div);
          animm(Div);
        }

        function animm(elm) {
          gsap.fromTo(
            elm,
            {
              opacity: 0,
            },
            {
              opacity: 1,
              duration: R(0.5, 2), // Adjust the duration of the fade-in effect here
              ease: Power1.easeIn, // Adjust the easing function for the fade-in effect here
              onComplete: function () {
                gsap.to(elm, R(6, 15), {
                  y: h + 100,
                  ease: Linear.easeNone,
                  repeat: -1,
                  delay: -15,
                });
                gsap.to(elm, R(4, 8), {
                  rotationZ: R(0, 180),
                  repeat: -1,
                  yoyo: true,
                  ease: Sine.easeInOut,
                });
                gsap.to(elm, R(2, 8), {
                  rotationX: R(0, 360),
                  rotationY: R(0, 360),
                  repeat: -1,
                  yoyo: true,
                  ease: Sine.easeInOut,
                  delay: -5,
                });
              },
            }
          );
        }

        function R(min, max) {
          return min + Math.random() * (max - min);
        }
      },
    })
    .to("#snowfall", {
      autoAlpha: 0,
    })
    .to(
      ".container",
      {
        backgroundImage: "linear-gradient(135deg, #FFF38D 0%, #9bedff 100%)",
        duration: 1,
        delay: -1,
        ease: "none",
      },
      "third-start"
    )
    .to(".container", {
      backgroundImage: "linear-gradient(135deg, #FFF38D 100%, #9bedff 100%)",
      duration: 1,
      delay: -1,
      ease: "none",
    })
    .from("#six #six-text-1 .char", {
      autoAlpha: 0,
      delay: -1,
      stagger: 0.05,
      duration: 1,
      onComplete: () => {
        document.getElementById("snowfall").remove();
        setTimeout(() => {
          gsap.to("#leaffall", {
            opacity: 0,
            duration: 0.5,
          });
        }, 4500);
        setTimeout(() => {
          var leafdotElements = document.querySelectorAll(".leafdot");
          leafdotElements.forEach(function (element) {
            element.style.backgroundImage = `url("./icons/sakurapetal${
              Math.floor(Math.random() * 4) + 1
            }.png")`;
          });
        }, 5000);
        setTimeout(() => {
          gsap.to("#leaffall", {
            opacity: 1,
            duration: 0.5,
          });
        }, 5500);
      },
    })
    .to("#six #six-text-1 .char", {
      autoAlpha: 0,
      duration: 1,
      stagger: 0.05,
      delay: 3.5,
    })
    .to(".container", {
      backgroundImage: "linear-gradient(135deg, #FFB7CE 0%, #FFF38D 100%)",
      duration: 1,
      delay: -1,
      ease: "none",
    })
    .to(".container", {
      backgroundImage: "linear-gradient(135deg, #FFB7CE 100%, #FFF38D 100%)",
      duration: 1,
      delay: -1,
      ease: "none",
    })
    .from("#seven #seven-text-1 .char", {
      autoAlpha: 0,
      delay: -1,
      stagger: 0.05,
      duration: 1,
    })
    .to("#seven #seven-text-1 .char", {
      autoAlpha: 0,
      duration: 1,
      stagger: 0.05,
      delay: 3,
    })
    .to("#leaffall", {
      autoAlpha: 0,
    })
    .to(".container", {
      backgroundImage: "linear-gradient(135deg, #FCD6F1 0%, #FFB7CE 100%)",
      duration: 1,
      delay: -1,
      ease: "none",
    })
    .to(".container", {
      backgroundImage: "linear-gradient(135deg, #FCD6F1 100%, #FFB7CE 100%)",
      duration: 1,
      delay: -1,
      ease: "none",
    })
    .from("#eight #eight-text-1 .char", {
      autoAlpha: 0,
      delay: -1,
      stagger: 0.05,
      duration: 1,
      onComplete: () => {
        gsap.to("#heart-icon", {
          delay: -2,
          autoAlpha: 1,
          onComplete: () => {
            gsap.to("#heart-icon", {
              bottom: "100%",
              duration: 8,
            });
            gsap.to("#heart-icon", {
              left: "40%",
              duration: 2.5,
              ease: "power1.inOut",
              rotation: -25,
              onComplete: () => {
                gsap.to("#heart-icon", {
                  left: "55%",
                  duration: 2.5,
                  ease: "power1.inOut",
                  rotation: 25,
                  onComplete: () => {
                    gsap.to("#heart-icon", {
                      left: "50%",
                      duration: 2.5,
                      ease: "power1.inOut",
                      rotation: -25,
                    });
                  },
                });
              },
            });
          },
        });
      },
    })
    .to("#eight #eight-text-1 .char", {
      autoAlpha: 0,
      duration: 1,
      stagger: 0.05,
      delay: 3.5,
    })
    .to(".container", {
      backgroundImage: "linear-gradient(135deg, #FFFFFF 0%, #FFB7CE 100%)",
      duration: 1,
      delay: -1,
      ease: "none",
      onComplete: () => {
        document.getElementById("leaffall").remove();
      },
    })
    .to(".container", {
      backgroundImage: "linear-gradient(135deg, #FFFFFF 100%, #FFB7CE 100%)",
      duration: 1,
      delay: -1,
      ease: "none",
    })
    .staggerFrom(
      "#nine span",
      0.8,
      {
        delay: 2,
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      "#nine span",
      0.8,
      {
        delay: 5.2,
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1"
    )
    .to("#ten", { opacity: 1 }, "photos")
    .to(
      "#overlay1",
      { y: "-100%", duration: 1.6, ease: "power4.inOut" },
      "photos"
    )
    .fromTo(
      "#img1",
      { scale: 2 },
      { scale: 1, duration: 1.6, ease: "power4.inOut" },
      "photos"
    )
    .fromTo(
      "#img2",
      { scale: 2 },
      { scale: 1, top: "0%", duration: 1.6, ease: "power4.inOut", delay: 0.3 }
    )
    .fromTo(
      "#img3",
      { scale: 2 },
      {
        scale: 1,
        left: "0%",
        duration: 1.6,
        delay: 0.2,
        ease: "power4.inOut",
      }
    )
    .fromTo(
      "#img4",
      { scale: 2 },
      {
        scale: 1,
        left: "0%",
        duration: 1.8,
        ease: "power4.inOut",
      }
    )
    .fromTo(
      "#img5",
      { scale: 2 },
      {
        scale: 1,
        top: "0%",
        left: "0%",
        duration: 1.65,
        ease: "power4.inOut",
        delay: 0.1,
      }
    )
    .fromTo(
      "#img6",
      { scale: 2 },
      {
        scale: 1,
        top: "0%",
        right: "0%",
        duration: 1.6,
        ease: "power4.inOut",
        delay: 0.3,
      }
    )
    .fromTo(
      "#img7",
      { scale: 2 },
      {
        scale: 1,
        bottom: "0%",
        left: "0%",
        duration: 1.6,
        delay: 0.2,
        ease: "power4.inOut",
      }
    )
    .fromTo(
      "#img8",
      { scale: 2 },
      {
        scale: 1,
        bottom: "0%",
        right: "0%",
        duration: 1.8,
        ease: "power4.inOut",
      }
    )
    .fromTo(
      "#img9",
      { scale: 2 },
      {
        scale: 1,
        bottom: "0%",
        duration: 1.65,
        delay: 0.1,
        ease: "power4.inOut",
      }
    )
    .fromTo(
      "#img10",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.6,
        ease: "power4.inOut",
        delay: 0.3,
      }
    )
    .fromTo(
      "#img11",
      { scale: 2 },
      {
        scale: 1.1,
        top: "0%",
        duration: 1.6,
        delay: 0.2,
        ease: "power4.inOut",
      }
    )
    .fromTo(
      "#img12",
      { scale: 2 },
      {
        scale: 1,
        bottom: "0%",
        duration: 1.8,
        ease: "power4.inOut",
      }
    )
    .fromTo(
      "#img13",
      { scale: 2 },
      {
        scale: 1.2,
        top: "0%",
        duration: 1.6,
        delay: 0.2,
        ease: "power4.inOut",
      }
    )
    .fromTo(
      "#img14",
      { scale: 2 },
      {
        scale: 1,
        bottom: "0%",
        duration: 1.8,
        ease: "power4.inOut",
      }
    )
    .to("#ten", {
      autoAlpha: 0,
      duration: 2,
    })
    .to(
      "#eleven",
      {
        opacity: 1,
        duration: 2,
      },
      "eleven-div"
    )
    .fromTo(
      "#birthday-img",
      { opacity: 0 },
      { opacity: 1, duration: 2 },
      "eleven-div"
    )
    .fromTo("#heart-image1", { scale: 0 }, { scale: 1, duration: 0.5 })
    .fromTo("#heart-image2", { scale: 0 }, { scale: 1, duration: 0.5 })
    .fromTo("#heart-image3", { scale: 0 }, { scale: 1, duration: 0.5 })
    .to("#eleven", {
      delay: 3,
      autoAlpha: 0,
      duration: 2,
    })
    .from("#twelve .char", {
      autoAlpha: 0,
      stagger: 0.15,
      duration: 3,
    })
    .to("#smile", {
      rotation: 90,
    });
}
