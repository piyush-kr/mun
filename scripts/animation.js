let tl = gsap.timeline()

// add the tweens to the timeline - Note we're using tl.to not gsap.to
if (window.innerWidth > 1062) {
    tl.from(".navigation-logo", { duration: 1, scale: 4 })
    tl.from(".nav1", { x: -100, duration: .3, opacity: 0, ease: "back.out(1.7)" });
    tl.from(".nav2", { x: -100, duration: .3, opacity: 0, ease: "back.out(1.7)" });
    tl.from(".nav3", { x: -100, duration: .2, opacity: 0, ease: "back.out(1.7)" });
    tl.from(".nav4", { x: -100, duration: .2, opacity: 0, ease: "back.out(1.7)" });
    tl.from(".nav5", { x: -100, duration: .2, opacity: 0, ease: "back.out(1.7)" });
    tl.from(".nav6", { x: -100, duration: .2, opacity: 0, ease: "back.out(1.7)" });
    tl.from(".nav7", { x: -100, duration: .2, opacity: 0, ease: "back.out(1.7)" });
}
tl.from(".heroContent h1", { x: 500, duration: 2, opacity: 0, ease: "power4.out" })
tl.from(".heroContent h2", { duration: 1, opacity: 0, y: 100, ease: "power4.out" })
tl.from(".heroContent h3", { duration: .5, opacity: 0, x: 100, ease: "power4.out" })

// gsap.from(".themeheading", { scrollTrigger: ".themeheading", x: 700, duration: 2, ease: "power4.out" })
// gsap.from(".theme p", { scrollTrigger: ".themeheading", y: 300, duration: 2, opacity: 0, ease: "power4.out", delay: 1 })
// gsap.from(".tagline", { scrollTrigger: ".tagline", scale: 2, x: -400, duration: 2, opacity: 0, ease: "power4.out", delay: 0 })
// gsap.from(".aboutMun p", { scrollTrigger: ".aboutMun p", scale: 2, duration: 2, opacity: 0, ease: "power4.out" })
// gsap.from(".aboutMun img", { scrollTrigger: ".aboutMun img", y: 500, duration: 1, opacity: 0, ease: "power4.out" })
gsap.from(".committeeGroup img", { scrollTrigger: ".committeeGroup", y: 500, scale: 5, duration: 2, delay: 1, opacity: 0, ease: "power4.out" })




