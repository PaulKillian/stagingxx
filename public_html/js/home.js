// export const Home = document.getElementById('router-view').innerHTML = `
// <section id="intro" class="animated fadeIn delay--5s">
// <div class="wrapper d-flex justify-content-end text-right">
//   <div class="intro-graphic d-md-none col-md-7 clearfix">
//     <img id="intro-graphic" src="assets/Homepage_Main_Image_Red_XX_Square.png" class="img-fluid animated fadeIn  delay--5s" alt="XX Artists" />
//   </div>
//   <div class="col-md-5 overflow-hidden">
//     <div class="content">
//       <img src="assets/xxArtistsTMCircle.png" class="img-fluid heading animated fadeInUp delay--5s" alt="Building Experiences Worth Sharing" />
//       <img src="assets/Homepage_Building_Experiences_Headline.png" class="img-fluid subtitle animated fadeInUp  delay--5s" alt="Building Experiences Worth Sharing" />
//     </div>
//   </div>
//   <div class="intro-graphic d-none d-md-block col-md-7">
//     <img id="intro-graphic" src="assets/Homepage_Main_Image_Red_XX_Square.png" class="img-fluid animated fadeIn  delay--5s" alt="XX Artists" />
//   </div>
// </div>
// </section>
// <section id="who-gsap" class="container-fluid">
// <div id="spotlight"></div>
// <div class="spotlight_text caps">
//   <div class="glass">WHO</div>
//   <div class="glass">WE</div>
//   <div class="glass">ARE</div>
// </div>
// <div class="row set-height">
//   <img id="who-elipse" src="assets/Lets_XX_ElipsePattern_2.png" class="img-fluid" alt="transition-elipse">
//   <img id="who-solid-elipse" src="assets/Trans_1_Large_Red_Ellipse.png" class="img-fluid" alt="transition-red-elipse">
//   <img id="who-red-elipse" src="assets/Trans_1_Small_Red_Ring.png" class="img-fluid" alt="transition-red-elipse">
//   <img id="who-black-elipse" src="assets/Trans_1_Large_Black_Ring.png" alt="transition-black-elipse">
//   <div class="col-12 my-auto caps text-center inview animated" data-ease="fadeIn">
//     <div class="change-who">Who</div>
//     <div class="change-who">We</div>
//     <div class="change-who">Are</div>
//   </div>
// </div>
// </section>
// <section id="who" class="container-fluid">
// <div class="row">
//   <div class="col-md-7 text-center position-relative">
//     <img id="moon-bg" src="assets/moon_bkg.png" class="img-fluid inview animated" data-ease="fadeIn" alt="XX Artists" />
//     <div class="moon-container">
//       <img id="moon-left" src="assets/moon_left.png" class="img-fluid" alt="transition-red-elipse">
//       <img id="moon-right" src="assets/moon_right.png" class="img-fluid" alt="transition-red-elipse">
//     </div>
//   </div>
//   <div class="col-md-5 text-right">
//     <div class="mb-2 heading">
//       <div class="clearfix">
//         <div class="dot full pull-right inview animated" data-ease="fadeInDown"></div>
//       </div>
//       <img id="who-title" src="assets/Who_Is_XX_Page_Headline_W_Red_Dot.png" class="img-fluid inview animated delay--5s" data-ease="fadeInRight" alt="Who is XX?" />
//     </div>
//     <div class="clearfix">
//       <p class="mt-2 pull-right inview animated w-400" data-ease="fadeInUp">xx Artists is a boutique digital marketing agency located in Playa Vista, CA </p>
//     </div>
//     <div class="clearfix mb-4">
//       <div class="mt-2 dot sm pull-right inview animated" data-ease="fadeInUp"></div>
//     </div>
//     <p class="expand text-left pt-5 inview animated delay--5s" data-ease="fadeInUp"><img src="assets/Who_Is_XX_Page_Grey_X_Small.png" /><br />We break the agency mold, providing superior social marketing services and operating as an extension
//       of our clients' teams. Together, we create community through content and execute strategies that bring brands to life on the internet.</p>
//   </div>
// </div>
// </section>
// <section id="what-gsap" class="container-fluid">
// <div id="spotlight2"></div>
// <div class="spotlight_text caps">
//   <div class="glass">WHAT</div>
//   <div class="glass">WE</div>
//   <div class="glass">ARE</div>
// </div>
// <div class="row set-height">
//   <img id="what-elipse" src="assets/Lets_XX_ElipsePattern_2.png" class="img-fluid" alt="transition-elipse">
//   <img id="what-solid-elipse" src="assets/Trans_1_Large_Red_Ellipse.png" class="img-fluid" alt="transition-red-elipse">
//   <img id="what-red-elipse" src="assets/Trans_1_Small_Red_Ring.png" class="img-fluid" alt="transition-red-elipse">
//   <img id="what-black-elipse" src="assets/Trans_1_Large_Black_Ring.png" class="img-fluid" alt="transition-black-elipse">
//   <img id="what-red-ball" src="assets/Lets_XX_ElipsePattern_Red.png" class="img-fluid" alt="transition-red-elipse">
//   <div class="col-12 my-auto caps text-center inview animated" data-ease="fadeIn">
//     <div class="change-what">What</div>
//     <div class="change-what">We</div>
//     <div class="change-what">Are</div>
//   </div>
// </div>
// </section>
// <section id="what" class="container-fluid">
// <div class="row">
//   <div class="col-md-5 text-center">
//     <div class="mb-2">
//       <div class="dot full inview animated" data-ease="fadeInDown"></div>
//       <img id="what-title" src="assets/What_Is_XX_Headline_Asset.png" class="d-block img-fluid inview animated" data-ease="fadeInLeft" alt="What is XX?" />
//     </div>
//     <p class="text-left inview animated delay--5s" data-ease="fadeInUp">We pride ourselves in delivering tailor-made, end-to-end digital marketing campaigns. We build lasting relationships with our partners, serving as an agency of record for
//       any or all of our core services.</p>
//     <img src="assets/What_Is_XX_Ellipse_Pattern.png" class="img-fluid d-none d-md-none d-lg-block pt-4 mt-5 inview animated  delay--5s" alt="XX Artists" data-ease="fadeInLeft" />
//   </div>
//   <div class="col-md-7">
//     <div class="row no-gutters">
//       <div class="col-4 inview animated delay--5s" data-ease="fadeInDown"><img src="assets/What_Is_XX_Large_XX_Icon_Pattern.png" class="img-fluid" alt="XX Artists" /></div>
//       <div class="col-4 inview animated delay--5s" data-ease="fadeInUp"><img src="assets/What_Is_XX_Large_XX_Icon_Pattern.png" class="img-fluid" alt="XX Artists" /></div>
//       <div class="col-4 inview animated delay--5s" data-ease="fadeInDown"><img src="assets/What_Is_XX_Large_XX_Icon_Pattern.png" class="img-fluid" alt="XX Artists" /></div>
//     </div>
//   </div>
// </div>
// </section>
// <section id="social-media-mgmt" class="container-fluid">
// <div class="row">
//   <div class="d-none d-lg-block col-lg-3">
//     <img id="services-mm-squiggle" src="assets/SMM_Page_XX_Squiggle_Pattern.png" class="img-fluid inview animated" data-ease="fadeIn" alt="Squiggle Pattern Image" />
//   </div>
//   <div class="col-sm-12 col-md-8 col-lg-5">
//     <div class="group d-flex justify-content-between">
//       <div class="number inview animated delay--5s" data-ease="fadeInDown"><img src="assets/number_1.png" class="img-fluid" alt="Social Media Mgmt" /></div>
//       <div class="dots inview animated" data-ease="fadeInDown">
//         <div class="dots-wrapper right">
//           <span class="full"></span>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//     </div>
//     <div class="mt-3 inview animated" data-ease="fadeInUp"><img src="assets/SMM_Page_Headline_Asset.png" class="img-fluid" alt="What is XX?" /></div>
//     <div id="services-sm-uls" class="services">
//       <ul class="d-flex justify-content-between services-list">
//         <li>
//           <img src="assets/SMM_Page_S_Icon.png" class="service-img img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end text-muted">01</div>
//           <div class="service-lines">Strategy <br></div>
//         </li>
//         <li>
//           <img src="assets/SMM_Page_CC_Icon.png" class="service-img img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end text-muted">02</div>
//           <div class="service-lines">Content <br>Creation</div>
//         </li>
//         <li>
//           <img src="assets/SMM_Page_PM_Icon.png" class="service-img img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end text-muted">03</div>
//           <div class="service-lines">Platform <br>Management</div>
//         </li>
//       </ul>
//       <ul class="d-flex justify-content-between services-list bottom">
//         <li>
//           <img src="assets/SMM_Page_CM_Icon.png" class="service-img d-md-none img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end d-md-none text-muted">04</div>
//           <div class="service-lines">Community <br>Management</div>
//           <div class="d-flex justify-content-end d-none text-muted">04</div>
//           <img src="assets/SMM_Page_CM_Icon.png" class="service-img d-none d-md-block img-fluid" alt="S icon">
//         </li>
//         <li>
//           <img src="assets/SMM_Page_ES_Icon.png" class="service-img d-md-none img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end d-md-none text-muted">05</div>
//           <div class="service-lines">Events <br>Coverage</div>
//           <div class="d-flex justify-content-end d-none text-muted">05</div>
//           <img src="assets/SMM_Page_ES_Icon.png" class="service-img d-none d-md-block img-fluid" alt="S icon">
//         </li>
//         <li>
//           <img src="assets/SMM_Page_CS_Icon.png" class="service-img d-md-none img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end d-md-none text-muted">06</div>
//           <div class="service-lines">Corporate <br>Social</div>
//           <div class="d-flex justify-content-end d-none text-muted">06</div>
//           <img src="assets/SMM_Page_CS_Icon.png" class="service-img d-none d-md-block img-fluid" alt="S icon">
//         </li>
//       </ul>
//     </div>
//   </div>
//   <div class="d-none d-md-block col-md-4 services-ellipses">
//     <img src="assets/SMM_Page_Large_XX_Icon.png" class="img-fluid inview animated delay--5s" data-ease="fadeInRight" alt="Squiggle Pattern Image" />
//   </div>
// </div>
// </section>
// <section id="production-services" class="container-fluid">
// <div class="row">
//   <div class="d-none d-lg-block col-lg-4">
//     <img src="assets/PM_Page_Ellipse_X_Pattern.png" class="img-fluid" alt="Squiggle Pattern Image" />
//   </div>
//   <div class="col-md-12 col-lg-8 col-xl-7">
//     <div class="service-indent">
//       <div class="group d-flex justify-content-between">
//         <div class="dots inview animated" data-ease="fadeInDown">
//           <div class="dots-wrapper">
//             <span></span>
//             <span class="full"></span>
//             <span></span>
//             <span></span>
//           </div>
//         </div>
//         <div class="number inview animated delay--5s" data-ease="fadeInDown"><img src="assets/number_2.png" class="img-fluid" alt="Production Services" /></div>
//       </div>
//       <div class="mt-3 inview animated" data-ease="fadeInUp"><img src="assets/PM_Page_Headline_Assets.png" class="img-fluid" alt="Production Services" /></div>
//     </div>
//     <div id="services-pm-uls" class="services">
//       <ul class="d-flex justify-content-between services-list">
//         <li>
//           <img src="assets/PM_Page_CC_Icon.png" class="service-img img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end text-muted">01</div>
//           <div class="service-lines">Creative <br>Concepting</div>
//         </li>
//         <li>
//           <img src="assets/PM_Page_PP_1_Icon.png" class="service-img img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end text-muted">02</div>
//           <div class="service-lines">Pre-Production <br></div>
//         </li>
//         <li>
//           <img src="assets/PM_Page_PM_Icon.png" class="service-img img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end text-muted">03</div>
//           <div class="service-lines">Production <br></div>
//         </li>
//       </ul>
//       <ul class="d-flex justify-content-between services-list bottom">
//         <li>
//           <img src="assets/PM_Page_PP_2_Icon.png" class="service-img d-md-none img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end d-md-none text-muted">04</div>
//           <div class="service-lines">Post <br>Production</div>
//           <div class="d-flex justify-content-end d-none text-muted">04</div>
//           <img src="assets/PM_Page_PP_2_Icon.png" class="service-img d-none d-md-block img-fluid" alt="S icon">
//         </li>
//         <li>
//           <img src="assets/PM_Page_PC_Icon.png" class="service-img d-md-none img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end d-md-none text-muted">05</div>
//           <div class="service-lines">Promotional <br>Content</div>
//           <div class="d-flex justify-content-end d-none text-muted">05</div>
//           <img src="assets/PM_Page_PC_Icon.png" class="service-img d-none d-md-block img-fluid" alt="S icon">
//         </li>
//         <li>
//           <img src="assets/PM_Page_TB_Icon.png" class="service-img d-md-none img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end d-md-none text-muted">06</div>
//           <div class="service-lines">Talent <br>Booking</div>
//           <div class="d-flex justify-content-end d-none text-muted">06</div>
//           <img src="assets/PM_Page_TB_Icon.png" class="service-img d-none d-md-block img-fluid" alt="S icon">
//         </li>
//       </ul>
//     </div>
//   </div>
//   <div class="d-none d-xl-block col-xl-1"></div>
// </section>
// <section id="talent-partnerships" class="container-fluid">
// <div class="row">
//   <div class="d-none d-lg-block col-lg-2 services-ellipses inview animated" data-ease="fadeInLeft">
//     <img src="assets/TP_Page_Large_Black_XX_Icon.png" class="img-fluid" alt="Squiggle Pattern Image" />
//   </div>
//   <div class="col-md-8 col-lg-6">
//     <div class="group d-flex justify-content-between">
//       <div class="number inview animated delay--5s" data-ease="fadeInDown"><img src="assets/number_3.png" class="img-fluid" alt="Talent Partnerships" /></div>
//       <div class="dots inview animated" data-ease="fadeInDown">
//         <div class="dots-wrapper right">
//           <span></span>
//           <span></span>
//           <span class="full"></span>
//           <span></span>
//         </div>
//       </div>
//     </div>
//     <div class="mt-3 inview animated" data-ease="fadeInUp"><img src="assets/TP_Page_Headline_Asset.png" class="img-fluid" alt="Talent Partnerships" /></div>
//     <div id="services-tp-uls" class="services">
//       <ul class="d-flex justify-content-between services-list">
//         <li>
//           <img src="assets/TP_Page_S_Icon.png" class="service-img img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end text-muted">01</div>
//           <div class="service-lines">Strategy <br></div>
//         </li>
//         <li>
//           <img src="assets/TP_Page_O_Icon.png" class="service-img img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end text-muted">02</div>
//           <div class="service-lines">Outreach <br></div>
//           <div></div>
//         </li>
//         <li>
//           <img src="assets/TP_Page_TC_Icon.png" class="service-img img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end text-muted">03</div>
//           <div class="service-lines">Talent <br>Coordination</div>
//           <div></div>
//         </li>
//       </ul>
//       <ul class="d-flex justify-content-between services-list bottom">
//         <li>
//           <img src="assets/TP_Page_CI_Icon.png" class="service-img d-md-none img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end d-md-none text-muted">04</div>
//           <div class="service-lines">Campaign <br>Ideation</div>
//           <div class="d-flex justify-content-end d-none text-muted">04</div>
//           <img src="assets/TP_Page_CI_Icon.png" class="service-img d-none d-md-block img-fluid" alt="S icon">
//         </li>
//         <li>
//           <img src="assets/TP_Page_CP_Icon.png" class="service-img d-md-none img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end d-md-none text-muted">05</div>
//           <div class="service-lines">Campaign <br>Production</div>
//           <div class="d-flex justify-content-end d-none text-muted">05</div>
//           <img src="assets/TP_Page_CP_Icon.png" class="service-img d-none d-md-block img-fluid" alt="S icon">
//         </li>
//         <li>
//           <img src="assets/TP_Page_G_Icon.png" class="service-img d-md-none img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end d-md-none text-muted">06</div>
//           <div class="service-lines"><br>Gifting</div>
//           <div class="d-flex justify-content-end d-none text-muted">06</div>
//           <img src="assets/TP_Page_G_Icon.png" class="service-img d-none d-md-block img-fluid" alt="S icon">
//         </li>
//       </ul>
//     </div>
//   </div>
//   <div class="d-none d-md-block col-md-4 col-lg-4">
//     <img src="assets/TP_Page_X_Ellipse_Pattern.png" class="img-fluid services-pattern inview animated delay--5s" data-ease="fadeIn" alt="Squiggle Pattern Image" />
//   </div>
// </div>
// </section>
// <section id="digital-music-services" class="container-fluid">
// <div class="row">
//   <div class="d-none d-lg-block col-lg-4">
//     <img src="assets/DM_Page_Ellipse_X_Pattern.png" class="img-fluid" alt="Squiggle Pattern Image" />
//   </div>
//   <div class="col-md-12 col-lg-8 col-xl-7">
//     <div class="service-indent">
//       <div class="group d-flex justify-content-between">
//         <div class="dots inview animated" data-ease="fadeInDown">
//           <div class="dots-wrapper">
//             <span></span>
//             <span></span>
//             <span></span>
//             <span class="full"></span>
//           </div>
//         </div>
//         <div class="number inview animated delay--5s" data-ease="fadeInDown"><img src="assets/number_4.png" class="img-fluid" alt="Digital Music Services" /></div>
//       </div>
//       <div class="mt-3 inview animated" data-ease="fadeInUp"><img src="assets/DM_Page_Headline_Asset.png" class="img-fluid" alt="Digital Music Services" /></div>
//     </div>
//     <div id="services-dm-uls" class="services">
//       <ul class="d-flex justify-content-between services-list">
//         <li>
//           <img src="assets/DM_Page_RD_Icon.png" class="service-img img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end text-muted">01</div>
//           <div class="service-lines">Research + <br>Development</div>
//         </li>
//         <li>
//           <img src="assets/DM_Page_MC_Icon.png" class="service-img img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end text-muted">02</div>
//           <div class="service-lines">Marketing <br>Campaign Creation</div>
//         </li>
//         <li>
//           <img src="assets/DM_Page_PM_Icon.png" class="service-img img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end text-muted">03</div>
//           <div class="service-lines">Publishing + <br>Platform Management</div>
//         </li>
//       </ul>
//       <ul class="d-flex justify-content-between services-list bottom">
//         <li>
//           <img src="assets/DM_Page_CP_Icon.png" class="service-img d-md-none img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end d-md-none text-muted">04</div>
//           <div class="service-lines">Content Production + <br>Design</div>
//           <div class="d-flex justify-content-end d-none text-muted">04</div>
//           <img src="assets/DM_Page_CP_Icon.png" class="service-img d-none d-md-block img-fluid" alt="S icon">
//         </li>
//         <li>
//           <img src="assets/DM_Page_FM_Icon.png" class="service-img d-md-none img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end d-md-none text-muted">05</div>
//           <div class="service-lines">Community + <br>Fan Management</div>
//           <div class="d-flex justify-content-end d-none text-muted">05</div>
//           <img src="assets/DM_Page_FM_Icon.png" class="service-img d-none d-md-block img-fluid" alt="S icon">
//         </li>
//         <li>
//           <img src="assets/DM_Page_TR_Icon.png" class="service-img d-md-none img-fluid" alt="S icon">
//           <div class="d-flex justify-content-end d-md-none text-muted">06</div>
//           <div class="service-lines">Tracking + <br>Reporting</div>
//           <div class="d-flex justify-content-end d-none text-muted">06</div>
//           <img src="assets/DM_Page_TR_Icon.png" class="service-img d-none d-md-block img-fluid" alt="S icon">
//         </li>
//       </ul>
//     </div>
//   </div>
//   <div class="d-none d-xl-block col-xl-1"></div>
// </section>
// <section id="who-works-with-xx" class="container-fluid">
// <div class="row">
//   <div class="col-lg-6">
//     <img src="assets/WHO_WORKS_WITH.png" class="headline img-fluid" alt="Who Works with XX" />
//   </div>
//   <div class="col-md-12 col-lg-6">
//     <div class="service-indent">
//       <div class="group d-flex justify-content-between">
//         <div class="number d-none d-lg-block inview animated delay--5s" data-ease="fadeInDown"><img src="assets/ring_2.png" class="img-fluid" alt="Who Works with XX" /></div>
//       </div>
//     </div>
//   </div>
//   <div id="services-wwx-uls" class="services">
//     <ul class="d-flex flex-wrap mb-0">
//       <li>
//         <img src="assets/youtube.png" class="service-brand img-fluid" alt="Youtube">
//       </li>
//       <li>
//         <img src="assets/youtube_gaming.png" class="service-brand img-fluid" alt="Youtube Gaming">
//       </li>
//       <li>
//         <img src="assets/mattel.png" class="service-brand img-fluid" alt="Mattel">
//       </li>
//       <li>
//         <img src="assets/robinhood.png" class="service-brand img-fluid" alt="Robinhood">
//       </li>
//       <li>
//         <img src="assets/lillysingh.png" class="service-brand img-fluid" alt="Lilly Singh">
//       </li>
//       <li>
//         <img src="assets/biossa.png" class="service-brand img-fluid" alt="Biossance">
//       </li>
//       <li>
//         <img src="assets/kobalt.png" class="service-brand img-fluid" alt="Kobalt">
//       </li>
//       <li>
//         <img src="assets/300.png" class="service-brand img-fluid" alt="300">
//       </li>
//       <li>
//         <img src="assets/nbcuni.png" class="service-brand img-fluid" alt="NBC Universal">
//       </li>
//     </ul>
//     <div class="dots-gray"><img src="assets/dots-Circles.png" class="img-fluid" alt="Who Works with XX" /></div>
//   </div>
//   <div class="d-none d-xl-block col-xl-1"></div>
// </section>
// <section id="where" class="container-fluid">
// <div class="row">
//   <div class="col-md-7">
//     <img src="assets/Where_Is_XX_CirclePalmCity.png" class="img-fluid inview animated delay--5s" data-ease="zoomIn" alt="XX Artists" />
//   </div>
//   <div class="col-md-5 text-right">
//     <div class="mb-2 heading">
//       <div class="clearfix">
//         <div class="dot full pull-right inview animated" data-ease="fadeInDown"></div>
//       </div>
//       <img id="where-title" src="assets/Where_Is_XX_Headline.png" class="img-fluid inview animated delay--5s" data-ease="fadeInRight" alt="Who is XX?" />
//     </div>
//     <div class="clearfix offset">
//       <p class="mt-2 pull-right inview animated" data-ease="fadeInUp">LA based, global presence.</p>
//     </div>
//     <div class="clearfix offset mb-4">
//       <div class="mt-2 dot sm pull-right inview animated" data-ease="fadeInUp"></div>
//     </div>
//     <!-- <p class="text-left" id="where-marker"><img src="assets/Where_Is_XX_Location_Marker.png" alt="XX Artists" /><br />12130 Millennium Dr. Suite 300<br />Los Angeles, CA 90094</p> -->
//   </div>
// </div>
// </section>
// <section id="lets" class="container-fluid">
// <div id="sm-dots">
//   <img src="assets/O_s X_s Pattern_2.png" class="img-fluid" alt="lets-dots">
// </div>
// <div id="team-solid-elipse" class="ring-wrapper">
//   <img src="assets/Trans_1_Large_Red_Ellipse.png" class="img-fluid" alt="transition-red-elipse" />
// </div>
// <div id="team-dot" class="ring-wrapper">
//   <div class="ring"></div>
// </div>
// <div id="team-dots-rings" class="ring-wrapper">
//   <div class="red-dot"></div>
//   <div class="ring"></div>
// </div>
// <div id="team-dot-right" class="ring-wrapper">
//   <div class="ring"></div>
// </div>
// <div id="team-dot-bottom" class="ring-wrapper">
//   <div class="ring"></div>
// </div>
// <div id="team-blk-dot-bottom" class="ring-wrapper">
//   <img src="assets/lineup_dots.png" class="img-fluid" alt="transition-red-elipse">
// </div>
// <div class="row higher-lvl inview animated delay--5s" data-ease="fadeInDown">
//   <div class="col-md-1 mr-5"></div>
//   <div class="col-md-4 text-right headline">
//     <img src="assets/Lets_XX_HeadlineWithDot.png" class="img-fluid" alt="Lets XX!" />
//   </div>
// </div>
// <div class="row">
//   <div class="col-0 col-md-2 col-lg-3">
//     <img id="meet-the-team" src="assets/Lets_XX_MeetTheTeam.png" class="img-fluid float-right d-none d-sm-none d-md-block inview animated delay--4s" data-ease="fadeInUp" alt="Meet The Team" />
//   </div>
//   <div class="col-12 col-md-10 col-lg-9">
//     <div id="team-grid" class="swiper-container inview animated">
//       <div class="swiper-wrapper">
//         <div class="grid-item long">
//           <div class="img-wrapper" style="background-image: url('assets/Kyle_Kuhns.jpg');">
//             <div class="caption">
//               <h5>Kyle Kuhns</h5> President/Founder
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Ashley_Brown.jpg');">
//             <div class="caption">
//               <h5>Ashley Brown</h5> Chief of Staff
//             </div>
//           </div>
//         </div>
//         <div class="grid-item long">
//           <div class="img-wrapper" style="background-image: url('assets/Allegra_Salke-Hussey.jpg');">
//             <div class="caption">
//               <h5>Allegra Salke-Hussey</h5> Vice President, Business Development
//             </div>
//           </div>
//         </div>
//         <div class="grid-item long">
//           <div class="img-wrapper" style="background-image: url('assets/Melissa_Mondello.jpg');">
//             <div class="caption">
//               <h5>Melissa Mondello</h5> Senior Director, Music Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item short">
//           <div class="img-wrapper" style="background-image: url('assets/Amanda_Brennan.jpg');">
//             <div class="caption">
//               <h5>Amanda Brennan</h5> Senior Director, Trends Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item short">
//           <div class="img-wrapper" style="background-image: url('assets/PJ_Alampi.jpg');">
//             <div class="caption">
//               <h5>PJ Alampi</h5> Director, Brand Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Stephanie_Ruby.jpg');">
//             <div class="caption">
//               <h5>Stephanie Ruby</h5> Director, Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Victoria_Nelson.jpg');">
//             <div class="caption">
//               <h5>Victoria Nelson</h5> Director, Talent Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item short">
//           <div class="img-wrapper" style="background-image: url('assets/Ryan_Kravontka.jpg');">
//             <div class="caption">
//               <h5>Ryan Kravontka</h5> Director, Business Development
//             </div>
//           </div>
//         </div>
//         <div class="grid-item long">
//           <div class="img-wrapper" style="background-image: url('assets/Mackenna_Millet.jpg');">
//             <div class="caption">
//               <h5>Mackenna Millet</h5> Director, Design
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Nate_Makuch.jpg');">
//             <div class="caption">
//               <h5>Nathan Makuch</h5> Director, Creative
//             </div>
//           </div>
//         </div>
//         <div class="grid-item short">
//           <div class="img-wrapper" style="background-image: url('assets/Andreas_Riter.jpg');">
//             <div class="caption">
//               <h5>Andreas Riter</h5> Creative Strategist
//             </div>
//           </div>
//         </div>
//         <div class="grid-item short">
//           <div class="img-wrapper" style="background-image: url('assets/Chelsea_Gray.jpg');">
//             <div class="caption">
//               <h5>Chelsea Gray</h5> Associate Director, Analytics and Insights
//             </div>
//           </div>
//         </div>
//         <div class="grid-item short">
//           <div class="img-wrapper" style="background-image: url('assets/Domarina_Danipour.jpg');">
//             <div class="caption">
//               <h5>Domarina Danipour</h5> Executive Assistant
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Chloe_Mays.jpg');">
//             <div class="caption">
//               <h5>Chloe Mays</h5> Associate Director, Social Media
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Roston_Collins.jpg');">
//             <div class="caption">
//               <h5>Roston Collins</h5> Associate Director, Post-Production
//             </div>
//           </div>
//         </div>
//         <div class="grid-item long">
//           <div class="img-wrapper" style="background-image: url('assets/Tracy_Woodward.jpg');">
//             <div class="caption">
//               <h5>Tracy Woodward</h5> Associate Director, Talent Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item long">
//           <div class="img-wrapper" style="background-image: url('assets/Jeff_Harris.jpg');">
//             <div class="caption">
//               <h5>Jeff Harris</h5> Manager, Media & Social Ops
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Amanda_Woolery.jpg');">
//             <div class="caption">
//               <h5>Amanda Woolery</h5> Planner, Integrated Media
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Cheryl_Agustin.jpg');">
//             <div class="caption">
//               <h5>Cheryl Agustin</h5> Senior Designer, Motion Graphics
//             </div>
//           </div>
//         </div>
//         <div class="grid-item long">
//           <div class="img-wrapper" style="background-image: url('assets/Karri_Northrop.jpg');">
//             <div class="caption">
//               <h5>Karri Northrop</h5> Senior Manager, Music Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Kimiya_Jafari.jpg');">
//             <div class="caption">
//               <h5>Kimiya Jafari</h5> Senior Manager, Brand Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Curtis_Ida.jpg');">
//             <div class="caption">
//               <h5>Curtis Ida</h5> Senior Designer, Motion Graphics
//             </div>
//           </div>
//         </div>
//         <div class="grid-item long">
//           <div class="img-wrapper" style="background-image: url('assets/John_Mason.jpg');">
//             <div class="caption">
//               <h5>John Mason</h5> Senior Manager, Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item short">
//           <div class="img-wrapper" style="background-image: url('assets/Britne_Goldstein.jpg');">
//             <div class="caption">
//               <h5>Britne Goldstein</h5> Senior Editor, Post-Production
//             </div>
//           </div>
//         </div>
//         <div class="grid-item long">
//           <div class="img-wrapper" style="background-image: url('assets/Hannah_Hall.jpg');">
//             <div class="caption">
//               <h5>Hannah Hall</h5> Manager, Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item long">
//           <div class="img-wrapper" style="background-image: url('assets/Nikita_Srinivasan.jpg');">
//             <div class="caption">
//               <h5>Nikita Srinivasan</h5> Designer, Motion Graphics
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Geoffrey_Funk.jpg');">
//             <div class="caption">
//               <h5>Geoffrey Funk</h5> Manager, Music Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Nina_Cereo.jpg');">
//             <div class="caption">
//               <h5>Nina Cereo</h5> Manager, Talent Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Andre_Rojas.jpg');">
//             <div class="caption">
//               <h5>Andre Rojas Gonzalez</h5> Manager, Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item short">
//           <div class="img-wrapper" style="background-image: url('assets/Lisa_Kwon.jpg');">
//             <div class="caption">
//               <h5>Lisa Kwon</h5> Manager, Music Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Steph_McKean.jpg');">
//             <div class="caption">
//               <h5>Steph McKean</h5> Manager , Brand Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Sebastian_Gomez.jpg');">
//             <div class="caption">
//               <h5>Sebastian Gomez</h5> Manager, Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Reshma_Zachariah.jpg');">
//             <div class="caption">
//               <h5>Reshma Zachariah</h5> Designer, Motion Graphics
//             </div>
//           </div>
//         </div>
//         <div class="grid-item short">
//           <div class="img-wrapper" style="background-image: url('assets/Brooke_Blann.jpg');">
//             <div class="caption">
//               <h5>Brooke Blann</h5> Manager, Talent Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item long">
//           <div class="img-wrapper" style="background-image: url('assets/Janine_Davis.jpg');">
//             <div class="caption">
//               <h5>Janine Davis</h5> Manager, Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item long">
//           <div class="img-wrapper" style="background-image: url('assets/Olivia_Accardo.jpg');">
//             <div class="caption">
//               <h5>Olivia Accardo</h5> Designer, Motion Graphics
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Kyle_Fitzpatrick.jpg');">
//             <div class="caption">
//               <h5>Kyle Fitzpatrick</h5> Copywriter
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Alex_Watson.jpg');">
//             <div class="caption">
//               <h5>Alex Watson</h5> Editor, Post-Production
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Mailinh_Nguyen.jpg');">
//             <div class="caption">
//               <h5>Mailinh Nguyen</h5> Junior Creative Strategist
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Rafael_Torres.jpg');">
//             <div class="caption">
//               <h5>Raffi Torres</h5> Junior Designer, Motion Graphics
//             </div>
//           </div>
//         </div>
//         <div class="grid-item long">
//           <div class="img-wrapper" style="background-image: url('assets/Max_Levin.jpg');">
//             <div class="caption">
//               <h5>Max Levin</h5> Coordinator, Analytics & Insights
//             </div>
//           </div>
//         </div>
//         <div class="grid-item long">
//           <div class="img-wrapper" style="background-image: url('assets/Liz_Sobus.jpg');">
//             <div class="caption">
//               <h5>Liz Sobus</h5> Coordinator, Talent Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Harley_Geffner.jpg');">
//             <div class="caption">
//               <h5>Harley Geffner</h5> Coordinator, Music Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item long">
//           <div class="img-wrapper" style="background-image: url('assets/Shanti_Basu.jpg');">
//             <div class="caption">
//               <h5>Shanti Basu</h5> Coordinator, Brand Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Matthew_Agunloye.jpg');">
//             <div class="caption">
//               <h5>Matthew Agunloye</h5> Coordinator, Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item short">
//           <div class="img-wrapper" style="background-image: url('assets/Mark_Catangui.jpg');">
//             <div class="caption">
//               <h5>Mark Catangui</h5> Coordinator, Brand Social
//             </div>
//           </div>
//         </div>
//         <div class="grid-item short">
//           <div class="img-wrapper" style="background-image: url('assets/Tyler_Honaker.jpg');">
//             <div class="caption">
//               <h5>Tyler Honaker</h5> Advisor
//             </div>
//           </div>
//         </div>
//         <div class="grid-item short">
//           <div class="img-wrapper" style="background-image: url('assets/Jess_Trinca.jpg');">
//             <div class="caption">
//               <h5>Jess Trinca</h5> Advisor
//             </div>
//           </div>
//         </div>
//         <div class="grid-item long">
//           <div class="img-wrapper" style="background-image: url('assets/Lisa_Filipelli.jpg');">
//             <div class="caption">
//               <h5>Lisa Filipelli</h5> Board Member
//             </div>
//           </div>
//         </div>
//         <div class="grid-item">
//           <div class="img-wrapper" style="background-image: url('assets/Marilyn_Booker.jpg');">
//             <div class="caption">
//               <h5>Marilyn Booker</h5> Board Member
//             </div>
//           </div>
//         </div>
//         <div class="grid-item long">
//           <div class="img-wrapper" style="background-image: url('assets/Helen_Melluish.jpg');">
//             <div class="caption">
//               <h5>Helen Melluish</h5> Board Member
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="swiper-button-next"><img src="assets/arrow.png" class="img-fluid" alt="Meet The Team" /></div>
//     </div>
//   </div>
//   <div class="col-0 col-md-1">
//     <img src="assets/PM_Page_Ellipse_X_Pattern.png" id="lets-grid" class="inview animated delay--5s" data-ease="fadeIn" alt="dot grid" />
//   </div>
// </div>
// </section>
// <section id="contact" class="container-fluid">
// <div class="row">
//   <img src="assets/Lets_XX_ElipsePattern_2.png" id="contact-circle" class="img-fluid inview animated delay--5s" data-ease="fadeInUp" alt="XX Artists" />
//   <div class="col-md-4 col-lg-5 text-center">
//     <img src="assets/Lets_XX_Headline.png" class="img-fluid inview animated" data-ease="fadeInUp" alt="Hello. Lets Chat!" />
//   </div>
//   <div class="col-md-8 col-lg-7 bg-red-circle text-left inview animated  delay--5s" data-ease="fadeInUp">
//     <div class="row">
//       <div class="social-link col-8 inview animated delay-1s" data-ease="fadeIn">
//         <p>Partner With Us <br /><a href="mailto:letspartner@xxartists.com">letspartner@xxartists.com</a></p>
//         <p>Want to join the team? <br /><a href="mailto:careers@xxartists.com">careers@xxartists.com</a></p>
//         <p>Media Inquiries <br /><a href="mailto:PR@xxartists.com">PR@xxartists.com</a></p>
//       </div>
//       <div class="col-4 social">
//         <a href="https://www.facebook.com/xxArtists/" id="contact-facebook" class="inview animated delay--5s" data-ease="fadeInUp" target="_blank"><img class="img-fluid" src="assets/Lets_XX_FB_2.png" alt="XX Artists" /></a>
//         <a href="https://twitter.com/xxartists" id="contact-twitter" class="inview animated  delay--5s" data-ease="fadeInUp" target="_blank"><img class="img-fluid" src="assets/Lets_XX_Twtter_2.png" alt="XX Artists" /></a>
//         <a href="https://www.instagram.com/xxartists/" id="contact-instagram" class="inview animated delay-1s" data-ease="fadeInUp" target="_blank"><img class="img-fluid" src="assets/Lets_XX_IG_2.png" alt="XX Artists" /></a>
//       </div>
//     </div>
//   </div>
// </div>`

// export default Home;