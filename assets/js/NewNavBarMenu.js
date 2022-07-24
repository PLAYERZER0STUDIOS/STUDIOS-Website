// ===================================
// Create function to select elements
// ===================================

const selectElement = (element) => document.querySelector(element);

// ===================================
//     Open and close nav on click
// ===================================

selectElement(".menu-icons").addEventListener("click", () => {
    selectElement("nav").classList.toggle("active");
    console.log("activation string for toggling the mobile nav menu");
});

selectElement(".linking-sub").addEventListener("click", () => {
    selectElement(".fa-caret-right").classList.toggle("active");
    console.log("activation string for toggling the fa-caret-right tag");
});

// ===============
//    Menu Toggle
//  Dropdown Code
// ===============

selectElement(".menu-icons").addEventListener("click", () => {
    selectElement(".toggle").classList.toggle("active");
    console.log("Toggled the mobile menu icon on the navigation bar");
});

// ===================================
//          Home Menu Code
// ===================================

selectElement(".main-home-menu").addEventListener("click", () => {
    selectElement(".home").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".main-home-menu").addEventListener("click", () => {
    selectElement(".home-ctpz").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on the TPZ menu...

selectElement(".home").addEventListener("click", () => {
    selectElement(".home-atv").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on the ATV menu...

selectElement(".home").addEventListener("click", () => {
    selectElement(".home-pogz").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on the POGZ menu...

selectElement(".home").addEventListener("click", () => {
    selectElement(".home-pzsws").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on the PZSWS menu...

selectElement(".home").addEventListener("click", () => {
    selectElement(".home-pzsp").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on the PZSP menu

selectElement(".home").addEventListener("click", () => {
    selectElement(".home-tpz").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on the TPZ

// ===================================
//        Home Sub-Menu Code
// ===================================

selectElement(".ctpzd").addEventListener("click", () => {
    selectElement(".ctpz").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".atvd").addEventListener("click", () => {
    selectElement(".atv").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".pogzd").addEventListener("click", () => {
    selectElement(".pogz").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".pzsw").addEventListener("click", () => {
    selectElement(".pzsws").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".pzspd").addEventListener("click", () => {
    selectElement(".pzsp").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".tpzd").addEventListener("click", () => {
    selectElement(".tpz").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".home").addEventListener("click", () => {
    selectElement(".home-menu").classList.toggle("active");
    console.log("activation string for home-menu");
});

// ===================================
//         About Menu Code
// ===================================

selectElement(".main-about-link").addEventListener("click", () => {
    selectElement(".au").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

// ===================================
//         Blogs Menu Code
// ===================================

selectElement(".main-blogs-link").addEventListener("click", () => {
    selectElement(".b").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

// ===================================
//       Socials+ Menu Code
// ===================================

selectElement(".socials").addEventListener("click", () => {
    selectElement(".socials-menu").classList.toggle("active");
    console.log("activation string for socials-menu");
}); // Needed or else the Socials+ Menu won't open...

selectElement(".main-socials-menu").addEventListener("click", () => {
    selectElement(".socials").classList.toggle("active");
    console.log("activation string for toggling the .main-nav-menu within the .main-socials-menu div");
});

selectElement(".projects").addEventListener("click", () => {
    selectElement(".projects-menu").classList.toggle("active");
    console.log("activation string for socials-menu");
}); // Needed or else the All Projects Menu won't open...

selectElement(".main-projects-menu").addEventListener("click", () => {
    selectElement(".projects").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

// ============================
//      Socials+ YouTube
//          Menu Code
// ============================

selectElement(".main-youtube-menu").addEventListener("click", () => {
    selectElement(".sub-youtube-menu").classList.toggle("active");
    console.log("activation string for sub-youtube-menu");
}); // This opens the "My YouTube Channels" Menu

// ============================
//      Socials+ YouTube
//       Sub-Menu Code
// ============================

selectElement(".sub-socials-menu").addEventListener("click", () => {
    selectElement(".mytc").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".sub-sub-socials-menu").addEventListener("click", () => {
    selectElement(".Z320TubeD").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".sub-sub-socials-menu").addEventListener("click", () => {
    selectElement(".ZD1TubeD").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".sub-sub-socials-menu").addEventListener("click", () => {
    selectElement(".ZD2TubeD").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".sub-sub-socials-menu").addEventListener("click", () => {
    selectElement(".ZD3TubeD").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".sub-sub-socials-menu").addEventListener("click", () => {
    selectElement(".ZD2CTubeD").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".sub-sub-socials-menu").addEventListener("click", () => {
    selectElement(".ZSBTubeD").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".sub-sub-socials-menu").addEventListener("click", () => {
    selectElement(".ZSBRTubeD").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".sub-sub-socials-menu").addEventListener("click", () => {
    selectElement(".ZDDVGTube").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".sub-sub-socials-menu").addEventListener("click", () => {
    selectElement(".TTOFWTubeD").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".sub-sub-socials-menu").addEventListener("click", () => {
    selectElement(".TTOFWOATD").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".sub-sub-socials-menu").addEventListener("click", () => {
    selectElement(".MITTube").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".sub-sub-socials-menu").addEventListener("click", () => {
    selectElement(".ZD4TubeD").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".sub-sub-socials-menu").addEventListener("click", () => {
    selectElement(".TPZTubeD").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".sub-sub-socials-menu").addEventListener("click", () => {
    selectElement(".PZSTubeD").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".sub-sub-socials-menu").addEventListener("click", () => {
    selectElement(".MGLLTubeD").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".sub-sub-socials-menu").addEventListener("click", () => {
    selectElement(".PZATubeD").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

// ===================================
//      Communities Menu Code
// ===================================

selectElement(".main-communities-menu").addEventListener("click", () => {
    selectElement(".sub-sub-communities-menu").classList.toggle("active");
    console.log("Toggled the dropdown menu for the My Communities Menu Item within the Socials+ Menu");
});

selectElement(".communities-menu").addEventListener("click", () => {
    selectElement(".communities").classList.toggle("active");
    console.log("Toggled the highlight box for the My Communities Menu Item within the Socials+ Menu");
}); // This is for the hover effect to be toggled when clicked/tapped on...

// ===================
//   Sub-Communities
//      Menu Code
// ===================

selectElement(".pzsdds").addEventListener("click", () => {
    selectElement(".pzsds").classList.toggle("active");
    console.log("Toggled the hover effect for PLAYER ZER0 STUDIOS Server Menu Item under the My Communities Sub-Dropdown inside the Socials+ Menu");
});

selectElement(".tndd").addEventListener("click", () => {
    selectElement(".tnd").classList.toggle("active");
    console.log("Toggled the hover effect for The Nebula Server Menu Item under the My Communities Sub-Dropdown inside the Socials+ Menu");
});

selectElement(".tphgd").addEventListener("click", () => {
    selectElement(".tphg").classList.toggle("active");
    console.log("Toggled the hover effect for THE PLAYERZ HANG0UT Guilded Server Menu Item under the My Communities Sub-Dropdown inside the Socials+ Menu");
});

selectElement(".tpzpd").addEventListener("click", () => {
    selectElement(".tpzp").classList.toggle("active");
    console.log("Toggled the hover effect for the Patreon Menu Item under the My Communities Sub-Dropdown inside the Socials+ Menu");
});

selectElement(".tpzrd").addEventListener("click", () => {
    selectElement(".tpzr").classList.toggle("active");
    console.log("Toggled the hover effect for the Reddit Menu Item under the My Communities Sub-Dropdown inside the Socials+ Menu");
});

// ===================
//   Wattpad Links
//     Menu Code
// ===================

selectElement(".wattpads-menu").addEventListener("click", () => {
    selectElement(".wattpads").classList.toggle("active");
    console.log("Toggled the highlight box for the Wattpads Menu Item within the Socials+ Menu");
});

selectElement(".wattpads").addEventListener("click", () => {
    selectElement(".sub-wattpads-menu").classList.toggle("active");
    console.log("Toggled the dropdown menu for the Wattpads Menu Item within the Socials+ Menu");
});

// ===================
//   Sub-Wattpads
//     Menu Code
// ===================

selectElement(".pogpadd").addEventListener("click", () => {
    selectElement(".POGPad").classList.toggle("active");
    console.log("Toggled the hover effect for the Player1Gamez Wattpad Book Menu Item under the Wattpads Sub-Dropdown inside the Socials+ Menu");
});

selectElement(".pzspadd").addEventListener("click", () => {
    selectElement(".PZSPad").classList.toggle("active");
    console.log("Toggled the hover effect for the PLAYER ZER0 STUDIOS Wattpad Book Menu Item under the Wattpads Sub-Dropdown inside the Socials+ Menu");
});

selectElement(".atvpadd").addEventListener("click", () => {
    selectElement(".ATVPad").classList.toggle("active");
    console.log("Toggled the hover effect for the Arbitrium TV Book Menu Item under the Wattpads Sub-Dropdown inside the Socials+ Menu");
});

selectElement(".ytapadd").addEventListener("click", () => {
    selectElement(".YTAPad").classList.toggle("active");
    console.log("Toggled the hover effect for the YouTube Audio Book Menu Item under the Wattpads Sub-Dropdown inside the Socials+ Menu");
});

// ===================
//   Star Fam Links
//     Menu Code
// ===================

selectElement(".stars-menu").addEventListener("click", () => {
    selectElement(".sub-stars-menu").classList.toggle("active");
    console.log("Toggled the dropdown menu for the Star Fam Menu Item within the Socials+ Menu");
});

selectElement(".stars-menu").addEventListener("click", () => {
    selectElement(".stars").classList.toggle("active");
    console.log("Toggled the hover effect for the Star Fam Menu Item within the Socials+ Menu");
});

// ===================
//     The Star Fam
//  Sub-Links Menu Code
// ===================

selectElement(".ytfsb").addEventListener("click", () => {
    selectElement(".Stealthy").classList.toggle("active");
    console.log("Toggled the hover effect for the Stealth Menu Item under the Star Fam Sub-Dropdown inside the Socials+ Menu");
});

selectElement(".ytfkk").addEventListener("click", () => {
    selectElement(".Kirby").classList.toggle("active");
    console.log("Toggled the hover effect for the Kirby Menu Item under the Star Fam Sub-Dropdown inside the Socials+ Menu");
});

selectElement(".ytfng").addEventListener("click", () => {
    selectElement(".Ninota").classList.toggle("active");
    console.log("Toggled the hover effect for the Ninota Menu Item under the Star Fam Sub-Dropdown inside the Socials+ Menu");
});

selectElement(".ytfjb").addEventListener("click", () => {
    selectElement(".Jacob").classList.toggle("active");
    console.log("Toggled the hover effect for the Jacob Menu Item under the Star Fam Sub-Dropdown inside the Socials+ Menu");
});

selectElement(".ytfnb").addEventListener("click", () => {
    selectElement(".Nathan").classList.toggle("active");
    console.log("Toggled the hover effect for the Nathan Menu Item under the Star Fam Sub-Dropdown inside the Socials+ Menu");
});

selectElement(".ytfjw").addEventListener("click", () => {
    selectElement(".Joshua").classList.toggle("active");
    console.log("Toggled the hover effect for the Josh Menu Item under the Star Fam Sub-Dropdown inside the Socials+ Menu");
});

// ===================================
//      The Other Items's
//          Menu Codes
// ===================================

selectElement(".others-menu").addEventListener("click", () => {
    selectElement(".sub-others-menu").classList.toggle("active");
    console.log("Toggled the dropdown menu for the Others Dropdown Menu under the Others Sub-Dropdown inside the Socials+ Menu");
});

selectElement(".others-menu").addEventListener("click", () => {
    selectElement(".others").classList.toggle("active");
    console.log("Toggled the hover effect for the Others Dropdown Menu Item under the Others Sub-Dropdown inside the Socials+ Menu");
});

// ===================
//   Sub-Others Menu
//      Menu Code
// ===================

selectElement(".tpzghd").addEventListener("click", () => {
    selectElement(".tpzgh").classList.toggle("active");
    console.log("Toggled the hover effect for the GitHub Menu Item under the Others Sub-Dropdown inside the Socials+ Menu");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".tpzgld").addEventListener("click", () => {
    selectElement(".tpzgl").classList.toggle("active");
    console.log("Toggled the hover effect for the GitLab Menu Item under the Others Sub-Dropdown inside the Socials+ Menu");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".tpzlid").addEventListener("click", () => {
    selectElement(".tpzli").classList.toggle("active");
    console.log("Toggled the hover effect for the LinkedIn Menu Item under the Others Sub-Dropdown inside the Socials+ Menu");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".tpztd").addEventListener("click", () => {
    selectElement(".tpzt").classList.toggle("active");
    console.log("Toggled the hover effect for the Tracle Menu Item under the Others Sub-Dropdown inside the Socials+ Menu");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".tpzttvd").addEventListener("click", () => {
    selectElement(".tpzttv").classList.toggle("active");
    console.log("Toggled the hover effect for the Twitch Menu Item under the Others Sub-Dropdown inside the Socials+ Menu");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".tpzbirbd").addEventListener("click", () => {
    selectElement(".tpzbirb").classList.toggle("active");
    console.log("Toggled the hover effect for the Twitter Menu Item under the Others Sub-Dropdown inside the Socials+ Menu");
}); // This is for the hover effect to be toggled when clicked/tapped on...








// ===================================
//      All Projects Items's
//          Menu Codes
// ===================================

selectElement(".projects").addEventListener("click", () => {
    selectElement(".projects-menu").classList.toggle("active");
    console.log("activation string for socials-menu");
}); // Needed or else the All Projects Menu won't open...

selectElement(".main-projects-menu").addEventListener("click", () => {
    selectElement(".projects").classList.toggle("active");
    console.log("activation string for toggling the main-nav-menu within the .main-home-menu div");
}); // This is for the hover effect to be toggled when clicked/tapped on...

selectElement(".apps").addEventListener("click", () => {
    selectElement(".sub-apps-menu").classList.toggle("active");
    console.log("Toggled the sub-apps-menu to open the Applications Dropdown Menu");
});

selectElement(".apps").addEventListener("click", () => {
    selectElement(".apps").classList.toggle("active");
    console.log("Toggled the apps class to activate the Hover Effect for the Applications Menu");
}); // This is to open the book-menu

selectElement(".apps").addEventListener("click", () => {
    selectElement(".project-apps").classList.toggle("active");
    console.log("Toggled the dual highlight for both All Projects and the Applications menu!");
});

// ===================================
//      All Projects Sub-Items's
//       Applications Menu Codes
// ===================================

selectElement(".dbapp").addEventListener("click", () => {
    selectElement(".db").classList.toggle("active");
    console.log("Toggled the highlight box for the Discord Bots Item within the Application Dropdown Sub-Menu within the All Projects Dropdown Menu");
}); // This is for the gray box menu when tapping on it.

selectElement(".ffapp").addEventListener("click", () => {
    selectElement(".ff").classList.toggle("active");
    console.log("Toggled the highlight box for Free Flow Item within the Application Dropdown Sub-Menu within the All Projects Dropdown Menu");
}); // This is for the gray box menu when tapping on it.

selectElement(".sndapp").addEventListener("click", () => {
    selectElement(".snd").classList.toggle("active");
    console.log("Toggled the highlight box for Subz 'N Dubz Item within the Application Dropdown Sub-Menu within the All Projects Dropdown Menu");
}); // This is for the gray box menu when tapping on it.

selectElement(".atvmapp").addEventListener("click", () => {
    selectElement(".atvm").classList.toggle("active");
    console.log("Toggled the highlight box for Arbitrium TV Mobile Application Item within the Application Dropdown Sub-Menu within the All Projects Dropdown Menu");
});

// ==============================
//     All Projects Books
//          Menu Code
// ==============================

selectElement(".main-books-menu").addEventListener("click", () => {
    selectElement(".books").classList.toggle("active");
    console.log("Toggled the Hover Box for the Books Menu within the All Projects Main Menu");
});

selectElement(".books").addEventListener("click", () => {
    selectElement(".sub-books-menu").classList.toggle("active");
    console.log("Toggled the Dropdown Menu for the Books Menu within the All Projects Main Menu");
});

selectElement(".books").addEventListener("click", () => {
    selectElement(".project-books").classList.toggle("active");
    console.log("Toggled the Dual Hover Box for the Books Menu within the All Projects Main Menu");
});

// ==============================
//     All Projects Sub-Books
//            Menu Code
// ==============================


// ===============
//    More Menu
//  Dropdown Code
// ===============

selectElement(".main-more-menu").addEventListener("click", () => {
    selectElement(".more-menu").classList.toggle("active");
    console.log("Toggled the More navigation menu within the More Main Menu");
});

selectElement(".main-more-menu").addEventListener("click", () => {
    selectElement(".more-menu").classList.toggle("active");
    console.log("Toggled the hover box for the Sub More Menu within the More Main Menu");
});

// ===============
//  Sub-More Menu
//  Dropdown Code
// ===============

selectElement(".cmd").addEventListener("click", () => {
    selectElement(".cm").classList.toggle("active");
    console.log("activation string for toggling the fa-caret-down tag");
});

selectElement(".mpd").addEventListener("click", () => {
    selectElement(".mp").classList.toggle("active");
    console.log("activation string for toggling the fa-caret-down tag");
});

selectElement(".rlnd").addEventListener("click", () => {
    selectElement(".rln").classList.toggle("active");
    console.log("activation string for toggling the fa-caret-down tag");
});

// ===============
//    Dual Hover
//  Highlight Code
// ===============

selectElement(".mytc").addEventListener("click", () => {
    selectElement(".socials-youtube").classList.toggle("active");
    console.log("Toggled the dual highlight for Social's Media Dropdown Menu Link and the Socials+ Menu");
});

selectElement(".communities").addEventListener("click", () => {
    selectElement(".socials-community").classList.toggle("active");
    console.log("Toggled the dual highlight for Social's Communities Dropdown Menu Link and the Socials+ Menu");
});

selectElement(".wattpads").addEventListener("click", () => {
    selectElement(".socials-wattpads").classList.toggle("active");
    console.log("Toggled the dual highlight for Social's Publishing Sites Dropdown Menu Link and the Socials+ Menu");
});

selectElement(".stars").addEventListener("click", () => {
    selectElement(".socials-stars").classList.toggle("active");
    console.log("Toggled the dual highlight for Social's Star Fam Dropdown Menu Link and the Socials+ Menu");
});

selectElement(".others").addEventListener("click", () => {
    selectElement(".socials-others").classList.toggle("active");
    console.log("Toggled the dual highlight for Social's Other Dropdown Menu Link and the Socials+ Menu");
});

selectElement(".apps").addEventListener("click", () => {
    selectElement(".project-apps").classList.toggle("active");
    console.log("Toggled the dual highlight for PLAYER ZER0 STUDIOS Applications Menu Link and the All Project Menu");
});

selectElement(".books").addEventListener("click", () => {
    selectElement(".project-books").classList.toggle("active");
    console.log("Toggled the dual highlight for Arbitrium TV's Books Menu Link and the All Project Menu");
});

selectElement(".atvd").addEventListener("click", () => {
    selectElement(".project-casting").classList.toggle("active");
    console.log("Toggled the dual highlight for Arbitrium TV Menu Link and the All Project Menu");
});