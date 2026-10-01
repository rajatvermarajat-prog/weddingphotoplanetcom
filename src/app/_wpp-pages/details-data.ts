export type DetailGalleryImage = { src: string; alt: string };

export type DetailPageRecord = {
  id: string;
  slug: string;
  category: string;
  name: string;
  metadata: { title: string; description: string };
  heroSlides: string[];
  gallery: DetailGalleryImage[];
  content: Record<string, string>;
};

export const detailPages = [
  {
    "id": "50",
    "slug": "wedding-photos-himani-sunandan",
    "category": "WEDDING",
    "name": "Himani & Sunandan",
    "metadata": {
      "title": "Test123",
      "description": "test"
    },
    "heroSlides": [
      "/admin_image/wid/hero_image205054762216514805511.jpg",
      "/admin_image/wid/hero_image163131817716514805562.jpg",
      "/admin_image/wid/hero_image114422709716514805613.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/14470767251649677147(0).jpg",
        "alt": "Best Engagement Photography in India"
      },
      {
        "src": "/admin_image/wid/20835728281649677147(1).jpg",
        "alt": "Top Engagement Photography in Sonipat"
      },
      {
        "src": "/admin_image/wid/1687633381649677147(2).jpg",
        "alt": "Candid Engagement Photography in Sonipat"
      },
      {
        "src": "/admin_image/wid/19382341341649677148(3).jpg",
        "alt": "Couple Engagement Photography in Sonipat"
      },
      {
        "src": "/admin_image/wid/21419882261649677148(4).jpg",
        "alt": "Best Engagement Photography in Sonipat"
      },
      {
        "src": "/admin_image/wid/16309951481651207892(6).jpg",
        "alt": "Artistic engagement portraits with traditional attire"
      },
      {
        "src": "/admin_image/wid/9733575411651207892(8).jpg",
        "alt": "Engagement couple shoot in garden setting"
      },
      {
        "src": "/admin_image/wid/17890225611651207903(9).jpg",
        "alt": "Indoor engagement shoot with elegant decor"
      },
      {
        "src": "/admin_image/wid/7548550431651207903(12).jpg",
        "alt": "Outdoor candid moment captured during engagement"
      },
      {
        "src": "/admin_image/wid/13743617551651207903(13).jpg",
        "alt": "Romantic sunset engagement photo in India"
      },
      {
        "src": "/admin_image/wid/20003219671651207909(14).jpg",
        "alt": "Pre-wedding couple portrait in Sonipat location"
      },
      {
        "src": "/admin_image/wid/4078051631651207909(15).jpg",
        "alt": "Elegant engagement photoshoot with floral backdrop"
      },
      {
        "src": "/admin_image/wid/18571803871651207909(16).jpg",
        "alt": "Couple sharing a candid laugh during pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/1709392101651207909(17).jpg",
        "alt": "Royal-themed engagement photos with traditional outfits"
      },
      {
        "src": "/admin_image/wid/14771553271651207917(18).jpg",
        "alt": "Engagement shoot with fairy lights and night ambiance"
      },
      {
        "src": "/admin_image/wid/3728220121651207917(19).jpg",
        "alt": "Joyful couple posing under a canopy of trees"
      },
      {
        "src": "/admin_image/wid/10034543601651207917(21).jpg",
        "alt": "Engagement ring close-up with romantic background black"
      },
      {
        "src": "/admin_image/wid/1576854231651207917(22).jpg",
        "alt": "Couple captured mid-dance during engagement celebration"
      },
      {
        "src": "/admin_image/wid/14099567091651207923(23).jpg",
        "alt": "Unique engagement photoshoot ideas"
      },
      {
        "src": "/admin_image/wid/13124144501651207923(25).jpg",
        "alt": "Engagement shoot with soft natural lighting"
      },
      {
        "src": "/admin_image/wid/3075980181651207931(28).jpg",
        "alt": "Stylish engagement photography in an urban setting"
      },
      {
        "src": "/admin_image/wid/13838132351651207931(29).jpg",
        "alt": "Haldi-inspired engagement shoot with vibrant colors"
      },
      {
        "src": "/admin_image/wid/10827826001651207931(32).jpg",
        "alt": "Couple shoot near a lake during golden hour"
      },
      {
        "src": "/admin_image/wid/21042860251651207931(40).jpg",
        "alt": "Romantic engagement moment under string lights"
      },
      {
        "src": "/admin_image/wid/16427117441651207938(41).jpg",
        "alt": "Engagement shoot at heritage site in India"
      },
      {
        "src": "/admin_image/wid/16494862871651207938(42).jpg",
        "alt": "Smiling Bride captured in traditional engagement ceremony"
      },
      {
        "src": "/admin_image/wid/11785357051651207938(48).jpg",
        "alt": "Monochrome engagement portrait with emotional expressions"
      },
      {
        "src": "/admin_image/wid/7721700761651207938(50).jpg",
        "alt": "Indoor bride solo shot in soft natural light"
      },
      {
        "src": "/admin_image/wid/18797719091651207944(57).jpg",
        "alt": "Couple walking together during wedding shoot"
      },
      {
        "src": "/admin_image/wid/1436870951651207944(58).jpg",
        "alt": "Traditional engagement ritual captured in candid style"
      },
      {
        "src": "/admin_image/wid/16373719131651207955(59).jpg",
        "alt": "Romantic walk of bride and groom captured candidly"
      },
      {
        "src": "/admin_image/wid/7394907961651207955(64).jpg",
        "alt": "Bride and groom walking hand in hand"
      },
      {
        "src": "/admin_image/wid/7042583371651207955(71).jpg",
        "alt": "Candid love, captured with family around."
      },
      {
        "src": "/admin_image/wid/2600980791651207955(74).jpg",
        "alt": "Laughter that echoes through generations"
      },
      {
        "src": "/admin_image/wid/16137756081651207962(75).jpg",
        "alt": "Couple laughing together in open field during pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/18373508371651207962(77).jpg",
        "alt": "Close-up of henna-covered hands holding engagement ring"
      },
      {
        "src": "/admin_image/wid/11070231971651207962(82).jpg",
        "alt": "Elegant engagement shoot with mirror reflection pose"
      },
      {
        "src": "/admin_image/wid/20926335481651207962(83).jpg",
        "alt": "Bride adjusting groom’s tie in candid indoor moment"
      },
      {
        "src": "/admin_image/wid/14570375651651207981(89).jpg",
        "alt": "Couple sitting on vintage stairs for traditional photoshoot"
      },
      {
        "src": "/admin_image/wid/5207526401651207981(93).jpg",
        "alt": "Engagement shoot with colorful smoke bombs in background"
      },
      {
        "src": "/admin_image/wid/15217824171651207990(97).jpg",
        "alt": "Romantic forehead kiss during golden hour shoot"
      },
      {
        "src": "/admin_image/wid/13034099621651207990(99).jpg",
        "alt": "Traditional engagement photo with family in the background"
      },
      {
        "src": "/admin_image/wid/19728088421651207990(102).jpg",
        "alt": "Couple holding placards announcing their engagement"
      },
      {
        "src": "/admin_image/wid/10081390621651207990(103).jpg",
        "alt": "Black and white engagement portrait in classic style"
      },
      {
        "src": "/admin_image/wid/12123940621651208003(104).jpg",
        "alt": "Rainy day engagement photoshoot under one umbrella"
      },
      {
        "src": "/admin_image/wid/37351251651208003(109).jpg",
        "alt": "Bride’s dupatta flying in wind during dramatic pose"
      },
      {
        "src": "/admin_image/wid/8528774841651208003(112).jpg",
        "alt": "Wedding Photo Planet Photography"
      },
      {
        "src": "/admin_image/wid/4474587231651208003(113).jpg",
        "alt": "Wedding Photo Planet Engagement Shoot"
      },
      {
        "src": "/admin_image/wid/1280305931651208011(115).jpg",
        "alt": "Candid Wedding Photos by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/7408402471651208011(116).jpg",
        "alt": "Pre-Wedding Shoot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/19922624511651208020(117).jpg",
        "alt": "Wedding Photo Planet Couple Photography"
      },
      {
        "src": "/admin_image/wid/9299112211651208020(118).jpg",
        "alt": "Wedding Photo Planet India Weddings"
      },
      {
        "src": "/admin_image/wid/13687539591651208020(121).jpg",
        "alt": "Destination Wedding by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/18106364221651208020(126).jpg",
        "alt": "Artistic Wedding Photography by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/6506961291651208041(128).jpg",
        "alt": "Traditional Indian Weddings by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/1229572461651208041(138).jpg",
        "alt": "Creative Couple Portraits by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/15358890941651208041(143).jpg",
        "alt": "Wedding Photo Planet Photography in Delhi"
      },
      {
        "src": "/admin_image/wid/11658457171651208041(149).jpg",
        "alt": "Best Wedding Photographer in Sonipat – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/5610034801651208041(150).jpg",
        "alt": "Engagement Shoot in Jaipur by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/2217715321651208041(151).jpg",
        "alt": "Pre-Wedding Shoot Locations by Wedding Photo Planet in India"
      },
      {
        "src": "/admin_image/wid/13766555941651208066(156).jpg",
        "alt": "Top Wedding Photographer in Haryana – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/3561010161651208066(162).jpg",
        "alt": "Candid Wedding Photography – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/182270711651208066(163).jpg",
        "alt": "Pre-Wedding and Post-Wedding Shoots by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/7440523831651208073(165).jpg",
        "alt": "Couple Portraits and Engagement Shoots – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/15675422341651208073(166).jpg",
        "alt": "Wedding Day Storytelling Photography – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/10044499721651208073(169).jpg",
        "alt": "Luxury Wedding Photography Packages by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/21072576461651208073(171).jpg",
        "alt": "Couple Shoot Packages by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/19788725791651208100(172).jpg",
        "alt": "Cinematic Wedding Films – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/19727409651651208100(173).jpg",
        "alt": "Wedding Photo Planet Bridal Portraits"
      },
      {
        "src": "/admin_image/wid/6828936961651208100(174).jpg",
        "alt": "Wedding Photo Planet Destination Weddings"
      },
      {
        "src": "/admin_image/wid/9485004391651208110(175).jpg",
        "alt": "Groom Portrait Photography by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/6612983471651208110(180).jpg",
        "alt": "Affordable wedding photographers"
      },
      {
        "src": "/admin_image/wid/3351240321651208110(182).jpg",
        "alt": "Creative Wedding Moments by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/20088364481651208110(184).jpg",
        "alt": "Royal Wedding Shoots by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/5625850901651208110(185).jpg",
        "alt": "Wedding Photo Planet Photography in Mumbai"
      },
      {
        "src": "/admin_image/wid/9146362181651208118(186).jpg",
        "alt": "Wedding Photo Planet Photographer in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/15703404571651208118(189).jpg",
        "alt": "Wedding Photo Planet Sonipat Wedding Shoots"
      },
      {
        "src": "/admin_image/wid/4677220781651208118(191).jpg",
        "alt": "Engagement Photography in Gurugram – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/19798995521651208118(192).jpg",
        "alt": "Chandigarh Couple Shoots – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/5518052221651208118(193).jpg",
        "alt": "Jaipur Destination Wedding – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/8075211931651208130(194).jpg",
        "alt": "Pre-Wedding Highlights by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/10055823401651208130(195).jpg",
        "alt": "Emotional Wedding Moments Captured by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/21462550041651208130(196).jpg",
        "alt": "Wedding Ritual Photography – Wedding Photo Planet Style"
      },
      {
        "src": "/admin_image/wid/21003598151651208130(197).jpg",
        "alt": "Indoor Wedding Shoots by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/14341963971651208130(198).jpg",
        "alt": "Couple Poses Traditional"
      },
      {
        "src": "/admin_image/wid/16336567991651208138(200).jpg",
        "alt": "Cultural Wedding Photography by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/7773592111651208138(201).jpg",
        "alt": "Traditional Indian Bride Photos – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/20040184151651208138(205).jpg",
        "alt": "Elegant Wedding Décor Shots – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/16469926931651208138(206).jpg",
        "alt": "Romantic Sunset Shoots – Wedding Photo Planet Signature Style"
      },
      {
        "src": "/admin_image/wid/600003001651208138(214).jpg",
        "alt": "Beachside Engagement Shoots – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/10652471541651208150(219).jpg",
        "alt": "Heritage Venue Photography by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/13833562911651208150(222).jpg",
        "alt": "Floral Haldi Ceremony Captured by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/14560321911651208150(223).jpg",
        "alt": "Royal Couple Entry Moments – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/18209461371651208150(224).jpg",
        "alt": "Indianapolis engagement photo locations"
      },
      {
        "src": "/admin_image/wid/8008493491651208150(225).jpg",
        "alt": "Ring Ceremony Shoots – Wedding Photo Planet India"
      },
      {
        "src": "/admin_image/wid/11781503851651208160(227).jpg",
        "alt": "Varmala Ceremony Moments – Captured by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/10639903141651208160(228).jpg",
        "alt": "Destination Wedding Photography India"
      },
      {
        "src": "/admin_image/wid/5668164691651208160(233).jpg",
        "alt": "Full Wedding Day Coverage"
      },
      {
        "src": "/admin_image/wid/9409405081651208160(234).jpg",
        "alt": "Indian Wedding Ceremony Photography"
      },
      {
        "src": "/admin_image/wid/11285505331651208160(242).jpg",
        "alt": "Bridal Portrait Photography Service"
      },
      {
        "src": "/admin_image/wid/13769077861651208172(243).jpg",
        "alt": "Best Engagement Pics"
      },
      {
        "src": "/admin_image/wid/7636287461651208172(246).jpg",
        "alt": "Couple Portrait Photography"
      },
      {
        "src": "/admin_image/wid/12603965601651208172(247).jpg",
        "alt": "Bridal Entry Photography Service"
      },
      {
        "src": "/admin_image/wid/9019702201651208172(250).jpg",
        "alt": "Wedding Teaser and Highlight Video Services"
      },
      {
        "src": "/admin_image/wid/587523871651208172(255).jpg",
        "alt": "Drone Wedding Videography"
      },
      {
        "src": "/admin_image/wid/10709009291651208185(256).jpg",
        "alt": "Bridal Solo Portrait"
      },
      {
        "src": "/admin_image/wid/20780995281651208185(257).jpg",
        "alt": "Indian Bride Solo Shot"
      },
      {
        "src": "/admin_image/wid/381708011651208185(258).jpg",
        "alt": "Professional wedding photographers India"
      },
      {
        "src": "/admin_image/wid/3166599711651208185(262).jpg",
        "alt": "Traditional Bridal Photography"
      },
      {
        "src": "/admin_image/wid/2649323011651208185(263).jpg",
        "alt": "Indian wedding photographer packages"
      },
      {
        "src": "/admin_image/wid/11792595121651208193(265).jpg",
        "alt": "Elegant Bride Solo Photo"
      },
      {
        "src": "/admin_image/wid/4412678321651208193(266).jpg",
        "alt": "Romantic couple shoot photographer"
      },
      {
        "src": "/admin_image/wid/12112786821651208193(267).jpg",
        "alt": "Dramatic Bride Shot"
      },
      {
        "src": "/admin_image/wid/14619881071651208193(269).jpg",
        "alt": "Solo Bridal Entry Picture"
      },
      {
        "src": "/admin_image/wid/18644459611651208193(270).jpg",
        "alt": "Bridal Lehenga Photoshoot"
      },
      {
        "src": "/admin_image/wid/16432855701651208201(277).jpg",
        "alt": "Candid Bride Solo Portrait"
      },
      {
        "src": "/admin_image/wid/229633361651208201(281).jpg",
        "alt": "Wedding Family Portraits"
      },
      {
        "src": "/admin_image/wid/20526840331651208201(286).jpg",
        "alt": "Family Moments at Wedding"
      },
      {
        "src": "/admin_image/wid/6218373171651208201(289).jpg",
        "alt": "Emotional Wedding Family Shots"
      },
      {
        "src": "/admin_image/wid/10983119701651208201(299).jpg",
        "alt": "Family Group Photos at Wedding"
      },
      {
        "src": "/admin_image/wid/7120744751651208211(301).jpg",
        "alt": "Traditional Family Ceremony Captures"
      },
      {
        "src": "/admin_image/wid/3496719711651208211(302).jpg",
        "alt": "Family Bond Wedding Photography"
      },
      {
        "src": "/admin_image/wid/12057360091651208211(313).jpg",
        "alt": "Wedding Day with Family"
      },
      {
        "src": "/admin_image/wid/14264059941651208211(315).jpg",
        "alt": "Close Family Moments Captured"
      },
      {
        "src": "/admin_image/wid/17621951861651208211(316).jpg",
        "alt": "Groom’s Family Blessing"
      },
      {
        "src": "/admin_image/wid/10690120781651208220(318).jpg",
        "alt": "Mother-Daughter Wedding Moment"
      },
      {
        "src": "/admin_image/wid/20744223491651208220(324).jpg",
        "alt": "Bride and Groom Portrait"
      },
      {
        "src": "/admin_image/wid/16253497161651208220(325).jpg",
        "alt": "Engagement photography ideas"
      },
      {
        "src": "/admin_image/wid/2760444281651208220(328).jpg",
        "alt": "Romantic Wedding Couple Photo"
      },
      {
        "src": "/admin_image/wid/13082732341651208220(336).jpg",
        "alt": "Candid Bride and Groom Shot"
      },
      {
        "src": "/admin_image/wid/931348121651208240(337).jpg",
        "alt": "Bride and Groom Standing Pose"
      },
      {
        "src": "/admin_image/wid/20880435801651208240(342).jpg",
        "alt": "Bride and Groom Close-Up"
      },
      {
        "src": "/admin_image/wid/11069690991651208240(345).jpg",
        "alt": "Twirling Bride with Groom Holding Her Hand"
      },
      {
        "src": "/admin_image/wid/4192899271651208240(348).jpg",
        "alt": "Mandap Ceremony Captures"
      },
      {
        "src": "/admin_image/wid/10759555511651208240(349).jpg",
        "alt": "Close-Up Ritual Photography"
      },
      {
        "src": "/admin_image/wid/9769421961651208255(351).jpg",
        "alt": "Bride getting ready in Indian attire"
      },
      {
        "src": "/admin_image/wid/5653756011651208255(354).jpg",
        "alt": "Indian bride in traditional red lehenga"
      },
      {
        "src": "/admin_image/wid/2327779701651208255(356).jpg",
        "alt": "Punjabi bride solo photo with chooda"
      },
      {
        "src": "/admin_image/wid/8007870921651208255(358).jpg",
        "alt": "Indian groom wearing sherwani and safa"
      },
      {
        "src": "/admin_image/wid/14477458411651208255(382).jpg",
        "alt": "Indian bride twirling in bridal outfit"
      },
      {
        "src": "/admin_image/wid/2839667501651208264(387).jpg",
        "alt": "Groom entry with dhol and friends dancing"
      },
      {
        "src": "/admin_image/wid/18430296451651208264(390).jpg",
        "alt": "Groom sitting on ghodi during Indian wedding"
      },
      {
        "src": "/admin_image/wid/16033390191651208264(391).jpg",
        "alt": "Traditional Hindu wedding couple photo"
      },
      {
        "src": "/admin_image/wid/16867659761651208264(399).jpg",
        "alt": "Sangeet night dance performance photography"
      },
      {
        "src": "/admin_image/wid/5468432521651208264(401).jpg",
        "alt": "Varmala exchange moment during Indian wedding"
      },
      {
        "src": "/admin_image/wid/13867067371651208272(405).jpg",
        "alt": "Groom sitting on ghodi during Indian wedding"
      },
      {
        "src": "/admin_image/wid/3289883551651208272(408).jpg",
        "alt": "Post-wedding couple portrait in traditional wear"
      },
      {
        "src": "/admin_image/wid/20898261491651208272(413).jpg",
        "alt": "Bride smiling during pheras"
      },
      {
        "src": "/admin_image/wid/1152257091651208272(415).jpg",
        "alt": "Bride and groom smiling during pheras"
      },
      {
        "src": "/admin_image/wid/10409560761651208272(416).jpg",
        "alt": "Sindoor and mangalsutra ceremony shot"
      },
      {
        "src": "/admin_image/wid/19130857861651208291(420).jpg",
        "alt": "Family blessing the couple during pheras"
      },
      {
        "src": "/admin_image/wid/16635022051651208291(421).jpg",
        "alt": "Bride vidaai emotional moment"
      },
      {
        "src": "/admin_image/wid/905977121651208291(424).jpg",
        "alt": "Wedding Couple Pose"
      },
      {
        "src": "/admin_image/wid/3087625221651208298(425).jpg",
        "alt": "Indian bride and groom together in mandap"
      },
      {
        "src": "/admin_image/wid/704715851651208298(426).jpg",
        "alt": "Romantic sunset photo of Indian couple"
      },
      {
        "src": "/admin_image/wid/18016399861651208298(427).jpg",
        "alt": "Traditional Hindu wedding couple photo"
      }
    ],
    "content": {
      "desc4": "Wedding photoshoot of Himani and Sunandan was an eventful and emotional experience. The couple's traditional attire, with Himani in a beautiful lehenga and Sunandan in a classic sherwani, added a touch of elegance to the photos. The photographers captured their candid moments and emotions throughout the day, showcasing the love and connection between the couple. The couple's chemistry and love for each other were evident in every photo, making for a truly stunning set of images.",
      "heading1": "WEDDING PHOTOSHOOT AT CYGNETT HOTEL",
      "desc1": "The wedding photoshoot at the Cygnett hotel in Sonipat was a luxurious and elegant experience for the couple and their photographers. The hotel's modern and sophisticated architecture provided a beautiful backdrop for the photos, with its grand staircases, sleek lines, and elegant chandeliers. The couple was able to take advantage of the hotel's various indoor and outdoor spaces, including the gardens, pool area, and elegant ballroom for a variety of different shots.",
      "banner1": "/admin_image/wid/banner1212415292816514807034.jpg",
      "heading2": "Best candid and cinematographers in delhi",
      "desc2": "Wedding Photo Planet is your one-stop-shop for finding the best candid and cinematographer for your wedding day. These professionals are known for their ability to capture the real emotions, reactions and moments of your special day in a way that traditional photography can't match. They use their creativity and skills to create a film that showcases the beauty, romance and excitement of your wedding day, giving you a memory that you can cherish for a lifetime. Whether you're looking for traditional or contemporary style, our candid and cinematographer will work with you to create a collection of images and videos that perfectly capture the essence of your love story.",
      "heading3": "Cinematic wedding video film",
      "desc3": "Wedding Photo Planet offers you the best cinematic wedding video films. Our team of professional videographers specialize in creating visually stunning, emotional and cinematic films that tell the story of your special day. They use advanced filming techniques, equipment and editing skills to create a film that showcases the beauty, romance, and emotions of your wedding day in a way that traditional videography can't match. They work closely with you to understand your preferences and style, and create a film that is tailored to your unique story. Whether you're looking for a traditional or contemporary style, our cinematic wedding video films are designed to capture the essence of your love story and the beauty of your special day in a way that will be cherished for a lifetime.",
      "banner2": "/admin_image/wid/banner119680630401649677146(0).jpg"
    }
  },
  {
    "id": "51",
    "slug": "wedding-photos-vishu-divya",
    "category": "WEDDING",
    "name": "Vishu & Divya",
    "metadata": {
      "title": "Vishu & Divya",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image85979411316514794321.jpg",
      "/admin_image/wid/hero_image210055336116514794012.jpg",
      "/admin_image/wid/hero_image50546149416514794003.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/19009727671649744028(1).jpg",
        "alt": "Floral decor in wedding hall shoot"
      },
      {
        "src": "/admin_image/wid/15342440461649744028(2).jpg",
        "alt": "Luxury wedding hall photography"
      },
      {
        "src": "/admin_image/wid/815632691649744028(3).jpg",
        "alt": "Indoor stage couple portrait"
      },
      {
        "src": "/admin_image/wid/6903621241649744028(4).jpg",
        "alt": "Luxury wedding hall photography"
      },
      {
        "src": "/admin_image/wid/7595299191649744028(5).jpg",
        "alt": "Couple posing together in beautifully lit wedding hall"
      },
      {
        "src": "/admin_image/wid/4510292601649744028(6).jpg",
        "alt": "Wedding hall stage photography"
      },
      {
        "src": "/admin_image/wid/3641463591650360625(7).jpg",
        "alt": "Couple posing together in beautifully lit wedding hall"
      },
      {
        "src": "/admin_image/wid/14628943471650360625(8).jpg",
        "alt": "Bride walking down decorated wedding aisle"
      },
      {
        "src": "/admin_image/wid/3255766671650360625(9).jpg",
        "alt": "Bride waiting at stage in indoor wedding venue"
      },
      {
        "src": "/admin_image/wid/18817265741650360625(10).jpg",
        "alt": "Candid shots in wedding venue"
      },
      {
        "src": "/admin_image/wid/15957140401650360636(11).jpg",
        "alt": "Award-winning wedding photography service"
      },
      {
        "src": "/admin_image/wid/10673339871650360636(12).jpg",
        "alt": "Cinematic wedding coverage in India"
      },
      {
        "src": "/admin_image/wid/5653299041650360636(13).jpg",
        "alt": "Full wedding coverage with albums and videos"
      },
      {
        "src": "/admin_image/wid/12622340951650360636(14).jpg",
        "alt": "Bride and groom moments captured professionally"
      },
      {
        "src": "/admin_image/wid/1638631981650360650(15).jpg",
        "alt": "High-resolution wedding portraits"
      },
      {
        "src": "/admin_image/wid/1315748831650360650(16).jpg",
        "alt": "Custom couple shoot in wedding venues"
      },
      {
        "src": "/admin_image/wid/8590458581650360650(17).jpg",
        "alt": "Wedding films and photo albums services"
      },
      {
        "src": "/admin_image/wid/16215594041650360650(18).jpg",
        "alt": "Drone and cinematic wedding videos"
      },
      {
        "src": "/admin_image/wid/17761821561650360676(19).jpg",
        "alt": "Bride and groom holding hands in wedding hall"
      },
      {
        "src": "/admin_image/wid/20394669781650360676(20).jpg",
        "alt": "Joyful family moments in indoor wedding setup"
      },
      {
        "src": "/admin_image/wid/305925551650360782(21).jpg",
        "alt": "Groom twirling on decorated stage"
      },
      {
        "src": "/admin_image/wid/15127504891650360782(22).jpg",
        "alt": "Contact top wedding photographers in India"
      },
      {
        "src": "/admin_image/wid/8358906441650360782(23).jpg",
        "alt": "Family portrait in wedding hall"
      },
      {
        "src": "/admin_image/wid/17349803441650360782(24).jpg",
        "alt": "Wedding family group photo"
      },
      {
        "src": "/admin_image/wid/6750923861650360791(25).jpg",
        "alt": "Candid family photo at wedding venue"
      },
      {
        "src": "/admin_image/wid/19160282821650360791(26).jpg",
        "alt": "Traditional family photo on wedding stage"
      },
      {
        "src": "/admin_image/wid/11392373941650360791(27).jpg",
        "alt": "Groom’s family wedding shoot"
      },
      {
        "src": "/admin_image/wid/11408914331650360791(28).jpg",
        "alt": "Wedding family moment photography"
      },
      {
        "src": "/admin_image/wid/21387403181650360798(29).jpg",
        "alt": "Emotional family moments captured indoors"
      },
      {
        "src": "/admin_image/wid/20294467371650360798(30).jpg",
        "alt": "Guests and family at Indian wedding"
      },
      {
        "src": "/admin_image/wid/1828201811650360807(31).jpg",
        "alt": "Family sharing joy during indoor wedding shoot"
      },
      {
        "src": "/admin_image/wid/12685649241650360807(32).jpg",
        "alt": "Relatives posing during indoor wedding ceremony"
      },
      {
        "src": "/admin_image/wid/16878612421650360807(33).jpg",
        "alt": "Family smiling together on wedding day"
      },
      {
        "src": "/admin_image/wid/15378648841650360807(34).jpg",
        "alt": "Bride’s siblings and parents standing together in hall"
      },
      {
        "src": "/admin_image/wid/13294241331650360872(35).jpg",
        "alt": "Heartwarming family wedding portrait"
      },
      {
        "src": "/admin_image/wid/8146811001650360872(36).jpg",
        "alt": "Blessings from family at wedding"
      },
      {
        "src": "/admin_image/wid/16540476861650360880(37).jpg",
        "alt": "Capturing love and tradition in one frame"
      },
      {
        "src": "/admin_image/wid/4380086611650360880(38).jpg",
        "alt": "Generation photo at Indian marriage hall"
      },
      {
        "src": "/admin_image/wid/10533769571650360887(39).jpg",
        "alt": "Haldi ceremony photography"
      },
      {
        "src": "/admin_image/wid/20720292321650360887(40).jpg",
        "alt": "Mehendi function photoshoot"
      },
      {
        "src": "/admin_image/wid/8967005511650360894(41).jpg",
        "alt": "Sangeet night candid shots"
      },
      {
        "src": "/admin_image/wid/20429770981650360894(42).jpg",
        "alt": "Bride haldi photos in yellow outfit"
      },
      {
        "src": "/admin_image/wid/20545241071650360913(43).jpg",
        "alt": "Groom haldi moments captured"
      },
      {
        "src": "/admin_image/wid/19544492291650360913(44).jpg",
        "alt": "Mehendi designs and bridal poses"
      },
      {
        "src": "/admin_image/wid/19432335871650360920(45).jpg",
        "alt": "Emotional roka ceremony moments"
      },
      {
        "src": "/admin_image/wid/5055756091650360920(46).jpg",
        "alt": "Pre-wedding rituals photography"
      },
      {
        "src": "/admin_image/wid/9775844341650360929(47).jpg",
        "alt": "Vibrant sangeet night celebration"
      },
      {
        "src": "/admin_image/wid/2653852231650360929(48).jpg",
        "alt": "Candid mehendi photoshoot ideas"
      },
      {
        "src": "/admin_image/wid/14114045801650360936(49).jpg",
        "alt": "Wedding dance performance photography"
      },
      {
        "src": "/admin_image/wid/14938539001650360936(50).jpg",
        "alt": "Sangeet night dance shoot"
      },
      {
        "src": "/admin_image/wid/6157607251650360970(51).jpg",
        "alt": "Family dance performance at wedding"
      },
      {
        "src": "/admin_image/wid/13792489341650360970(52).jpg",
        "alt": "Bride and groom dance moments"
      },
      {
        "src": "/admin_image/wid/6003780751650360979(53).jpg",
        "alt": "Group dance performance at Indian wedding"
      },
      {
        "src": "/admin_image/wid/11476152521650360979(54).jpg",
        "alt": "Wedding stage dance capture"
      },
      {
        "src": "/admin_image/wid/15505222131650360979(55).jpg",
        "alt": "Couple’s first dance photography"
      },
      {
        "src": "/admin_image/wid/3625376821650360987(56).jpg",
        "alt": "Traditional wedding dance moments"
      },
      {
        "src": "/admin_image/wid/6205171401650360987(57).jpg",
        "alt": "Choreographed wedding dance shoot"
      },
      {
        "src": "/admin_image/wid/15841448771650360987(58).jpg",
        "alt": "Fun dance photos at wedding"
      },
      {
        "src": "/admin_image/wid/565626031650360993(59).jpg",
        "alt": "Bride and groom sangeet dance"
      },
      {
        "src": "/admin_image/wid/10258200241650360993(60).jpg",
        "alt": "Bollywood dance performance at wedding"
      },
      {
        "src": "/admin_image/wid/14104310691650361002(61).jpg",
        "alt": "Punjabi bhangra at wedding ceremony"
      },
      {
        "src": "/admin_image/wid/5104868171650361002(62).jpg",
        "alt": "Garba dance at Gujarati wedding"
      },
      {
        "src": "/admin_image/wid/4174507011650361002(63).jpg",
        "alt": "Lavani performance at Maharashtrian wedding"
      },
      {
        "src": "/admin_image/wid/17247812221650361009(64).jpg",
        "alt": "North Indian classical wedding dance"
      },
      {
        "src": "/admin_image/wid/8419371101650361009(65).jpg",
        "alt": "Romantic bride and groom photoshoot"
      },
      {
        "src": "/admin_image/wid/20014535391650361020(66).jpg",
        "alt": "Forehead touch bride groom moment"
      },
      {
        "src": "/admin_image/wid/11979058211650361020(67).jpg",
        "alt": "Couple holding hands wedding pose"
      },
      {
        "src": "/admin_image/wid/19019430401650361020(68).jpg",
        "alt": "Candid wedding couple pose ideas"
      },
      {
        "src": "/admin_image/wid/20186128481650361027(69).jpg",
        "alt": "Bridal Jewelry"
      },
      {
        "src": "/admin_image/wid/9743706031650361027(70).jpg",
        "alt": "Father blessing son"
      },
      {
        "src": "/admin_image/wid/20586185451650361036(71).jpg",
        "alt": "Handsome Groom Look"
      },
      {
        "src": "/admin_image/wid/3852027901650361036(72).jpg",
        "alt": "Generational bond"
      },
      {
        "src": "/admin_image/wid/8445738971650361036(73).jpg",
        "alt": "Proud father moment"
      },
      {
        "src": "/admin_image/wid/1196536991650361045(74).jpg",
        "alt": "Groom Baraat Entry"
      },
      {
        "src": "/admin_image/wid/21116206311650361045(75).jpg",
        "alt": "Stylish Groom Pose"
      },
      {
        "src": "/admin_image/wid/2689434181650361045(76).jpg",
        "alt": "Groom Wedding Outfit"
      },
      {
        "src": "/admin_image/wid/19112486021650361054(77).jpg",
        "alt": "Baraat groom entry moment"
      },
      {
        "src": "/admin_image/wid/2980594081650361054(78).jpg",
        "alt": "Groom royal entry images"
      },
      {
        "src": "/admin_image/wid/14374078411650361054(79).jpg",
        "alt": "Groom entry with dhol and band"
      },
      {
        "src": "/admin_image/wid/8598746441650361054(80).jpg",
        "alt": "Desi groom royal arrival"
      },
      {
        "src": "/admin_image/wid/14581539241650361060(81).jpg",
        "alt": "Groom dancing joyfully with baraat"
      },
      {
        "src": "/admin_image/wid/12160151691650361061(82).jpg",
        "alt": "Candid groom arrival with family during wedding ceremony"
      },
      {
        "src": "/admin_image/wid/11294280451650361061(83).jpg",
        "alt": "Royal groom entry with traditional Indian band"
      },
      {
        "src": "/admin_image/wid/18882114801650361072(84).jpg",
        "alt": "Groom entering wedding venue in classic car"
      },
      {
        "src": "/admin_image/wid/12000533271650361072(85).jpg",
        "alt": "Excited groom during his baraat procession"
      },
      {
        "src": "/admin_image/wid/775070361650361072(86).jpg",
        "alt": "Professional wedding family photography"
      },
      {
        "src": "/admin_image/wid/12771327771650361072(87).jpg",
        "alt": "Bride smiling in traditional red lehenga"
      },
      {
        "src": "/admin_image/wid/12635742801650361084(87).jpg",
        "alt": "Candid moment of bride during makeup session"
      },
      {
        "src": "/admin_image/wid/20069624101650361084(88).jpg",
        "alt": "Bridal close-up showcasing wedding jewelry"
      },
      {
        "src": "/admin_image/wid/12834864211650361084(89).jpg",
        "alt": "Bridal close-up showcasing wedding jewelry"
      },
      {
        "src": "/admin_image/wid/8385179311650361084(90).jpg",
        "alt": "Bridal dance performance"
      },
      {
        "src": "/admin_image/wid/1425164831650361094(91).jpg",
        "alt": "Candid bride dance moment"
      },
      {
        "src": "/admin_image/wid/455609691650361094(92).jpg",
        "alt": "Candid wedding stage photography"
      },
      {
        "src": "/admin_image/wid/4581216271650361094(93).jpg",
        "alt": "Bride and groom on wedding stage"
      },
      {
        "src": "/admin_image/wid/7894148531650361094(94).jpg",
        "alt": "Indian wedding stage couple photo"
      },
      {
        "src": "/admin_image/wid/3130358231650361094(95).jpg",
        "alt": "Stage portraits with family and couple"
      },
      {
        "src": "/admin_image/wid/10788170291650361102(96).jpg",
        "alt": "Emotional wedding stage moments"
      },
      {
        "src": "/admin_image/wid/15700283621650361102(97).jpg",
        "alt": "Professional stage photography in wedding"
      },
      {
        "src": "/admin_image/wid/8603022941650361102(98).jpg",
        "alt": "Cinematic stage photography India"
      },
      {
        "src": "/admin_image/wid/7129584791650361102(99).jpg",
        "alt": "Traditional Indian stage ceremony photos"
      },
      {
        "src": "/admin_image/wid/4414763961650361102(100).jpg",
        "alt": "Grand stage wedding portraits"
      },
      {
        "src": "/admin_image/wid/7449279801650361128(101).jpg",
        "alt": "Creative wedding stage photo ideas"
      },
      {
        "src": "/admin_image/wid/15701974561650361128(102).jpg",
        "alt": "Expert wedding stage lighting photography"
      },
      {
        "src": "/admin_image/wid/18795174711650361128(103).jpg",
        "alt": "Professional Indian stage photography services"
      },
      {
        "src": "/admin_image/wid/378115631650361128(104).jpg",
        "alt": "Artistic stage shot of bride and groom"
      },
      {
        "src": "/admin_image/wid/15739409121650361128(105).jpg",
        "alt": "Storytelling moments on wedding stage"
      },
      {
        "src": "/admin_image/wid/20650061511650361141(107).jpg",
        "alt": "Perfectly timed candid stage captures"
      },
      {
        "src": "/admin_image/wid/8317389011650361141(108).jpg",
        "alt": "Best wedding stage photographer in India"
      },
      {
        "src": "/admin_image/wid/15640164171650361141(109).jpg",
        "alt": "Fine-art wedding stage photography"
      },
      {
        "src": "/admin_image/wid/17203246971650361141(110).jpg",
        "alt": "Emotional bride and groom moment captured on stage"
      },
      {
        "src": "/admin_image/wid/15638751091650361149(111).jpg",
        "alt": "Beautifully lit couple portrait on Indian wedding stage"
      }
    ],
    "content": {
      "desc4": "The wedding photoshoot of Vishu and Divya was a beautiful and romantic experience for the couple and their photographers. The couple's chemistry and love for each other shone through in every photo, making for a truly stunning set of images. The photoshoot took place in a variety of locations, including a picturesque beach and a charming countryside, providing a diverse range of backdrops for the photos. The couple's traditional attire added a touch of elegance to the photos, and the candid moments captured between Vishu and Divya were truly heartwarming.",
      "heading1": "Wedding photoshoot at city park hotel",
      "desc1": "City Park is one of the luxurious hotels in Delhi. Its enormous capacity of accommodating the guests allows the couple to invite their loved ones with the open heart. The lush greenery of their garden and magnificent architecture added a beautiful backdrop to the wedding photos and videos of these two couples.",
      "banner1": "/admin_image/wid/banner1209226539816514801795.jpg",
      "heading2": "Best wedding photographers in Delhi",
      "desc2": "At Wedding Photo Planet, we strive to provide the highest standard of excellence and service in our wedding photography business. Our team is passionate about delivering beautiful, high quality images that capture your big day from start to finish.",
      "heading3": "Budget wedding photo studio in delhi",
      "desc3": "For couples on a budget, a wedding photo planet in Delhi can be a great option for capturing beautiful memories of your special day. Many studios offer affordable packages that include a variety of services, such as pre-wedding photoshoots, candid wedding photography, and traditional posed shots. And this is where wedding photo planet can be your go-to-place. Our studio even offers add-on options like drone footage and photo albums at a reasonable price. Additionally, our budget-friendly studio is equipped with the latest photography equipment and technology, so, what are you waiting for? Contact us to know more about the packages.",
      "banner2": "/admin_image/wid/banner1181962188416514801794.jpg"
    }
  },
  {
    "id": "52",
    "slug": "pre-wedding-photos-atishya-anisha",
    "category": "PRE WEDDING",
    "name": "Atishya & Anisha",
    "metadata": {
      "title": "Atishya & Anisha",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image121060013716520921831.jpg",
      "/admin_image/wid/hero_image41581234616520921872.jpg",
      "/admin_image/wid/hero_image56212218816520921923.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/798804944164974472301.jpg",
        "alt": "Pre Wedding Photographers Near Me"
      },
      {
        "src": "/admin_image/wid/1761850056164974472303.jpg",
        "alt": "Best Pre wedding Photographers Near Me"
      },
      {
        "src": "/admin_image/wid/915760039164974472304.jpg",
        "alt": "Best Pre Wedding Photographers in India"
      },
      {
        "src": "/admin_image/wid/173993168165035689305.jpg",
        "alt": "Pre Wedding Photographers in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/1226383312165035689306.jpg",
        "alt": "Pre Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/1547935711165035690107.jpg",
        "alt": "Pre wedding Videographers"
      },
      {
        "src": "/admin_image/wid/1448389053165035690109.jpg",
        "alt": "Best Pre wedding Photographers"
      },
      {
        "src": "/admin_image/wid/1048755657165035971810.jpg",
        "alt": "Candid Pre Wedding Photographers Near Me"
      },
      {
        "src": "/admin_image/wid/1176985742165035971811.jpg",
        "alt": "Best Pre Wedding Photographers in India"
      },
      {
        "src": "/admin_image/wid/1821929907165035971813.jpg",
        "alt": "Pre Wedding Photographers in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/593969624165035972914.jpg",
        "alt": "Candid"
      },
      {
        "src": "/admin_image/wid/1317626347165035972915.jpg",
        "alt": "Top Rated Pre Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/835129537165035972916.jpg",
        "alt": "Famous Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/1586745240165035979717.jpg",
        "alt": "Candid Videos Near Me"
      },
      {
        "src": "/admin_image/wid/985628157165035979718.jpg",
        "alt": "Cinematic Videos Near Me"
      },
      {
        "src": "/admin_image/wid/607763240165035979720.jpg",
        "alt": "Cinematic Video"
      },
      {
        "src": "/admin_image/wid/353859030165035980421.jpg",
        "alt": "Cinematic Video"
      },
      {
        "src": "/admin_image/wid/415016088165035980423.jpg",
        "alt": "Wedding Films"
      },
      {
        "src": "/admin_image/wid/969003661165035980424.jpg",
        "alt": "Pre Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/1446598829165035986725.jpg",
        "alt": "Cinematographer in Delhi"
      },
      {
        "src": "/admin_image/wid/733945764165035989026.jpg",
        "alt": "Top Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/1705214984165035989028.jpg",
        "alt": "Photographers"
      },
      {
        "src": "/admin_image/wid/1045933512165035994229.jpg",
        "alt": "Candid Photographers"
      },
      {
        "src": "/admin_image/wid/1284921696165035994829.jpg",
        "alt": "Candid Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/2036856625165035995330.jpg",
        "alt": "Best Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/2106239642165035995731.jpg",
        "alt": "Wedding Photographer in Delhi"
      },
      {
        "src": "/admin_image/wid/2138650918165035996132.jpg",
        "alt": "Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/129747399165035996635.jpg",
        "alt": "Atishya & Anisha"
      },
      {
        "src": "/admin_image/wid/1848838144165035997136 Album Cover.jpg",
        "alt": "Pre wedding Videographers Near Me"
      },
      {
        "src": "/admin_image/wid/1514073215165035997639.jpg",
        "alt": "Award Winning Photographers Near Me"
      },
      {
        "src": "/admin_image/wid/1720938150165035998140.jpg",
        "alt": "Top Candid Photographers in India"
      },
      {
        "src": "/admin_image/wid/1668452620165035998541.jpg",
        "alt": "Best Pre Wedding Photographers in India"
      },
      {
        "src": "/admin_image/wid/1766027292165035999042.jpg",
        "alt": "Pre Wedding Photographers in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/444088119165035999543.jpg",
        "alt": "Best Candid Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/1674146302165036000044.jpg",
        "alt": "Candid"
      },
      {
        "src": "/admin_image/wid/2146927371165036000545.jpg",
        "alt": "Photographers in Delhi Near Me"
      },
      {
        "src": "/admin_image/wid/768462853165036001046.jpg",
        "alt": "Famous Photographers in Delhi"
      }
    ],
    "content": {
      "desc4": "The modern pre-wedding shoot of Atishya and Anisha was a truly unique and stylish event. The couple was dressed in modern and elegant outfits, with Atishya in a sleek suit and Anisha in a chic, form-fitting dress. The shoot took place in various modern and trendy locations, such as a graffiti-covered alleyway and a trendy café, which added a sense of contemporary and urban flair to the photographs. Their chemistry and love for each other was evident in every shot, making for truly beautiful and unique photographs. The pre-wedding shoot was a perfect representation of the love and excitement that Atishya and Anisha have for their upcoming wedding, and also their appreciation for modern and urban culture.",
      "heading1": "Destination pre-wedding photoshoot in connaught place",
      "desc1": "This iconic location offers a wide range of picturesque and versatile backgrounds for your pre-wedding photoshoot. Our expert team has handpicked the top photographers who have extensive experience in capturing the beauty of Connaught Place and the love between the couple in the most romantic and candid way. From the colonial-era architecture to the busy street life, these photographers know how to make the most of the location and create a collection of images that are truly unique and timeless.",
      "banner1": "/admin_image/wid/banner18368197111652175515Pre wedding location near me.jpg",
      "heading2": "Best destination pre-wedding photographers in delhi",
      "desc2": "Wedding Photo Planet is your ultimate guide to finding the best destination pre-wedding photographers in Delhi. Our team has scoured the city and beyond to bring you a list of the top photographers who specialize in capturing stunning, romantic and scenic pre-wedding photography. Whether you're looking to shoot in Delhi's bustling city streets or in the picturesque countryside, our list includes photographers with the skill and expertise to create breathtaking images that perfectly capture the beauty and romance of your love story. From intimate, candid moments to grand, posed shots, our destination pre-wedding photographers are dedicated to creating a collection of images that you'll treasure for a lifetime",
      "heading3": "Best pre-wedding photographers in delhi",
      "desc3": "Wedding Photo Planet is your go-to resource for finding the best pre-wedding photographers in Delhi. Whether you're looking for a traditional or contemporary approach, our list includes photographers that specialize in a variety of shooting styles. From candid moments to posed shots, they will work with you to create a collection of beautiful and timeless images that you'll treasure forever. So, if you're planning your pre-wedding photoshoot in Delhi or out of Delhi, be sure to check out Wedding Photo Planet's list of the best pre-wedding photographers in the city.",
      "banner2": "/admin_image/wid/banner17374188451652175515Pre-wedding-location-in-delhi.jpg"
    }
  },
  {
    "id": "53",
    "slug": "pre-wedding-photos-daya-malika",
    "category": "PRE WEDDING",
    "name": "Daya & Malika",
    "metadata": {
      "title": "Daya & Malika",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image160156921816520905712.jpg",
      "/admin_image/wid/hero_image203501102516520905733.jpg",
      "/admin_image/wid/hero_image67719928916520905771.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/487338281649745367_ANU8983 copy.jpg",
        "alt": "Pre Wedding Shoot in Rajasthan"
      },
      {
        "src": "/admin_image/wid/10457980161649745367DSC00013 copy.jpg",
        "alt": "Best Pre Wedding Shoot in Rajasthan"
      },
      {
        "src": "/admin_image/wid/5442810521649745367DSC00029 copy.jpg",
        "alt": "Top Pre Wedding Shoot in Rajasthan"
      },
      {
        "src": "/admin_image/wid/15997193581650348372DSC00064 copy.jpg",
        "alt": "Candid Pre Wedding Shoot in Rajasthan"
      },
      {
        "src": "/admin_image/wid/9514788841650348372DSC07304 copy.jpg",
        "alt": "Pre Wedding Photography Jaipur"
      },
      {
        "src": "/admin_image/wid/2142974601650348381DSC07352 copy.jpg",
        "alt": "Candid"
      },
      {
        "src": "/admin_image/wid/13706351171650348381DSC07613 copy.jpg",
        "alt": "Best Pre Wedding Photographer in Rajasthan"
      },
      {
        "src": "/admin_image/wid/13200495841650348388DSC07642 copy.jpg",
        "alt": "Pre Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/17238981631650348388DSC07685 copy.jpg",
        "alt": "Pre Wedding Photographers in Rajasthan"
      },
      {
        "src": "/admin_image/wid/18130362161650348388DSC07737 copy Album Cover.jpg",
        "alt": "Pre Wedding Best Photos in Rajasthan"
      },
      {
        "src": "/admin_image/wid/14461822481650348427DSC07937 copy.jpg",
        "alt": "Top Pre Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/1347051051650348427DSC07953 copy.jpg",
        "alt": "Pre Wedding Shoot Destination in Jaipur"
      },
      {
        "src": "/admin_image/wid/20890457021650348433DSC08059 copy.jpg",
        "alt": "Top Pre Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/6960207241650348433DSC08191 copy.jpg",
        "alt": "Best Pre Wedding Shoot Photographer in Jaipur"
      },
      {
        "src": "/admin_image/wid/12010763921650348439DSC08250 copy.jpg",
        "alt": "Best Pre Wedding Photos"
      },
      {
        "src": "/admin_image/wid/12986845481650348439DSC08298 copy.jpg",
        "alt": "Best Wedding photographer in India"
      },
      {
        "src": "/admin_image/wid/21461172491650348444DSC08298 copy.jpg",
        "alt": "Pre Wedding Shoot in Jaipur"
      },
      {
        "src": "/admin_image/wid/5392927361650348444DSC08363 copy.jpg",
        "alt": "Pre Wedding Photography in Sambhar Lake"
      },
      {
        "src": "/admin_image/wid/13029129781650348444WPP07891 copy.jpg",
        "alt": "Candid Pre Wedding Photography in Sambhar Lake"
      }
    ],
    "content": {
      "desc4": "The traditional pre-wedding shoot of Daya and Malika was a truly unique and special event. The shoot took place in various traditional Indian locations, which added a sense of culture and heritage to the photographs. Their chemistry and love for each other was evident in every shot, making for truly beautiful and unique photographs. The pre-wedding shoot was a perfect representation of the love and excitement that Daya and Malika have for their upcoming wedding, and also their appreciation for their cultural heritage.",
      "heading1": "Pre-wedding photoshoot at Jaipur",
      "desc1": "Jaipur in Rajasthan, India is among the go-to-places when it comes to the destination for pre-wedding shoots. This photoshoot was done at multiple locations in Jaipur like Hawa Mahal, Jal Mahal. With amazing and beautiful architecture of the Hawa Mahal and the scenic view of Jal Mahal made this couple’s pre-wedding album stand-out gorgeously.",
      "banner1": "/admin_image/wid/banner1102871316116521842134.jpg",
      "heading2": "Pre-wedding photographers in delhi",
      "desc2": "Wedding Photo Planet provides you with the team of best photographers for pre-wedding photoshoots. Our talented photographers arecapable of blending the couple with the beautiful background to give the most beautiful and prettiest output.",
      "heading3": "Pre-wedding photoshoot packages in delhi",
      "desc3": "Our packages are designed to different budgets and needs, without compromising on quality. Whether you're looking for a simple and intimate photoshoot or a more elaborate and extravagant one, we have something to suit your needs. Our team of professional photographers will work closely with you to understand your vision and preferences to create a pre-wedding photoshoot that is truly unique and special. With our budget-friendly packages, you can have beautiful pre-wedding photographs that you will treasure for a lifetime without breaking the bank.",
      "banner2": "/admin_image/wid/banner1150204338316521842145.jpg"
    }
  },
  {
    "id": "54",
    "slug": "pre-wedding-photos-sashi-jatin",
    "category": "PRE WEDDING",
    "name": "Sashi & Jatin",
    "metadata": {
      "title": "Sashi & Jatin",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image80484408316520895932.jpg",
      "/admin_image/wid/hero_image68408451416520895961.jpg",
      "/admin_image/wid/hero_image42973038316520896023.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/146287939416497459371N3A2980 copy.jpg",
        "alt": "Pre Wedding Photography in Delhi"
      },
      {
        "src": "/admin_image/wid/76543019916497459371N3A3001 copy.jpg",
        "alt": "Candid"
      },
      {
        "src": "/admin_image/wid/17333040916497459371N3A3022 copy Album Cover.jpg",
        "alt": "Pre Wedding Shoot in Delhi"
      },
      {
        "src": "/admin_image/wid/4242690841649745937A16I6880 copya.jpg",
        "alt": "Wedding photographer in Delhi"
      },
      {
        "src": "/admin_image/wid/14431555451650276814A16I6921 copy.jpg",
        "alt": "Best Candid Wedding Photographer in Delhi"
      },
      {
        "src": "/admin_image/wid/6337494881650276814A16I6929 copy.jpg",
        "alt": "Candid Wedding Photography"
      },
      {
        "src": "/admin_image/wid/11754662821650276819A16I6959 copy.jpg",
        "alt": "Candid"
      },
      {
        "src": "/admin_image/wid/15151142951650276819A16I7020 copy 2.jpg",
        "alt": "Best Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/13531579731650276833A16I7045 copy.jpg",
        "alt": "Cinematic Wedding video Film"
      },
      {
        "src": "/admin_image/wid/18820007281650276833A16I7050 copy.jpg",
        "alt": "Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/3219557221650276840A16I7097 copy.jpg",
        "alt": "Wedding Photography in Delhi"
      },
      {
        "src": "/admin_image/wid/9078120661650276840A16I7139 copy.jpg",
        "alt": "Best Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/14421619681650276846A16I7169 copy.jpg",
        "alt": "Best Wedding Photographers Near Me"
      },
      {
        "src": "/admin_image/wid/5448891651650276846A16I7182 copy.jpg",
        "alt": "The Best Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/4349552711650276846A16I7183 copy.jpg",
        "alt": "Top Rated Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/18124102291650276852A16I7194 copy.jpg",
        "alt": "Candid Wedding Photography in India"
      },
      {
        "src": "/admin_image/wid/8042384911650276852A16I7199 copy.jpg",
        "alt": "Famous Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/5273632651650276858A16I7327 copy.jpg",
        "alt": "Best Destination Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/18951869401650276858A16I7403 copy.jpg",
        "alt": "Best Wedding Photography in Delhi"
      },
      {
        "src": "/admin_image/wid/3395414051650276858A16I7520 copy.jpg",
        "alt": "Indian Wedding Photographers in Delhi"
      }
    ],
    "content": {
      "desc4": "The pre-wedding shoot of Sashi and Jatin was a truly unique and unforgettable event. The couple was dressed in coordinated outfits, Sashi in a classic saree and Jatin in a sharp, elegant tuxedo. Their chemistry and love for each other was evident in every shot, making for truly beautiful and unique photographs. The pre-wedding shoot was a perfect representation of the love and excitement that Sashi and Jatin have for their upcoming wedding and their willingness to think outside the box. The photographs will serve as a beautiful memory of this special time in their lives and a treasure that they can look back on for years to come.",
      "heading1": "Pre-wedding shoot at kingdom of dreams",
      "desc1": "A pre-wedding shoot at the Kingdom of Dreams is a unique and enchanting experience. The vibrant colours of the venue provide a stunning backdrop for your photos. Whether you’re posing in front of intricate architecture or amidst the lush greenery, your pre-wedding photos will truly be one-of-a-kind. Our highly skilled photographers work really close with our clients to give them the best from our side.",
      "banner1": "/admin_image/wid/banner1125383014216521844314.jpg",
      "heading2": "Candid Photographer",
      "desc2": "At Wedding Photo Planet, we make sure that all our clients stay happy with the services and the quality that we provide to the customers. We have a procreative team of photographers that are experts in terms of clicking stunning candids and still photos. Our team did a fantastic job and the couple was highly impressed with the photos.",
      "heading3": "Pre-wedding photographers in Delhi",
      "desc3": "At Wedding Photo Planet, we understand that pre-wedding photography is not just about taking pictures, it's about capturing the emotions and feelings of the couple before the big day. Our team of pre-wedding photographers in Delhi is dedicated to creating a fun and relaxed environment for the couple to enjoy the photo shoot. We make sure to put the couple at ease and make them feel comfortable in front of the camera. With our team of pre-wedding photographers in Delhi, you can be sure that your pre-wedding photos will be a perfect representation of your love story.",
      "banner2": "/admin_image/wid/banner134099514316521844325.jpg"
    }
  },
  {
    "id": "55",
    "slug": "wedding-photos-sahil-megha",
    "category": "WEDDING",
    "name": "Sahil & Megha",
    "metadata": {
      "title": "Sahil & Megha",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image208242518616514776301.jpg",
      "/admin_image/wid/hero_image73908254616514776812.jpg",
      "/admin_image/wid/hero_image116711901916514776853.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/145966617116498281481N3A0067.jpg",
        "alt": "Wedding Shoot in Delhi"
      },
      {
        "src": "/admin_image/wid/30440076016498281481N3A4440.jpg",
        "alt": "Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/163717007916498281481N3A4457.jpg",
        "alt": "Candid Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/58167483116502742381N3A4644.jpg",
        "alt": "Best Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/157650288016502742441N3A4680.jpg",
        "alt": "Candid Photography in Delhi"
      },
      {
        "src": "/admin_image/wid/51757775116502742441N3A4710.jpg",
        "alt": "Best Candid Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/184922391016502742501N3A4756.jpg",
        "alt": "Wedding Photographers in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/76613117516502742501N3A4766.jpg",
        "alt": "Best Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/98180554016502742551N3A4777.jpg",
        "alt": "Best Wedding Photographers in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/211430015316502742551N3A4957.jpg",
        "alt": "Best Photographer in Delhi"
      },
      {
        "src": "/admin_image/wid/159460625016502743661N3A5248.jpg",
        "alt": "Best Photographer in Uttam Naga"
      },
      {
        "src": "/admin_image/wid/211198423916502743661N3A5285.jpg",
        "alt": "Candid Photographer"
      },
      {
        "src": "/admin_image/wid/102132467016502743721N3A9565.jpg",
        "alt": "Best Wedding photographer"
      },
      {
        "src": "/admin_image/wid/140939724916502743721N3A9566.jpg",
        "alt": "Creative Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/60027375816502743721N3A9570.jpg",
        "alt": "Top Creative Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/159822058616502743791N3A9633.jpg",
        "alt": "Candid"
      },
      {
        "src": "/admin_image/wid/7223321331650274379620A5822.jpg",
        "alt": "Wedding photographer in Delhi"
      },
      {
        "src": "/admin_image/wid/11314804501650274385620A5856.jpg",
        "alt": "Candid Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/13147705991650274385DSC_2523.jpg",
        "alt": "Candid Wedding Photography"
      },
      {
        "src": "/admin_image/wid/11294054291650274389DSC00926.jpg",
        "alt": "Best Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/10103819381650274398DSC00949.jpg",
        "alt": "Candid Photography in Delhi"
      },
      {
        "src": "/admin_image/wid/17461001381650274398DSC01089.jpg",
        "alt": "Wedding Photography in Delhi"
      },
      {
        "src": "/admin_image/wid/16256674581650274403DSC01139.jpg",
        "alt": "Wedding Photography in Delhi"
      },
      {
        "src": "/admin_image/wid/19224386341650274403DSC01144.jpg",
        "alt": "Best Wedding Photos"
      },
      {
        "src": "/admin_image/wid/14705090731650274410DSC01155.jpg",
        "alt": "Top Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/15684337421650274410DSC01176.jpg",
        "alt": "The Best Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/1574652341650274411DSC01242.jpg",
        "alt": "Top Rated Wedding Photographers"
      }
    ],
    "content": {
      "desc4": "Wedding photoshoot of Sahil and Megha was an eventful and emotional experience. The couple's traditional attire, with Megha in a beautiful lehenga and Sahil in a classic sherwani, added a touch of elegance to the photos. The photographers captured their candid moments and emotions throughout the day, showcasing the love and connection between the couple. The couple's chemistry and love for each other were evident in every photo, making for a truly stunning set of images.",
      "heading1": "Best wedding photographers in Delhi",
      "desc1": "At Wedding Photo Planet, we strive to provide the highest standard of excellence and service in our wedding photography business. Our team is passionate about delivering beautiful, high quality images that capture your big day from start to finish.",
      "banner1": "/admin_image/wid/banner189670446016514776774.jpg",
      "heading2": "Best wedding photographers",
      "desc2": "Wedding Photo Planet is proud to offer the best wedding photography in Delhi. Our team of experienced and talented photographers specialize in capturing the real, unscripted moments of your special day. We use a photojournalistic approach to document the emotions, moments, and interactions of the couple and their loved ones. Our goal is to create a visual story of your wedding day that you can treasure for a lifetime. We understand the importance of capturing those precious moments that happen in a blink of an eye and that's why our photographers are always alert and ready to snap the perfect shot. We use state of the art equipment and the latest techniques to ensure that your photographs are of the highest quality.",
      "heading3": "Budget wedding photo studio in delhi",
      "desc3": "For couples on a budget, a wedding photo planet in Delhi can be a great option for capturing beautiful memories of your special day. Many studios offer affordable packages that include a variety of services, such as pre-wedding photoshoots, candid wedding photography, and traditional posed shots. And this is where wedding photo planet can be your go-to-place. Our studio even offers add-on options like drone footage and photo albums at a reasonable price. Additionally, our budget-friendly studio is equipped with the latest photography equipment and technology, so, what are you waiting for? Contact us to know more about the packages.",
      "banner2": "/admin_image/wid/banner160567906916514786795.jpg"
    }
  },
  {
    "id": "56",
    "slug": "wedding-photos-atishya-anisha",
    "category": "WEDDING",
    "name": "Atishya & Anisha",
    "metadata": {
      "title": "Atishya & Anisha",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image138474776416514841031.jpg",
      "/admin_image/wid/hero_image92654236216514841102.jpg",
      "/admin_image/wid/hero_image136010681816514842243.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/22851099716498327711N3A4541.jpg",
        "alt": "Haldi Function"
      },
      {
        "src": "/admin_image/wid/66831765116498327711N3A4545.jpg",
        "alt": "Bride Haldi"
      },
      {
        "src": "/admin_image/wid/101972341416498327711N3A4547.jpg",
        "alt": "Indian Haldi Ceremony"
      },
      {
        "src": "/admin_image/wid/97712096016498327711N3A4554.jpg",
        "alt": "Best Indian Haldi Ceremony"
      },
      {
        "src": "/admin_image/wid/131385401616498332161N3A4600.jpg",
        "alt": "Wedding Ceremony"
      },
      {
        "src": "/admin_image/wid/82149868216498332161N3A4624.jpg",
        "alt": "Indian Wedding Ceremony"
      },
      {
        "src": "/admin_image/wid/162306318216498332161N3A5005.jpg",
        "alt": "Bride"
      },
      {
        "src": "/admin_image/wid/2670317616498332161N3A5016.jpg",
        "alt": "Wedding Photography"
      },
      {
        "src": "/admin_image/wid/154646816316498332161N3A5019.jpg",
        "alt": "Wedding Photography in India"
      },
      {
        "src": "/admin_image/wid/121365551816498332161N3A5022.jpg",
        "alt": "Indian Wedding Photography"
      },
      {
        "src": "/admin_image/wid/203681512516498332261N3A5024.jpg",
        "alt": "Best Indian Wed Photographer"
      },
      {
        "src": "/admin_image/wid/204474944616498332261N3A5028.jpg",
        "alt": "Candid Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/10198148561649833226DSC00029.jpg",
        "alt": "Father"
      },
      {
        "src": "/admin_image/wid/5498934611649833226DSC00036.jpg",
        "alt": "Indian Photographer"
      },
      {
        "src": "/admin_image/wid/1454114521649833226DSC00048.jpg",
        "alt": "Photography In Delhi NCR"
      },
      {
        "src": "/admin_image/wid/690170901649833226DSC00102.jpg",
        "alt": "Bride Photo Shoot"
      },
      {
        "src": "/admin_image/wid/17719253561649834035DSC00108.jpg",
        "alt": "Bride Photo Shoot in India"
      },
      {
        "src": "/admin_image/wid/8476666531649834035DSC00109.jpg",
        "alt": "Indian Bride Photography"
      },
      {
        "src": "/admin_image/wid/15515117121649834050DSC00116.jpg",
        "alt": "Wedding Photography"
      },
      {
        "src": "/admin_image/wid/18091428481649834050DSC00156.jpg",
        "alt": "Photography"
      },
      {
        "src": "/admin_image/wid/18755867421649834061DSC00173.jpg",
        "alt": "Candid Photography"
      },
      {
        "src": "/admin_image/wid/9022594761649834061DSC00177.jpg",
        "alt": "Best Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/14726040021649834061DSC00192.jpg",
        "alt": "Candid Photographer"
      },
      {
        "src": "/admin_image/wid/20316227001649834061DSC00207.jpg",
        "alt": "Best Wedding photographer"
      },
      {
        "src": "/admin_image/wid/16215843641649834061DSC00208.jpg",
        "alt": "Candid"
      },
      {
        "src": "/admin_image/wid/15158260361649834226DSC00219.jpg",
        "alt": "Candid"
      },
      {
        "src": "/admin_image/wid/10404340121649834226DSC00220.jpg",
        "alt": "Wedding Shoot in Delhi"
      },
      {
        "src": "/admin_image/wid/326367021649834253DSC00224.jpg",
        "alt": "Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/10805670521649834253DSC00333.jpg",
        "alt": "Candid Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/8251980531649834268DSC00337.jpg",
        "alt": "Best Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/1136804861649834280DSC00338.jpg",
        "alt": "Candid Photography in Delhi"
      },
      {
        "src": "/admin_image/wid/10708072001649834280DSC00720.jpg",
        "alt": "Best Candid Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/13932190941649834280DSC00725.jpg",
        "alt": "Wedding Photographers in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/10819128541649834280DSC00748.jpg",
        "alt": "Best Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/18767863061649834297DSC00748.jpg",
        "alt": "Best Photographer in Delhi"
      },
      {
        "src": "/admin_image/wid/1768347661649834297DSC00775.jpg",
        "alt": "Best Photographer in Uttam Nagar"
      },
      {
        "src": "/admin_image/wid/1329507581649834297DSC00785.jpg",
        "alt": "Candid Photographer"
      },
      {
        "src": "/admin_image/wid/7246742771649834297DSC00807.jpg",
        "alt": "Best Wedding photographer"
      },
      {
        "src": "/admin_image/wid/15232044061649834315DSC00816.jpg",
        "alt": "Candid"
      },
      {
        "src": "/admin_image/wid/7829673731649834315DSC00818.jpg",
        "alt": "Candid"
      },
      {
        "src": "/admin_image/wid/16277858981649834315DSC00820.jpg",
        "alt": "Candid"
      },
      {
        "src": "/admin_image/wid/16158411631649834335DSC00823.jpg",
        "alt": "Candid"
      },
      {
        "src": "/admin_image/wid/9271950291649834335DSC00836.jpg",
        "alt": "Pre Wedding Shoot in Delhi"
      },
      {
        "src": "/admin_image/wid/20057825411649834335DSC00838.jpg",
        "alt": "Wedding photographer in Delhi"
      },
      {
        "src": "/admin_image/wid/17255786821649834335DSC00869.jpg",
        "alt": "Best Candid Wedding Photographer in Delhi"
      },
      {
        "src": "/admin_image/wid/14475743381649834335DSC00874.jpg",
        "alt": "Candid Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/1377173971649834347DSC00889.jpg",
        "alt": "Candid Wedding Photography"
      },
      {
        "src": "/admin_image/wid/12950451681649834347DSC00891.jpg",
        "alt": "Best Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/7433635151649834347DSC00914.jpg",
        "alt": "Cinematic Wedding video Film"
      },
      {
        "src": "/admin_image/wid/8523496881649834347DSC00924.jpg",
        "alt": "Candid Photography in Delhi"
      },
      {
        "src": "/admin_image/wid/14721027891649834347DSC00927.jpg",
        "alt": "Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/12773122431649834359DSC00930.jpg",
        "alt": "Wedding Photography in Delhi"
      },
      {
        "src": "/admin_image/wid/7411018181649834359DSC00955.jpg",
        "alt": "Wedding Photography in Delhi"
      },
      {
        "src": "/admin_image/wid/20759125921649834359DSC00968.jpg",
        "alt": "Best Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/5487441131649834359DSC00978.jpg",
        "alt": "Best Wedding Photos"
      },
      {
        "src": "/admin_image/wid/14319656171649834359DSC00991.jpg",
        "alt": "Top Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/11232862741649834368DSC00998.jpg",
        "alt": "Best Wedding Photographers Near Me"
      },
      {
        "src": "/admin_image/wid/2264474581649834368DSC01002.jpg",
        "alt": "The Best Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/8569160841649834368DSC01004.jpg",
        "alt": "Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/7035006521649834368DSC01020.jpg",
        "alt": "Top Rated Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/18348561811649834368DSC01031.jpg",
        "alt": "Best Candid Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/3759591771649834469DSC01049.jpg",
        "alt": "Wedding Photography Packages in Delhi"
      },
      {
        "src": "/admin_image/wid/3817831011649834469DSC01054.jpg",
        "alt": "Candid Wedding Photography in Delhi"
      },
      {
        "src": "/admin_image/wid/13861097931649834469DSC01110.jpg",
        "alt": "Cheap Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/18092746061649834479DSC01145.jpg",
        "alt": "Good Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/13058875581649834479DSC01156.jpg",
        "alt": "Wedding Best Photos"
      },
      {
        "src": "/admin_image/wid/2994967751649834479DSC01165.jpg",
        "alt": "Wedding Shoot Destination in Delhi"
      },
      {
        "src": "/admin_image/wid/7330717271649834490DSC01232.jpg",
        "alt": "Wedding Photography Packages Prices in Delhi"
      },
      {
        "src": "/admin_image/wid/7891252151649834490DSC01268.jpg",
        "alt": "Atishya & Anisha"
      },
      {
        "src": "/admin_image/wid/14910913641649834490DSC01290.jpg",
        "alt": "Top Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/18380902961649834490DSC01345.jpg",
        "alt": "Famous Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/1746578091649834557DSC01349.jpg",
        "alt": "Best Destination Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/7061639991649834557DSC01351.jpg",
        "alt": "Destination Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/11793846991649834567DSC01352.jpg",
        "alt": "Best Wedding Shoot Photographer in Delhi"
      },
      {
        "src": "/admin_image/wid/3767626871649834567DSC01355.jpg",
        "alt": "Best Photographer for Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/195840111649834575DSC01364.jpg",
        "alt": "Best Wedding Photography in Delhi"
      },
      {
        "src": "/admin_image/wid/17263596801649834575DSC01367.jpg",
        "alt": "Best Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/1583674581649834575DSC01388.jpg",
        "alt": "Best Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/7208710121649834584DSC01389.jpg",
        "alt": "Candid Photography in Delhi"
      },
      {
        "src": "/admin_image/wid/8433963791649834584DSC01433.jpg",
        "alt": "Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/877635461649834584DSC01442.jpg",
        "alt": "Candid Photographer"
      },
      {
        "src": "/admin_image/wid/18755238381649834591DSC01444.jpg",
        "alt": "Best Wedding Photographers in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/9563407081649834591DSC01456.jpg",
        "alt": "Best Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/1575935341649834599DSC01473.jpg",
        "alt": "Candid"
      },
      {
        "src": "/admin_image/wid/2799295691649834599DSC01484.jpg",
        "alt": "Candid Photography in Delhi"
      }
    ],
    "content": {
      "desc4": "Atishya and Anisha are a beautiful married couple.They tied the knot in a grand ceremony surrounded by their family and friends. They make a perfect match, complementing each other in every way. They are truly an inspiration for young couples everywhere. Their love for each other is evident in the way they look at each other and the way they support each other in every step of their lives.",
      "heading1": "Wedding during lockdown",
      "desc1": "Atishya and Anisha got married during the lockdown. Hence, they had to keep it low key without breaking the rules and regulations of the lockdown. Together in a private ceremony with just their closest family and friends. Your wedding day was full of memories and moments that will last a lifetime, and we were so happy to be part of it.",
      "banner1": "/admin_image/wid/banner1995890761649832771Top Wedding Photography Company.jpg",
      "heading2": "Best candid wedding photographers in delhi",
      "desc2": "Wedding Photo Planet is dedicated to providing you with the best candid wedding photography in Delhi. Our team of expert photographers are skilled in capturing the candid moments and emotions of your special day in an unobtrusive and natural way. They understand how to capture the real emotions, reactions and feelings of your big day, creating a collection of images that truly reflect the essence of your wedding. Candid photography allows for a more natural and authentic representation of your wedding day compared to traditional photography and our photographers are known for their ability to capture those real moments that are often missed by the traditional photographers.",
      "heading3": "Wedding photography packages in delhi",
      "desc3": "Wedding Photo Planet offers a wide range of wedding photography packages in Delhi to suit your needs and budget. Our team of experts has carefully curated a variety of packages that include everything from traditional and candid photography to wedding shoots and videography. Whether you're looking for full-day coverage or just a few hours, we have a package that will fit your requirements.",
      "banner2": "/admin_image/wid/banner118728511931649832865Haldi-Function-Cermoney.jpg"
    }
  },
  {
    "id": "58",
    "slug": "wedding-photos-ankit-chandan",
    "category": "WEDDING",
    "name": "Ankit & Chandan",
    "metadata": {
      "title": "Ankit & Chandan",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image19896661171651473376q.jpg",
      "/admin_image/wid/hero_image186585560716514733862.jpg",
      "/admin_image/wid/hero_image29886503516514733923.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/1139898991165036258001.jpg",
        "alt": "Groom smiling during candid moment – shot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/1387277234165036258002.jpg",
        "alt": "Bride smiling during candid moment – shot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/1257070919165036258004.jpg",
        "alt": "Mehndi on bride’s hands – traditional beauty"
      },
      {
        "src": "/admin_image/wid/1963841231165036258005.jpg",
        "alt": "Friends playing with haldi – joy-filled event capture"
      },
      {
        "src": "/admin_image/wid/1056128349165120856406.jpg",
        "alt": "Pre-wedding photo inspiration"
      },
      {
        "src": "/admin_image/wid/1292071607165120856407.jpg",
        "alt": "Romantic pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/6908696741651208564DSC01008.jpg",
        "alt": "Candid pre-wedding photography"
      },
      {
        "src": "/admin_image/wid/21396988921651208570DSC01021.jpg",
        "alt": "Best pre-wedding photographer"
      },
      {
        "src": "/admin_image/wid/11785732221651208570DSC01053.jpg",
        "alt": "Creative pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/18112783571651208570DSC01076.jpg",
        "alt": "Outdoor pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/1367007701651208576DSC01082-copy.jpg",
        "alt": "Sunset pre-wedding photos"
      },
      {
        "src": "/admin_image/wid/17528517651651208576DSC01083.jpg",
        "alt": "Artistic pre-wedding photography"
      },
      {
        "src": "/admin_image/wid/9772459451651208576DSC01106.jpg",
        "alt": "Casual outfit shoot"
      },
      {
        "src": "/admin_image/wid/16462151871651208581DSC01129.jpg",
        "alt": "Royal theme pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/21364114921651208581DSC01132.jpg",
        "alt": "Coordinated dress photo ideas"
      },
      {
        "src": "/admin_image/wid/9723129321651208587DSC01137.jpg",
        "alt": "Romantic couple moments"
      },
      {
        "src": "/admin_image/wid/10183254821651208587DSC01144.jpg",
        "alt": "Fun-loving pre-wedding couple"
      },
      {
        "src": "/admin_image/wid/2605102061651208587DSC01144-copy.jpg",
        "alt": "Candid laughter shots"
      },
      {
        "src": "/admin_image/wid/7477829611651208593DSC01151.jpg",
        "alt": "Holding hands close-up"
      },
      {
        "src": "/admin_image/wid/2232468721651208593DSC01156.jpg",
        "alt": "Emotional eye contact shot"
      },
      {
        "src": "/admin_image/wid/19600835971651208598DSC01160.jpg",
        "alt": "Couple dancing in field"
      },
      {
        "src": "/admin_image/wid/14768540371651208598DSC01171.jpg",
        "alt": "Hugging at sunset"
      },
      {
        "src": "/admin_image/wid/15247064601651208598DSC01194-copy.jpg",
        "alt": "Playful couple shoot"
      },
      {
        "src": "/admin_image/wid/9223212461651208602DSC01296.jpg",
        "alt": "Rajasthani royal shoot – ethnic theme captured"
      },
      {
        "src": "/admin_image/wid/3537631461651208602DSC01339.jpg",
        "alt": "Traditional royal look for wedding shoot"
      },
      {
        "src": "/admin_image/wid/9032013111651208602DSC01362.jpg",
        "alt": "Luxury heritage shoot with regal outfits"
      }
    ],
    "content": {
      "desc4": "The couple's chemistry and love for each other shone through in every photo, making for a truly stunning set of images. The photoshoot took place in a variety of locations, including a picturesque garden and a grand building, providing a diverse range of backdrops for the photos. The couple's traditional attire added a touch of elegance to the photos, and the candid moments captured between Ankit and Chandan were truly heartwarming.",
      "heading1": "Wedding photoshoot at The Pilanis",
      "desc1": "The wedding photoshoot at the Pilani’s was a breathtaking event. The couple, who were surrounded by their closest friends and family, posed for pictures in the grandeur of the Pilani's palace and gardens. The palace, with its stunning architecture and picturesque surroundings, provided the perfect backdrop for the couple's special day. The couple was dressed in elegant traditional attire and the photographer captured some truly stunning moments of the couple's love and affection for each other.",
      "banner1": "/admin_image/wid/banner1175476224916514744944.jpg",
      "heading2": "Best candid and cinematographers in delhi",
      "desc2": "Wedding Photo Planet is your one-stop-shop for finding the best candid and cinematographer for your wedding day. These professionals are known for their ability to capture the real emotions, reactions and moments of your special day in a way that traditional photography can't match. They use their creativity and skills to create a film that showcases the beauty, romance and excitement of your wedding day, giving you a memory that you can cherish for a lifetime. Whether you're looking for traditional or contemporary style, our candid and cinematographer will work with you to create a collection of images and videos that perfectly capture the essence of your love story.",
      "heading3": "Cinematic wedding video film",
      "desc3": "Wedding Photo Planet offers you the best cinematic wedding video films. Our team of professional videographers specialize in creating visually stunning, emotional and cinematic films that tell the story of your special day. They use advanced filming techniques, equipment and editing skills to create a film that showcases the beauty, romance, and emotions of your wedding day in a way that traditional videography can't match. They work closely with you to understand your preferences and style, and create a film that is tailored to your unique story. Whether you're looking for a traditional or contemporary style, our cinematic wedding video films are designed to capture the essence of your love story and the beauty of your special day in a way that will be cherished for a lifetime.",
      "banner2": "/admin_image/wid/banner1166395625316514751495.jpg"
    }
  },
  {
    "id": "59",
    "slug": "wedding-photos-sagar-surbhi",
    "category": "WEDDING",
    "name": "Sagar & Surbhi",
    "metadata": {
      "title": "Sagar & Surbhi",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image11871683411651470288Banner-Of-All-Top-(1).jpg",
      "/admin_image/wid/hero_image41355754916514703712.jpg",
      "/admin_image/wid/hero_image1850156916514704623.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/9595243941650449081WPP06182.jpg",
        "alt": "Bridal pre-wedding photography"
      },
      {
        "src": "/admin_image/wid/2817851031651211034WPP06208.jpg",
        "alt": "Bride solo portrait shoot"
      },
      {
        "src": "/admin_image/wid/9901679781651211072WPP06243.jpg",
        "alt": "Solo bride photoshoot ideas"
      },
      {
        "src": "/admin_image/wid/16164030731651211570WPP06288.jpg",
        "alt": "Elegant bride pre-wedding moments"
      },
      {
        "src": "/admin_image/wid/16124456561651211573WPP06498.jpg",
        "alt": "Stunning solo bridal portraits"
      },
      {
        "src": "/admin_image/wid/11551771891651211577WPP06506.jpg",
        "alt": "Royal bridal solo shoot"
      },
      {
        "src": "/admin_image/wid/13317896571651211613WPP06556.jpg",
        "alt": "Princess-style bridal shoot"
      },
      {
        "src": "/admin_image/wid/865547831651211615WPP07586.jpg",
        "alt": "Professional solo bridal photographer"
      },
      {
        "src": "/admin_image/wid/10780838181651211618WPP07611.jpg",
        "alt": "Bridal portraits by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/18430672381651211620WPP07636.jpg",
        "alt": "High-end bride-only photography shoot"
      },
      {
        "src": "/admin_image/wid/2848280011651211812WPP07658.jpg",
        "alt": "Solo pre-wedding shoot for modern brides"
      },
      {
        "src": "/admin_image/wid/21373618501651211815WPP07813.jpg",
        "alt": "Storytelling bridal portrait session"
      }
    ],
    "content": {
      "desc4": "The wedding photoshoot of Sagar and Surbhi was a beautiful and romantic experience for the couple and their photographers. The couple's chemistry and love for each other shone through in every photo, making for a truly stunning set of images. The photoshoot took place in a variety of locations providing a diverse range of backdrops for the photos. The couple's traditional attire added a touch of elegance to the photos, and the candid moments captured between Sagar and Surbhi were truly heartwarming.",
      "heading1": "WEDDING PHOTOGRAPHY AT SEVEN SEAS",
      "desc1": "The wedding photoshoot at the Seven Seas was a luxurious and elegant experience for the couple and their photographers. The hotel's modern and sophisticated architecture provided a beautiful backdrop for the photos, with its grand staircases, sleek lines, and elegant chandeliers. The couple was able to take advantage of the hotel's various indoor and outdoor spaces, including the gardens, pool area, and elegant ballroom for a variety of different shots.",
      "banner1": "/admin_image/wid/banner138215424616514716054.jpg",
      "heading2": "Best wedding photographers in Delhi",
      "desc2": "At Wedding Photo Planet, we strive to provide the highest standard of excellence and service in our wedding photography business. Our team is passionate about delivering beautiful, high quality images that capture your big day from start to finish.",
      "heading3": "Budget wedding photo studio in delhi",
      "desc3": "For couples on a budget, a wedding photo planet in Delhi can be a great option for capturing beautiful memories of your special day. Many studios offer affordable packages that include a variety of services, such as pre-wedding photoshoots, candid wedding photography, and traditional posed shots. And this is where wedding photo planet can be your go-to-place. Our studio even offers add-on options like drone footage and photo albums at a reasonable price. Additionally, our budget-friendly studio is equipped with the latest photography equipment and technology, so, what are you waiting for? Contact us to know more about the packages.",
      "banner2": "/admin_image/wid/banner1124238956016514717315.jpg"
    }
  },
  {
    "id": "61",
    "slug": "wedding-photos-anshul-bhavna",
    "category": "WEDDING",
    "name": "Anshul & Bhavna",
    "metadata": {
      "title": "Anshul & Bhavna",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image170493088316514033331.jpg",
      "/admin_image/wid/hero_image8990608916514035212.jpg",
      "/admin_image/wid/hero_image127606115016514051013.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/206653908316512260320F2A6794.jpg",
        "alt": "Solo bridal portrait photography"
      },
      {
        "src": "/admin_image/wid/141886821816512260320F2A6806.jpg",
        "alt": "Close-up bridal makeup shots"
      },
      {
        "src": "/admin_image/wid/201320575216512260320F2A6928.jpg",
        "alt": "Traditional bride photoshoot"
      },
      {
        "src": "/admin_image/wid/15244265816512260320F2A7232.jpg",
        "alt": "Elegant bride solo portraits"
      },
      {
        "src": "/admin_image/wid/50999694716512260320F2A7239.jpg",
        "alt": "Royal bridal photo session"
      },
      {
        "src": "/admin_image/wid/48248538516512260320F2A7244.jpg",
        "alt": "Creative bridal posing ideas"
      },
      {
        "src": "/admin_image/wid/78322477216512260400F2A7259.jpg",
        "alt": "Varmala moment capture"
      },
      {
        "src": "/admin_image/wid/23173780216512260400F2A7262.jpg",
        "alt": "Bride and groom during jaimala"
      },
      {
        "src": "/admin_image/wid/168128585216512260400F2A7265.jpg",
        "alt": "Emotional varmala scene"
      },
      {
        "src": "/admin_image/wid/99085231216512260400F2A7266.jpg",
        "alt": "Close-up of varmala moment"
      },
      {
        "src": "/admin_image/wid/204964440016512260470F2A7283.jpg",
        "alt": "Bride smiling during jaimala"
      },
      {
        "src": "/admin_image/wid/188161521016512260470F2A7286.jpg",
        "alt": "High-energy varmala scene capture"
      },
      {
        "src": "/admin_image/wid/8441940316512260470F2A7291.jpg",
        "alt": "Best jaimala moment shot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/14023150716512260470F2A7439.jpg",
        "alt": "Jaimala photography in cinematic style"
      },
      {
        "src": "/admin_image/wid/176018701516512260470F2A7446.jpg",
        "alt": "Royal wedding jaimala ceremony photos"
      },
      {
        "src": "/admin_image/wid/68821068016512260550F2A7447.jpg",
        "alt": "Luxury varmala event coverage"
      },
      {
        "src": "/admin_image/wid/161184459516512260550F2A7451.jpg",
        "alt": "Iconic jaimala shot in golden hour"
      },
      {
        "src": "/admin_image/wid/118677338616512260550F2A7453.jpg",
        "alt": "Picture-perfect jaimala shot by top wedding photography team"
      },
      {
        "src": "/admin_image/wid/174804661816512260550F2A7454.jpg",
        "alt": "Best candid varmala photo of the wedding night"
      },
      {
        "src": "/admin_image/wid/115738022416512260550F2A7456.jpg",
        "alt": "Stunning varmala photo with stage decor details"
      },
      {
        "src": "/admin_image/wid/36663682716512260630F2A7459.jpg",
        "alt": "Epic varmala moment with floral shower by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/175984305716512260630F2A7460.jpg",
        "alt": "Signature jaimala shot for wedding album"
      },
      {
        "src": "/admin_image/wid/5415097816512260630F2A7468.jpg",
        "alt": "Timeless bridal portrait captured by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/182086428616512260630F2A7469.jpg",
        "alt": "Classic solo bride pose in regal bridal attire"
      },
      {
        "src": "/admin_image/wid/194974618316512260630F2A7471.jpg",
        "alt": "Fine-art bridal portrait session with luxury detailing"
      },
      {
        "src": "/admin_image/wid/35694884316512260690F2A7477.jpg",
        "alt": "Graceful bridal look captured in perfect light"
      },
      {
        "src": "/admin_image/wid/208422021016512260690F2A7479.jpg",
        "alt": "Traditional bride in detailed lehenga – premium portrait"
      },
      {
        "src": "/admin_image/wid/28263958516512260690F2A7480.jpg",
        "alt": "Lavish wedding ceremony captured in cinematic style"
      },
      {
        "src": "/admin_image/wid/113240577516512260690F2A7490.jpg",
        "alt": "Romantic golden hour couple moment by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/163829447716512260690F2A7493.jpg",
        "alt": "Sunset silhouette of bride and groom – dreamy vibe"
      },
      {
        "src": "/admin_image/wid/145384998116512260760F2A7494.jpg",
        "alt": "Golden light enhancing bridal elegance"
      },
      {
        "src": "/admin_image/wid/75376829116512260760F2A7495.jpg",
        "alt": "Pre-wedding sunset shot at scenic location"
      },
      {
        "src": "/admin_image/wid/49888472116512260760F2A7504.jpg",
        "alt": "Bride and groom pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/11225498416512260760F2A7510.jpg",
        "alt": "Couple pre-wedding photography"
      },
      {
        "src": "/admin_image/wid/128047139116512260760F2A7513.jpg",
        "alt": "Romantic pre-wedding poses"
      },
      {
        "src": "/admin_image/wid/66105847416512260870F2A7514.jpg",
        "alt": "Bride and groom pre-wedding ideas"
      },
      {
        "src": "/admin_image/wid/15712103616512260870F2A7515.jpg",
        "alt": "Candid couple pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/153347524116512260870F2A7516.jpg",
        "alt": "Stylish pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/103370737916512260870F2A7517.jpg",
        "alt": "Couple pre-wedding session"
      },
      {
        "src": "/admin_image/wid/101882024716512260870F2A7518.jpg",
        "alt": "Golden hour pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/92816329116512260950F2A7519.jpg",
        "alt": "Outdoor couple pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/90424268716512260950F2A7520.jpg",
        "alt": "Royal-themed bride and groom shoot"
      },
      {
        "src": "/admin_image/wid/82629215816512260950F2A7521.jpg",
        "alt": "Storytelling pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/17528608516512260950F2A7523.jpg",
        "alt": "Artistic couple shoot ideas"
      },
      {
        "src": "/admin_image/wid/198818680316512260950F2A7524.jpg",
        "alt": "Nature-themed pre-wedding photography"
      },
      {
        "src": "/admin_image/wid/28698441516512261050F2A7525.jpg",
        "alt": "Pre-wedding shoot at palace"
      },
      {
        "src": "/admin_image/wid/59909334916512261050F2A7526.jpg",
        "alt": "Holding hands pre-wedding moment"
      },
      {
        "src": "/admin_image/wid/208105972216512261050F2A7529.jpg",
        "alt": "Bride and groom shoot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/114607319116512261050F2A7530.jpg",
        "alt": "Couple shoot before marriage"
      },
      {
        "src": "/admin_image/wid/21847933516512261050F2A7531.jpg",
        "alt": "Wedding Photo Planet couple story shoot"
      },
      {
        "src": "/admin_image/wid/94399082316512261110F2A7540.jpg",
        "alt": "Romantic shoot for engaged couples"
      },
      {
        "src": "/admin_image/wid/168288965816512261110F2A7556.jpg",
        "alt": "Trending couple pre-wedding photography 2025"
      },
      {
        "src": "/admin_image/wid/3269405616512261110F2A7557.jpg",
        "alt": "Post-wedding photoshoot"
      },
      {
        "src": "/admin_image/wid/4062508601651226111DSC00002.jpg",
        "alt": "After marriage couple shoot"
      },
      {
        "src": "/admin_image/wid/19970258991651226111DSC00005.jpg",
        "alt": "Newlywed photography session"
      },
      {
        "src": "/admin_image/wid/21267577721651226117DSC09942.jpg",
        "alt": "Bride and groom post-wedding portraits"
      },
      {
        "src": "/admin_image/wid/10436114901651226117DSC09983.jpg",
        "alt": "Traditional post-wedding rituals photography"
      },
      {
        "src": "/admin_image/wid/11267473641651226117DSC09987.jpg",
        "alt": "Couple shoot after wedding ceremony"
      },
      {
        "src": "/admin_image/wid/16477253151651226117IMG_1689.jpg",
        "alt": "Just married photoshoot"
      },
      {
        "src": "/admin_image/wid/7617635291651226117IMG_1692.jpg",
        "alt": "Husband and wife shoot"
      },
      {
        "src": "/admin_image/wid/14818041991651226136IMG_1705.jpg",
        "alt": "Newly married couple photos"
      },
      {
        "src": "/admin_image/wid/598729051651226136IMG_1706.jpg",
        "alt": "First look after wedding"
      },
      {
        "src": "/admin_image/wid/3832616901651226136IMG_1707.jpg",
        "alt": "Premium pre-wedding photoshoot package"
      },
      {
        "src": "/admin_image/wid/10746403491651226136IMG_1709.jpg",
        "alt": "Elite pre-wedding photography services"
      },
      {
        "src": "/admin_image/wid/5223570911651226143IMG_1710.jpg",
        "alt": "Cinematic pre-wedding shoot for VIP clients"
      },
      {
        "src": "/admin_image/wid/10936128431651226143IMG_1712.jpg",
        "alt": "Designer location pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/664950911651226143IMG_5918.jpg",
        "alt": "Professional pre-wedding storytelling shoot"
      },
      {
        "src": "/admin_image/wid/19424012201651226143IMG_5919.jpg",
        "alt": "Top-tier pre-wedding photographer India"
      }
    ],
    "content": {
      "desc4": "Wedding photoshoot of Anshul and Bhavna was an eventful and emotional experience. The couple's traditional attire, with Bhavna in a beautiful lehenga and Anshul in a classic sherwani, added a touch of elegance to the photos. The photographers captured their candid moments and emotions throughout the day, showcasing the love and connection between the couple. The couple's chemistry and love for each other were evident in every photo, making for a truly stunning set of images.",
      "heading1": "Wedding photoshoot at radisson blu",
      "desc1": "The wedding photoshoot at the Raddison Blu, Kaushambi was a luxurious and elegant experience for the couple and their photographers. The hotel's modern and sophisticated architecture provided a beautiful backdrop for the photos, with its grand staircases, sleek lines and elegant chandeliers. The couple was able to take advantage of the hotel's various indoor and outdoor spaces, including the gardens, pool area and elegant ballroom, for a variety of different shots. The couple was dressed in traditional attire and the photographers captured their candid moments and emotions throughout the day, showcasing the love and connection between the couple.",
      "banner1": "/admin_image/wid/banner157840565316514695204.jpg",
      "heading2": "Best wedding photographers",
      "desc2": "Wedding Photo Planet is proud to offer the best wedding photography in Delhi. Our team of experienced and talented photographers specialize in capturing the real, unscripted moments of your special day. We use a photojournalistic approach to document the emotions, moments, and interactions of the couple and their loved ones. Our goal is to create a visual story of your wedding day that you can treasure for a lifetime. We understand the importance of capturing those precious moments that happen in a blink of an eye and that's why our photographers are always alert and ready to snap the perfect shot. We use state of the art equipment and the latest techniques to ensure that your photographs are of the highest quality.",
      "heading3": "Budget wedding photo studio in delhi",
      "desc3": "For couples on a budget, a wedding photo planet in Delhi can be a great option for capturing beautiful memories of your special day. Many studios offer affordable packages that include a variety of services, such as pre-wedding photoshoots, candid wedding photography, and traditional posed shots. And this is where wedding photo planet can be your go-to-place. Our studio even offers add-on options like drone footage and photo albums at a reasonable price. Additionally, our budget-friendly studio is equipped with the latest photography equipment and technology, so, what are you waiting for? Contact us to know more about the packages.",
      "banner2": "/admin_image/wid/banner1169082912016514700745.jpg"
    }
  },
  {
    "id": "62",
    "slug": "pre-wedding-photos-mohit-sanjoli",
    "category": "PRE WEDDING",
    "name": "Mohit & Sanjoli",
    "metadata": {
      "title": "Mohit & Sanjoli",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image13178167916520888091.jpg",
      "/admin_image/wid/hero_image120403891916520888132.jpg",
      "/admin_image/wid/hero_image18097138216520888183.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/178273012816515753429V3A3607.jpg",
        "alt": "Romantic outdoor shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/15351173341651575342DSC00180-copy.jpg",
        "alt": "Sunset couple moment – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/1609249291651575342DSC00214-copy.jpg",
        "alt": "Fort shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/17554283751651575349DSC00289-copy-Album-Cover.jpg",
        "alt": "Mountain pre-wedding frame – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/20059949761651575349DSC00441-copy.jpg",
        "alt": "Garden shoot captured – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/5872468551651575349DSC00490-copy.jpg",
        "alt": "Outdoor garden pre-wedding session"
      },
      {
        "src": "/admin_image/wid/3605454401651575367DSC00507a-copy.jpg",
        "alt": "Garden view candid moments"
      },
      {
        "src": "/admin_image/wid/15084985401651575367DSC00554-copy.jpg",
        "alt": "Floral garden couple shots"
      },
      {
        "src": "/admin_image/wid/1548817791651575367DSC00620-2-copy.jpg",
        "alt": "Fairytale garden scene"
      },
      {
        "src": "/admin_image/wid/6687122801651575367DSC00642-copy.jpg",
        "alt": "Garden-themed storytelling"
      },
      {
        "src": "/admin_image/wid/18331771681651575388DSC00654-Edit-copy.jpg",
        "alt": "Nature garden backdrop"
      },
      {
        "src": "/admin_image/wid/4259213531651575389DSC00756-copy.jpg",
        "alt": "Garden view candid moments"
      },
      {
        "src": "/admin_image/wid/369766111651575389DSC00803-copy.jpg",
        "alt": "Lush garden background"
      },
      {
        "src": "/admin_image/wid/20963939581651575402DSC00878-copy.jpg",
        "alt": "Sunset couple moment – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/13954587461651575402DSC00883-copy-2.jpg",
        "alt": "Windswept portrait – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/9714555591651575402DSC01143-copy.jpg",
        "alt": "Nature-themed shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/4898825421651575437DSC01203-copy.jpg",
        "alt": "Golden hour glow shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/14800758681651575437DSC09607-copy.jpg",
        "alt": "Foggy morning shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/15199119431651575448DSC09716-copy.jpg",
        "alt": "Cliffside romance captured – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/17770111941651575448DSC09721-copy.jpg",
        "alt": "Jungle path romance – Wedding Photo Planet"
      }
    ],
    "content": {
      "desc4": "The pre-wedding shoot of Mohit and Sanjoli was an extraordinary and unique event. Their chemistry and love for each other was evident in every shot, making for truly beautiful and unique photographs. The pre-wedding shoot was a perfect representation of the love and excitement that Mohit and Sanjoli have for their upcoming wedding and their willingness to think outside the box. The photographs will serve as a beautiful memory of this special time in their lives and a treasure that they can look back on for years to come.",
      "heading1": "Pre-wedding photoshoot at humayun’s tomb",
      "desc1": "Wedding Photo Planet offers breathtaking pre-wedding photoshoots at the historic Humayun's Tomb in Delhi. The UNESCO World Heritage Site is a beautiful blend of Mughal architecture and landscaped gardens, providing the perfect backdrop for romantic and elegant pre-wedding photos. Our skilled photographers have an eye for detail and know how to capture the essence of this historic site in a way that truly showcases its beauty. Whether you're looking for intimate shots of just the two of you or group shots with your loved ones, we will work with you to create a pre-wedding photoshoot that reflects your unique style and personalities.",
      "banner1": "/admin_image/wid/banner1120164055816521798524.jpg",
      "heading2": "Pre-wedding shoot in Delhi",
      "desc2": "Wedding Photo Planet is a leading provider of pre-wedding photography services in Delhi. Our team of experienced and talented photographers specialize in capturing the romance and excitement of the pre-wedding period. We understand the importance of this special time in your life and strive to create stunning, timeless photographs that you will treasure forever. Our photographers use the latest equipment and techniques to ensure that your photos are of the highest quality.",
      "heading3": "Pre Wedding Best Photos",
      "desc3": "At Wedding Photo Planet, we pride ourselves on capturing the best pre-wedding photos that truly reflect the love and excitement of the couple. Our team of experienced photographers specializes in capturing candid, natural moments as well as posed shots that will make you look and feel your best. We understand that pre-wedding photos are an important part of the wedding journey and strive to make sure that every couple leaves our photoshoot with beautiful, timeless photographs that they will treasure forever.",
      "banner2": "/admin_image/wid/banner180637970716521798525.jpg"
    }
  },
  {
    "id": "63",
    "slug": "pre-wedding-photos-anjali-mukul",
    "category": "PRE WEDDING",
    "name": "Anjali & Mukul",
    "metadata": {
      "title": "Anjali & Mukul",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image104006275416520882382.jpg",
      "/admin_image/wid/hero_image24109802416520882413.jpg",
      "/admin_image/wid/hero_image109373705516520882451.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/4102242781650781471DSC05265 copy.jpg",
        "alt": "Santorini style pre-wedding"
      },
      {
        "src": "/admin_image/wid/18443991391650781471DSC05290 copy.jpg",
        "alt": "Conceptual couple shoot"
      },
      {
        "src": "/admin_image/wid/10567738641650781471DSC05323 copy.jpg",
        "alt": "Flowing gown pre-wedding frame"
      },
      {
        "src": "/admin_image/wid/693832481650781471DSC05333 copy.jpg",
        "alt": "Artistic pre-wedding photography"
      },
      {
        "src": "/admin_image/wid/17220068751650781471DSC05359 copy.jpg",
        "alt": "Greek theme shoot for couples"
      },
      {
        "src": "/admin_image/wid/1268110801651577161DSC05411 copy.jpg",
        "alt": "Elegant pre-wedding moment"
      },
      {
        "src": "/admin_image/wid/17542891861651577161DSC05429 copy.jpg",
        "alt": "Fashion editorial-style couple photo"
      },
      {
        "src": "/admin_image/wid/4628703431651577161DSC05462 copy.jpg",
        "alt": "Classy Pre-Wedding Backdrop Ideas by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/6361033801651577161DSC05536 copy.jpg",
        "alt": "Royal Blue Gown Pre-Wedding Scene – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/17593873701651577190DSC05603 copy.jpg",
        "alt": "Editorial Style Couple Pose in Greece Theme – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/9792906581651577190DSC05651 copy.jpg",
        "alt": "Jump Pose Couple Photography – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/18170579091651577190DSC05678 copy.jpg",
        "alt": "Fun Street Style Pre-Wedding – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/17739600301651577206DSC05750a copy.jpg",
        "alt": "Youthful"
      },
      {
        "src": "/admin_image/wid/9156591061651577206DSC05850 copy Album Cover.jpg",
        "alt": "Love Story-Based Shoots"
      },
      {
        "src": "/admin_image/wid/14733373791651577206DSC05876 copy.jpg",
        "alt": "Bridal Portraiture"
      },
      {
        "src": "/admin_image/wid/2089037251651577229DSC05882 copy.jpg",
        "alt": "Proposal"
      },
      {
        "src": "/admin_image/wid/14781688221651577229DSC05925 copy.jpg",
        "alt": "Casual Couple Lifestyle Shoots"
      },
      {
        "src": "/admin_image/wid/20674269831651577239DSC05926 copy.jpg",
        "alt": "Luxury / High-End Pre-Weddings"
      },
      {
        "src": "/admin_image/wid/10377321661651577239DSC05927 copy.jpg",
        "alt": "Designer Outfits"
      },
      {
        "src": "/admin_image/wid/18838115891651577250DSC05934 copy.jpg",
        "alt": "Luxury Resorts / Villas Backdrops"
      },
      {
        "src": "/admin_image/wid/8450530571651577250DSC06000 copy.jpg",
        "alt": "Props-Based / Set Design Shoots"
      }
    ],
    "content": {
      "desc4": "The pre-wedding shoot of Anjali and Mukul was a truly romantic and intimate event. The couple was dressed in coordinating outfits, with Anjali in a elegant dress and Mukul in a classic suit. The shoot took place in a picturesque outdoor location. Their chemistry and love for each other was evident in every shot, making for truly beautiful and romantic photographs.",
      "heading1": "Pre Wedding photoshoot at photo rachna studios",
      "desc1": "Pre-wedding photography is an essential aspect of any couple's wedding preparations. It is a way for couples to capture the love and excitement they feel before their big day. This couple chose Photo Rachna Studio in Haryana as the perfect location for their shoot. The team of Wedding Photo Planet took care of every wish of the client and gave them the most beautiful photographs and videos.",
      "banner1": "/admin_image/wid/banner130848498416521770995.jpg",
      "heading2": "Best Pre Wedding Shoot Photographer in Delhi",
      "desc2": "At Wedding Photo Planet, we understand that pre-wedding photography is not just about taking pictures, it's about capturing the emotions and feelings of the couple before the big day. Our team of pre-wedding photographers in Delhi is dedicated to creating a fun and relaxed environment for the couple to enjoy the photo shoot. We make sure to put the couple at ease and make them feel comfortable in front of the camera. With our team of pre-wedding photographers in Delhi, you can be sure that your pre-wedding photos will be a perfect representation of your love story.",
      "heading3": "Pre-Wedding Photography Packages Prices In Delhi",
      "desc3": "At Wedding Photo Planet, we understand that every couple has different needs and preferences for their pre-wedding photography. That's why we offer a variety of photography packages to suit every budget. Our basic package includes a photo shoot at a location of your choice and editing and retouching of the final images.",
      "banner2": "/admin_image/wid/banner125218127516521770994.jpg"
    }
  },
  {
    "id": "64",
    "slug": "pre-wedding-photos-bhavnesh-himashi",
    "category": "PRE WEDDING",
    "name": "Bhavnesh & Himashi",
    "metadata": {
      "title": "Bhavnesh & Himashi",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image91057781416520874981.jpg",
      "/admin_image/wid/hero_image141323732616520875032.jpg",
      "/admin_image/wid/hero_image190066457416520875073.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/15668837311650782489DSC00573 copy.jpg",
        "alt": "Rustic village couple shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/102183692916515798509V3A3607.jpg",
        "alt": "Candid couple near a village well – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/15850418351651579850DSC00573-copy.jpg",
        "alt": "Traditional attire pre-wedding – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/17687546101651579850DSC00597-copy.jpg",
        "alt": "Candid couple"
      },
      {
        "src": "/admin_image/wid/2991317521651579850DSC00635-copy.jpg",
        "alt": "Ethnic couple shot in mustard fields – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/15293735441651579850DSC00640-copy.jpg",
        "alt": "Village love tale in golden fields – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/15684206141651579895DSC00674-copy-2.jpg",
        "alt": "Groom with turban village style frame – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/16369025761651579895DSC00675-copy.jpg",
        "alt": "Romantic couple shoot in open fields – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/307898511651579904DSC00694-copy.jpg",
        "alt": "Sunset love moments in fields – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/1947493751651579904DSC00716-copy.jpg",
        "alt": "Fieldside pre-wedding story – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/1638390111651579913DSC00836-copy.jpg",
        "alt": "Cozy charpai moment – Wedding Photo Plane"
      },
      {
        "src": "/admin_image/wid/14481077281651579913DSC00840-copy.jpg",
        "alt": "Pre-wedding vibes with rural khaat – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/13369565041651579913DSC00869-copy.jpg",
        "alt": "Rustic khaat couple pose – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/11451710951651579913DSC00874-copy.jpg",
        "alt": "Couple chill on woven khaat – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/3996282611651579913DSC00885-copy.jpg",
        "alt": "Heartfelt village moment on khaat – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/13717887481651579924DSC00886-copy.jpg",
        "alt": "Charpai and conversation pre-wedding frame – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/19620868461651579924DSC00893-2-copy.jpg",
        "alt": "Punjabi village style khaat couple pose – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/12814731121651579924DSC00985-copy.jpg",
        "alt": "First date recreation shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/17473615241651579924DSC00994-copy.jpg",
        "alt": "Pre-wedding at proposal location – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/10799994601651579924DSC01428-copy.jpg",
        "alt": "Story of us – date moments captured – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/13194291711651579931DSC01436-copy.jpg",
        "alt": "Timeline love story shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/8968899891651579931DSC01531-copy.jpg",
        "alt": "Couple celebrating anniversary vibes – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/10875906011651579931DSC01539-copy.jpg",
        "alt": "Save the date couple shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/19443238641651579931DSC01541-copy.jpg",
        "alt": "Calendar-themed romantic shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/16780144171651579931DSC01545-copy.jpg",
        "alt": "Candid save-the-date board – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/3797329581651579938DSC01596-copy.jpg",
        "alt": "Calendar prop moment – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/12543490301651579938DSC01598-copy.jpg",
        "alt": "Vintage date tag candid – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/204881501651579938DSC01622-copy.jpg",
        "alt": "Marking the date moment – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/11811700321651579938DSC01675-copy.jpg",
        "alt": "Stylish shoot under flyover – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/1615864051651579938DSC01710-copy.jpg",
        "alt": "Romantic frame under the bridge – Wedding Photo Planet"
      }
    ],
    "content": {
      "desc4": "The pre-wedding shoot of Bhavnesh and Himashi was a truly magical and cultural event. The couple was dressed in traditional Indian attire, with Bhavnesh in a classic kurta and Himanshi in a stunning red saree and suit. The shoot took place in a picturesque outdoor location. The pre-wedding shoot was a perfect representation of the love and excitement that Bhavnesh and Himashi have for their upcoming wedding, and also their appreciation for tradition and culture. The photographs will serve as a beautiful memory of this special time in their lives and a treasure that they can look back on for years to come.",
      "heading1": "Pre Wedding Shoot at photo rachna studio",
      "desc1": "Wedding Photo Planet offers a unique pre-wedding photoshoot experience at Photo Rachna Studio. Photo Rachna Studio is one of the most popular and well-equipped photography studios in the city, providing a perfect backdrop for your pre-wedding photoshoot. The studio offers a range of indoor and outdoor settings, including a beautiful garden and a variety of props and backgrounds to choose from. Our team of professional photographers will work closely with you to create a personalized and unique experience.",
      "banner1": "/admin_image/wid/banner1110200863416521786234.jpg",
      "heading2": "Pre Wedding Photography in Delhi",
      "desc2": "Wedding Photo Planet is proud to offer a team of highly skilled and professional pre-wedding photographers in Delhi. Our photographers have extensive experience in capturing stunning and candid photographs that truly capture the essence of your pre-wedding journey. Whether you are looking for a traditional photoshoot or something more contemporary, our team will work closely with you to create a personalized and unique experience.",
      "heading3": "Pre Wedding Photography Packages Prices in Delhi",
      "desc3": "Our packages are designed to different budgets and needs, without compromising on quality. Whether you're looking for a simple and intimate photoshoot or a more elaborate and extravagant one, we have something to suit your needs. Our team of professional photographers will work closely with you to understand your vision and preferences to create a pre-wedding photoshoot that is truly unique and special. With our budget-friendly packages, you can have beautiful pre-wedding photographs that you will treasure for a lifetime without breaking the bank.",
      "banner2": "/admin_image/wid/banner1106330602116521786295.jpg"
    }
  },
  {
    "id": "66",
    "slug": "pre-wedding-photos-mamoksh-yamini",
    "category": "PRE WEDDING",
    "name": "Mamoksh & Yamini",
    "metadata": {
      "title": "Mamoksh & Yamini",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image88286927516520869911.jpg",
      "/admin_image/wid/hero_image124333636216520869962.jpg",
      "/admin_image/wid/hero_image70020754916520870023.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/2940667331650783946DSC08231 copy.jpg",
        "alt": "Travel couple vibes – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/9228482621650783947DSC08234 copy.jpg",
        "alt": "Pre-wedding holiday shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/5159123311651583451DSC08640-copy.jpg",
        "alt": "Romantic getaway frames – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/18350862531651583451DSC08662-copy.jpg",
        "alt": "Exploring together before forever – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/8876004691651583451DSC08672-copy.jpg",
        "alt": "Candid vacation love story – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/16328097561651583451DSC08674-copy-2.jpg",
        "alt": "Couple travel diaries – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/14906495881651583457DSC08716-copy.jpg",
        "alt": "Strolling new cities together – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/14963347631651583457DSC08718-copy.jpg",
        "alt": "Luggage love shots – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/9158897331651583457DSC08722-copy.jpg",
        "alt": "Matching travel outfits shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/18177691161651583457DSC08746-copy.jpg",
        "alt": "Pre-wedding travel escape – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/1972426811651583467DSC08825-copy.jpg",
        "alt": "Adventure before \"I do\" – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/10923979401651583467DSC08879-copy.jpg",
        "alt": "Couple journey moments – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/3432189901651583467DSC08904-copy-2.jpg",
        "alt": "Destination love story captured – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/13744353121651583467DSC09001-copy.jpg",
        "alt": "Romantic detour before the vows – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/8909707971651583467DSC09003-copy.jpg",
        "alt": "Walking hand in hand abroad – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/19605927791651583475DSC09012-copy.jpg",
        "alt": "Couple in ethnic wear during vacation pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/11925431861651583475DSC09046-Edit-copy.jpg",
        "alt": "Cultural destination shoot capturing travel love"
      },
      {
        "src": "/admin_image/wid/21293073031651583475DSC09051-copy.jpg",
        "alt": "Couple posing at monument during vacation shoot"
      },
      {
        "src": "/admin_image/wid/8405374661651583475DSC09053-copy.jpg",
        "alt": "Ethnic couple moment from pre-wedding trip"
      },
      {
        "src": "/admin_image/wid/11935836591651583475DSC09057-copy.jpg",
        "alt": "Exploring a heritage location together"
      },
      {
        "src": "/admin_image/wid/14132538581651583494DSC09059-copy.jpg",
        "alt": "Love story at a heritage site – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/1261125421651583494DSC09090-copy.jpg",
        "alt": "Romantic pose before the vows – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/7050802971651583494DSC09094-copy.jpg",
        "alt": "Together before forever – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/5031441191651583494DSC09114-copy.jpg",
        "alt": "Eyes locked in love – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/15474972421651583494DSC09119-copy.jpg",
        "alt": "Laughing together candidly – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/11070608121651583512DSC09186-copy.jpg",
        "alt": "Quiet love moment – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/4055810741651583512DSC09188-copy.jpg",
        "alt": "Pre-wedding hug shot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/13320838251651583512DSC09223-copy.jpg",
        "alt": "Joyful couple capture – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/14052293951651583512DSC09288-copy.jpg",
        "alt": "Playful couple pose – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/6999754291651583512DSC09304-copy.jpg",
        "alt": "Dramatic cliffside shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/19029966931651583519DSC09352-copy.jpg",
        "alt": "Flowing gown couple moment – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/5454511871651583519DSC09358-copy.jpg",
        "alt": "Windy pre-wedding frame – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/18062893341651583519DSC09383-copy.jpg",
        "alt": "Scenic sky love shot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/16360447581651583519DSC09627-copy.jpg",
        "alt": "Candid gown trail pose – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/18991351271651583519DSC09633-copy.jpg",
        "alt": "Royal Indian pre-wedding setup"
      },
      {
        "src": "/admin_image/wid/10236549151651583526DSC09834-copy.jpg",
        "alt": "Romantic dip pose with flowing red dress"
      },
      {
        "src": "/admin_image/wid/266322151651583526DSC09837-copy.jpg",
        "alt": "Dramatic red gown pre-wedding portrait – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/18585141531651583526DSC09843-copy.jpg",
        "alt": "Stylish couple moment with energy  – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/1588180241651583526DSC09855-Edit-copy.jpg",
        "alt": "Affectionate gaze pre-wedding vibe  – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/19869524111651583526DSC09862-copy.jpg",
        "alt": "Bold and elegant couple pose – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/6343922951651583531DSC09874-copy.jpg",
        "alt": "Couple in love at sunset garden – Wedding Photo Planet"
      }
    ],
    "content": {
      "desc4": "The pre-wedding shoot of Mamoksh and Yamini in Jaipur was an unforgettable and romantic event. Their chemistry and love for each other was evident in every shot, making for truly breathtaking and romantic photographs. The pre-wedding shoot was a perfect representation of the love and excitement that Mamoksh and Yamini have for their upcoming wedding, and also their appreciation for tradition and culture.",
      "heading1": "Pre Wedding Photoshoot at Jaipur",
      "desc1": "This couple’s photo shoot was done at various locations in Jaipur like Jal Mahal which is very popular among couples for its stunning architecture and picturesque setting in the middle of Man Sagar Lake. Another beautiful location for their pre-wedding shoot was Albert Hall Museum where couples take pictures in the various gardens, courtyards, and inside the halls, which provides a perfect backdrop for their pre-wedding photoshoot.",
      "banner1": "/admin_image/wid/banner1210879881416521708554.jpg",
      "heading2": "Pre-wedding photographers in Delhi",
      "desc2": "Wedding Photo Planet is a one-stop destination for all your pre-wedding photography needs in Delhi. We have a team of the best pre-wedding photographers in Delhi who are experts in capturing candid and romantic moments between the couple. Our photographers use the latest equipment and techniques to give you stunning and high-quality photographs that will last a lifetime. We understand the importance of pre-wedding photography and strive to create a personalised and unique experience for each couple.",
      "heading3": "candid and cinematography",
      "desc3": "Wedding Photo Planet is dedicated to providing the best candid photographers and cinematographers for your special day. Our team of photographers and cinematographers are experts at capturing candid moments and emotions, so you can relive your wedding day for years to come. They are also highly skilled in using the latest equipment and technology to produce stunning and high-quality images and videos.",
      "banner2": "/admin_image/wid/banner13603917116521708615.jpg"
    }
  },
  {
    "id": "67",
    "slug": "pre-wedding-photos-geshika-nikunj",
    "category": "PRE WEDDING",
    "name": "Geshika & Nikunj",
    "metadata": {
      "title": "Geshika & Nikunj",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image19136969716520866061.jpg",
      "/admin_image/wid/hero_image101799180216520865882.jpg",
      "/admin_image/wid/hero_image119219985916520865923.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/76730822916516619171N3A5547-copy.jpg",
        "alt": "Bride and groom-to-be posing amidst greenery"
      },
      {
        "src": "/admin_image/wid/132968422616516619171N3A5548-copy.jpg",
        "alt": "Candid couple moment in floral garden backdrop"
      },
      {
        "src": "/admin_image/wid/175342288616516619171N3A5568-copy.jpg",
        "alt": "Pre-wedding photo session in natural garden landscape"
      },
      {
        "src": "/admin_image/wid/67050317616516619171N3A5569-copy.jpg",
        "alt": "Charming garden shoot with bride in flowy gown"
      },
      {
        "src": "/admin_image/wid/155014144916516619171N3A5586-copy.jpg",
        "alt": "Couple enjoying serene garden moments before wedding"
      },
      {
        "src": "/admin_image/wid/131300147916516619171N3A5595-copy.jpg",
        "alt": "Elegant pre-wedding pose surrounded by nature"
      },
      {
        "src": "/admin_image/wid/46744354316516619171N3A5666-copy.jpg",
        "alt": "Tender couple moment in beautifully landscaped garden"
      },
      {
        "src": "/admin_image/wid/115489268916516619171N3A5673-copy.jpg",
        "alt": "Love captured in a blooming garden"
      },
      {
        "src": "/admin_image/wid/150654599216516619171N3A5682-copy-2.jpg",
        "alt": "Garden pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/34110783116516619171N3A5744-copy.jpg",
        "alt": "Romantic couple photo in greenery"
      },
      {
        "src": "/admin_image/wid/14073016931651661980A38I4496-copy.jpg",
        "alt": "Outdoor love shoot before wedding"
      },
      {
        "src": "/admin_image/wid/15648583641651661980A38I4523-copy.jpg",
        "alt": "Pre-wedding couple hug"
      },
      {
        "src": "/admin_image/wid/784846201651661980A38I4537-copy.jpg",
        "alt": "Bride and groom enjoying a candid shoot in a private villa"
      },
      {
        "src": "/admin_image/wid/19148108531651661980A38I4542-copy.jpg",
        "alt": "Elegant villa backdrop for couple's pre-wedding portraits"
      },
      {
        "src": "/admin_image/wid/18969625141651661980A38I4547-copy.jpg",
        "alt": "luxury villa couple shoot"
      },
      {
        "src": "/admin_image/wid/6019287601651661989A38I4562-copy.jpg",
        "alt": "private villa photography"
      },
      {
        "src": "/admin_image/wid/15438779271651661989A38I4580-copy.jpg",
        "alt": "destination villa pre-wedding"
      },
      {
        "src": "/admin_image/wid/5194714511651661989A38I4583-copy.jpg",
        "alt": "cozy villa engagement shoot"
      },
      {
        "src": "/admin_image/wid/6658847981651661989A38I4601-copy.jpg",
        "alt": "cinematic villa couple frames"
      },
      {
        "src": "/admin_image/wid/10526290131651661989A38I4613-copy.jpg",
        "alt": "rustic villa pre-wedding concept"
      },
      {
        "src": "/admin_image/wid/15432540401651661995A38I4619-copy.jpg",
        "alt": "villa terrace pre-wedding photography"
      },
      {
        "src": "/admin_image/wid/15443701351651661995A38I4622-copy.jpg",
        "alt": "indoor villa romantic shoot"
      },
      {
        "src": "/admin_image/wid/13219426541651661995A38I4625-copy.jpg",
        "alt": "intimate moments in luxurious villa"
      },
      {
        "src": "/admin_image/wid/3999319491651661995A38I4632-copy.jpg",
        "alt": "romantic villa photoshoot"
      },
      {
        "src": "/admin_image/wid/11461246761651661995A38I4670-copy.jpg",
        "alt": "villa garden couple shoot"
      },
      {
        "src": "/admin_image/wid/12983867371651662029A38I4676-copy-2.jpg",
        "alt": "elegant villa engagement session"
      },
      {
        "src": "/admin_image/wid/12736195121651662029A38I4678-copy.jpg",
        "alt": "sunset shoot at private villa"
      },
      {
        "src": "/admin_image/wid/5542915751651662029A38I4680-copy.jpg",
        "alt": "artistic villa photoshoot ideas"
      },
      {
        "src": "/admin_image/wid/4697018701651662029A38I4681-copy.jpg",
        "alt": "Couple with dried leaves - wedding photo planet"
      },
      {
        "src": "/admin_image/wid/3437746991651662065A38I4684-copy.jpg",
        "alt": "Romantic moment with leaf props at villa"
      },
      {
        "src": "/admin_image/wid/14497064391651662065A38I4687-copy.jpg",
        "alt": "Laughing couple under leaf canopy"
      },
      {
        "src": "/admin_image/wid/8079745721651662065A38I4691-copy.jpg",
        "alt": "Tossing leaves in villa garden"
      },
      {
        "src": "/admin_image/wid/13644246801651662065A38I4700-copy.jpg",
        "alt": "Close-up with leaf - wedding photo planet"
      },
      {
        "src": "/admin_image/wid/21267035991651662065A38I4702-copy.jpg",
        "alt": "Forest-themed pose with wooden wall"
      },
      {
        "src": "/admin_image/wid/1041718601651662076A38I4780-copy.jpg",
        "alt": "Candid pose with leaves by the cabin"
      },
      {
        "src": "/admin_image/wid/14779017501651662076A38I4785-copy.jpg",
        "alt": "Leaf-filled path pre-wedding frame"
      },
      {
        "src": "/admin_image/wid/13230601851651662076A38I4791-copy.jpg",
        "alt": "Autumn shoot with forest cabin"
      },
      {
        "src": "/admin_image/wid/1340678321651662159A38I4902-copy.jpg",
        "alt": "Breezy moment on wooden balcony"
      },
      {
        "src": "/admin_image/wid/10273849511651662159A38I4904-copy.jpg",
        "alt": "Sitting on cabin porch with leaves"
      },
      {
        "src": "/admin_image/wid/18821854491651662159A38I4908-copy.jpg",
        "alt": "Bride resting near wooden doorway"
      },
      {
        "src": "/admin_image/wid/2841824251651662166A38I4920-copy.jpg",
        "alt": "Cuddling on cabin steps"
      },
      {
        "src": "/admin_image/wid/8635750071651662166A38I5016-copy.jpg",
        "alt": "Romantic lakeside shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/10400052711651662166A38I5022-copy.jpg",
        "alt": "Couple by the calm lake – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/8051684441651662175A38I5043-copy.jpg",
        "alt": "Candid moment on park bench – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/5043493231651662175A38I5068-copy.jpg",
        "alt": "Holding hands near water – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/17943923701651662175A38I5102-copy.jpg",
        "alt": "Sitting near lake with nature vibes – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/21039539121651662175DJI_0010-copy.jpg",
        "alt": "Sunset glow at the lakeside – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/11163074251651662181DSC06760-2-copy.jpg",
        "alt": "Couple in love glowing under evening lights"
      },
      {
        "src": "/admin_image/wid/1884383981651662181DSC06800-copy.jpg",
        "alt": "Park bench romance – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/12711286691651662181DSC06806-copy.jpg",
        "alt": "Backlit pre-wedding pose in garden at evening"
      },
      {
        "src": "/admin_image/wid/17941050501651662193A38I5043-copy.jpg",
        "alt": "Cinematic day - light couple shoot with with casual dress"
      },
      {
        "src": "/admin_image/wid/7086087491651662193A38I5068-copy.jpg",
        "alt": "Twilight romance shoot in open park"
      },
      {
        "src": "/admin_image/wid/3045478051651662193A38I5102-copy.jpg",
        "alt": "Stylish dip pose in night park setting"
      },
      {
        "src": "/admin_image/wid/17931540981651662193DJI_0010-copy.jpg",
        "alt": "Glamorous wedding photoshoot"
      },
      {
        "src": "/admin_image/wid/814450061651662258DJI_0993-copy.jpg",
        "alt": "Dramatic flash-lit shot at lakeside grove"
      },
      {
        "src": "/admin_image/wid/9664060001651662258DSC06003-copy.jpg",
        "alt": "Romantic couple dip under night lights in park"
      },
      {
        "src": "/admin_image/wid/19022629661651662264DSC06003-copy.jpg",
        "alt": "romantic pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/15935383551651662264DSC06148-copy.jpg",
        "alt": "couple pre-wedding portraits"
      },
      {
        "src": "/admin_image/wid/8873432181651662272DSC06246-copy.jpg",
        "alt": "candid love moments"
      },
      {
        "src": "/admin_image/wid/6472558601651662272DSC06343-copy.jpg",
        "alt": "emotional pre-wedding capture"
      },
      {
        "src": "/admin_image/wid/16522603721651662278DSC06403-copy.jpg",
        "alt": "couple chemistry photography"
      },
      {
        "src": "/admin_image/wid/3358868921651662278DSC06658-copy.jpg",
        "alt": "timeless love frames"
      },
      {
        "src": "/admin_image/wid/2591045011651662283DSC06664-copy.jpg",
        "alt": "romantic photo ideas before marriage"
      },
      {
        "src": "/admin_image/wid/14424498481651662283DSC06668-copy.jpg",
        "alt": "road-side couple shoot"
      },
      {
        "src": "/admin_image/wid/14896142981651662295DSC06760-2-copy.jpg",
        "alt": "scenic outdoor pre-wedding photography"
      },
      {
        "src": "/admin_image/wid/10030891521651662295DSC06800-copy.jpg",
        "alt": "open sky romantic shoot"
      },
      {
        "src": "/admin_image/wid/3076339551651662310DSC06873-copy.jpg",
        "alt": "twirling pose pre-wedding"
      },
      {
        "src": "/admin_image/wid/14480793361651662310DSC06875-copy.jpg",
        "alt": "candid dance moment"
      },
      {
        "src": "/admin_image/wid/8793790721651662317DSC06907-copy.jpg",
        "alt": "natural outdoor setting for shoot"
      },
      {
        "src": "/admin_image/wid/2646059121651662317DSC06912-copy.jpg",
        "alt": "couple pose in motion"
      },
      {
        "src": "/admin_image/wid/7277259171651662325DSC07011-copy.jpg",
        "alt": "smiling couple interaction"
      }
    ],
    "content": {
      "desc4": "The pre-wedding shoot of Geshika and Nikunj was nothing short of a romantic dream come true. The shoot took place in an idyllic outdoor location, with the couple posing in front of lush gardens, serene lakes, and charming bridges, surrounded by nature's splendor. Their chemistry and love for each other was undeniable in every shot, making for truly breathtaking and romantic photographs. The pre-wedding shoot was a perfect representation of the love and excitement that Geshika and Nikunj have for their upcoming wedding and also their appreciation for nature and tradition.",
      "heading1": "pre-wedding photoshoot in uttarakhand",
      "desc1": "The pre-wedding shoot at Nainital, Saat Taal and Jim Corbett was nothing short of breathtaking. The couple was dressed in elegant and stylish outfits, with the beautiful landscapes of Nainital, the serene lakes of Saat Taal and the lush jungles of Jim Corbett serving as the perfect backdrop. The couple was captured in candid moments of laughter, romance and intimacy, making for truly beautiful and timeless photographs. The pre-wedding shoot was a perfect representation of the love and excitement that the couple has for their upcoming wedding, and also their appreciation for nature and adventure.",
      "banner1": "/admin_image/wid/banner1169236712716521623415.jpg",
      "heading2": "candid photography",
      "desc2": "Photographers and Videographers at Wedding Photo Planet are highly experienced in every niche of photography, including candid photography. That means our team can capture those random cherishable moments. Candid Photos add an amazing touch to your pre-wedding album, and when shot by an excellent photography team, you can relish the collection of your beautiful candid moments.",
      "heading3": "Pre Wedding Photographers in Delhi NCR",
      "desc3": "Wedding Photo Planet in Delhi provides highly skilled and best-in-class pre-wedding photographers in Delhi that can capture the beautiful moments of your life in wonderful pictures. Our team believes in providing our customers with top-notch photos and videos. Our team with the best cameras and best lighting gears with perfect photography skills gives really impressive results and adds charm to the client’s album and compilation.",
      "banner2": "/admin_image/wid/banner17362690916521623414.jpg"
    }
  },
  {
    "id": "68",
    "slug": "pre-wedding-photos-aman-damini",
    "category": "PRE WEDDING",
    "name": "Aman & Damini",
    "metadata": {
      "title": "Aman & Damini",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image60687819216520843561.jpg",
      "/admin_image/wid/hero_image95835875816520843652.jpg",
      "/admin_image/wid/hero_image83003762416520843723.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/12848196821650869600DJI_0696-copy.jpg",
        "alt": "unscripted pre-wedding moments"
      },
      {
        "src": "/admin_image/wid/4920119016516633071N3A5547-copy.jpg",
        "alt": "movie-style couple shoot"
      },
      {
        "src": "/admin_image/wid/10166886361651663320DSC00009.jpg",
        "alt": "pre-wedding shoot in exotic location"
      },
      {
        "src": "/admin_image/wid/20503281421651663320DSC00056.jpg",
        "alt": "travel-themed pre-wedding story"
      },
      {
        "src": "/admin_image/wid/3189668491651663320DSC00125.jpg",
        "alt": "destination couple portraits"
      },
      {
        "src": "/admin_image/wid/8039206621651663325DSC00154.jpg",
        "alt": "graceful and timeless looks"
      },
      {
        "src": "/admin_image/wid/13865137451651663325DSC05350-Edit-Edit.jpg",
        "alt": "soulful stare pose in mountains"
      },
      {
        "src": "/admin_image/wid/9569213481651663325DSC05362-Edit-copy.jpg",
        "alt": "intense couple moment in nature"
      },
      {
        "src": "/admin_image/wid/13941799891651663330DSC07415-Edit.jpg",
        "alt": "love-filled eye contact"
      },
      {
        "src": "/admin_image/wid/6947259231651663336DSC07430-Edit.jpg",
        "alt": "Dreamy hilltop love stare – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/17886055071651663336DSC07444-Edit.jpg",
        "alt": "Heartfelt Mountain Gaze – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/17159876621651663336DSC07487-Edit.jpg",
        "alt": "Couple Lost in Each Other's Eyes – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/11624949881651663336DSC07525-copy.jpg",
        "alt": "Passionate Gaze Under Open Skies – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/17615086891651663343DSC07535-Edit.jpg",
        "alt": "Mountain pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/14221368231651663343DSC07541-copy.jpg",
        "alt": "Mountain couple photoshoot"
      },
      {
        "src": "/admin_image/wid/1874360101651663343DSC07543-copy.jpg",
        "alt": "Pre-wedding photography in hills"
      },
      {
        "src": "/admin_image/wid/21187589621651663348DSC07691-Edit.jpg",
        "alt": "Romantic shoot in mountains"
      },
      {
        "src": "/admin_image/wid/820068521651663348DSC07714-Edit.jpg",
        "alt": "Cinematic couple shoot in the hills"
      },
      {
        "src": "/admin_image/wid/10897225191651663354DSC07721-2-copy.jpg",
        "alt": "Scenic mountain location for pre-wedding photos"
      },
      {
        "src": "/admin_image/wid/16966762801651663354DSC07746-Edit.jpg",
        "alt": "Pre-wedding romance captured in the hills"
      },
      {
        "src": "/admin_image/wid/1543467241651663354DSC07755-copy.jpg",
        "alt": "Scenic mountain love shoot"
      },
      {
        "src": "/admin_image/wid/21044221231651663354DSC07764-2-copy.jpg",
        "alt": "Couple embracing with mountain backdrop"
      },
      {
        "src": "/admin_image/wid/1281699801651663360DSC07775-copy.jpg",
        "alt": "Soulful stare amidst nature"
      },
      {
        "src": "/admin_image/wid/18744527911651663360DSC07777-copy.jpg",
        "alt": "Mountain couple shoot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/14638378131651663360DSC07782-copy.jpg",
        "alt": "Romantic hilltop shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/19783181731651663368DSC07810-copy.jpg",
        "alt": "Pre-wedding in nature by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/1536180141651663368DSC07857-Edit.jpg",
        "alt": "Scenic love shot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/18539010791651663375DSC07867-copy.jpg",
        "alt": "Candid mountain moments – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/19134373501651663375DSC07912-copy.jpg",
        "alt": "Hill romance captured by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/20236382851651663375DSC07926-copy-2.jpg",
        "alt": "Dreamy couple shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/6789274481651663382DSC07938-copy.jpg",
        "alt": "Nature pre-wedding vibe by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/7234009501651663382DSC07942-copy.jpg",
        "alt": "Soulful stare in hills – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/12158437081651663382DSC07946-copy.jpg",
        "alt": "Wedding Photo Planet – mountain shoot magic"
      },
      {
        "src": "/admin_image/wid/8896232471651663388DSC07963-copy-2.jpg",
        "alt": "Couple shoot in mountains – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/19444438891651663388DSC07979-Edit.jpg",
        "alt": "Mountain romance captured by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/17122111001651663388DSC08006-copy.jpg",
        "alt": "Hilltop pre-wedding pose – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/19156957721651663891DSC08345-copy.jpg",
        "alt": "Riverside couple shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/1954129921651663891DSC08436-copy.jpg",
        "alt": "Beachside couple shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/9848473511651663891DSC08495-copy.jpg",
        "alt": "Sunset romance at beach – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/7354407491651663891DSC08503-copy.jpg",
        "alt": "Ocean breeze moment – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/8213090011651663891DSC08604-copy.jpg",
        "alt": "Couple walk on beach – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/19709033471651663901DSC08072-copy.jpg",
        "alt": "Beach pre-wedding bliss – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/14018587011651663901DSC08076-copy.jpg",
        "alt": "Couple sitting by riverside – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/10330833391651663901DSC08097-copy.jpg",
        "alt": "Riverside love moment – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/20691509541651663901DSC08109-copy.jpg",
        "alt": "Sitting by the stream – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/10660039341651663907DSC08616-copy.jpg",
        "alt": "Nature-side romance – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/15313895311651663907DSC09029-copy.jpg",
        "alt": "Couple walking along riverbank – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/21121181621651663907DSC09086-copy.jpg",
        "alt": "Hand-in-hand riverside walk – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/9523174971651663996DSC09139-copy.jpg",
        "alt": "Romantic riverbank stroll – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/13060819581651663996DSC09194-Edit.jpg",
        "alt": "Pre-wedding walk near river – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/18097332751651664009DSC09210-Edit.jpg",
        "alt": "Scenic riverside walk – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/393427471651664009DSC09269-Edit.jpg",
        "alt": "Pre-wedding still by the river – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/14500280521651664009DSC09349-Edit.jpg",
        "alt": "Sunset walk by riverside – Wedding Photo Planet"
      }
    ],
    "content": {
      "desc4": "The pre-wedding shoot of Aman and Damini was a sophisticated and stylish event. The couple was dressed in modern and elegant outfits, with Aman in a sleek suit and Damini in a chic, form-fitting dress. Their chemistry and love for each other was evident in every shot, making for truly beautiful and stylish photographs. The pre-wedding shoot was a perfect representation of the love and excitement that Aman and Damini have for their upcoming wedding, and also their sense of style and sophistication. The photographs will serve as a beautiful memory of this special time in their lives.",
      "heading1": "Destination Pre-Wedding Photoshoot",
      "desc1": "This lovely destination where we shot this wonderful couple is the beautiful land of sagas, Rishikesh in Uttarakhand. The shoot was done at various destinations in Rishikesh, such as Laxman Jhula, Shivpuri, Patna waterfall, and more. This magnificent location made the collection as beautiful as the pictures. We assure our client to give top-notch quality at any destination desired by the client.",
      "banner1": "/admin_image/wid/banner172408648316520992614.jpg",
      "heading2": "Best Pre wedding Photographers Near You",
      "desc2": "Our team of videographers and cinematographers is proficient in taking the best candids and wonderful shots that will add wonderful charm to your album and compilation. We use cameras, lighting, and sound equipment to record and produce high-quality video content. Our team focuses on capturing beautiful and pure moments of love and emotions",
      "heading3": "Best Pre-Wedding Photographers and Videographers in Delhi NCR",
      "desc3": "Wedding Photo Planet, Delhi NCR provides you with an expert and skilled team of photographers and videographers in Delhi NCR and premium quality services at a very reasonable price. To know more, feel free to contact us from the platforms given below",
      "banner2": "/admin_image/wid/banner1152827000216520993835.jpg"
    }
  },
  {
    "id": "69",
    "slug": "pre-wedding-photos-parul-raghav",
    "category": "PRE WEDDING",
    "name": "Raghav & Parul",
    "metadata": {
      "title": "Raghav & Parul",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image97762066816520839131.jpg",
      "/admin_image/wid/hero_image127907012316520839182.jpg",
      "/admin_image/wid/hero_image149430300116520839223.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/8124061231650870232(0)a.jpg",
        "alt": "Sunset couple silhouette – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/15680512121650870232(0)b.jpg",
        "alt": "Golden hour romance – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/11146007151651573126(0).jpg",
        "alt": "Love in dark light – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/5233827191651573126(0)a.jpg",
        "alt": "Evening pre-wedding shot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/17685689631651573126(0)b.jpg",
        "alt": "Dreamy sunset moment – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/12956495791651573126(0)e.jpg",
        "alt": "Traditional couple pose – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/21145200941651573126(0)f.jpg",
        "alt": "Ethnic pre-wedding shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/1017469351651573139(0)h.jpg",
        "alt": "Cultural love story – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/4597357861651573139(0)i.jpg",
        "alt": "Heritage location shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/18614918871651573139(0)l.jpg",
        "alt": "Drone couple shot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/13482383831651573139(1).jpg",
        "alt": "Candid couple laugh – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/19677360551651573139(1)b.jpg",
        "alt": "Natural love moment – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/17004290221651573178(1)d.jpg",
        "alt": "Real emotions captured – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/14484185781651573178(1)e.jpg",
        "alt": "Romantic couple pose – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/2354922071651573178(1)f.jpg",
        "alt": "Couple candid moment – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/4442163141651573187(1)g.jpg",
        "alt": "Hand-in-hand shot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/9469063411651573187(2).jpg",
        "alt": "Together forever frame – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/21154860681651573187(3)d.jpg",
        "alt": "Couple in love – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/2389110881651573255(3)e.jpg",
        "alt": "Couple close-up – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/16763988841651573263(3)f.jpg",
        "alt": "Playful pre-wedding moment – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/15136030811651573273(6).jpg",
        "alt": "Couple pointing at horizon – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/16368716471651573289(6).jpg",
        "alt": "Romantic hug shot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/3471682071651573296(10)a.jpg",
        "alt": "Hugging by the sunset – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/19761643341651573305(10)b.jpg",
        "alt": "Couple sitting pose – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/12077744801651573305(10)c.jpg",
        "alt": "Sunset romance at beach"
      },
      {
        "src": "/admin_image/wid/4443047121651573305(10)d.jpg",
        "alt": "Riding together – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/16079997441651573795(10)e.jpg",
        "alt": "One looking, one gazing – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/16450088651651573795(10)f.jpg",
        "alt": "Bride leaning on groom – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/16714508631651573795(10)h.jpg",
        "alt": "Lifting pose – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/18931796261651573809(13)b.jpg",
        "alt": "Campfire cuddle moment – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/10410854011651573809(13)c.jpg",
        "alt": "Royal fort couple pose – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/12637557201651573809(13)d.jpg",
        "alt": "Side hug walk – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/10128638481651573809(13)e.jpg",
        "alt": "Side-by-side pose – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/13442495781651573855(13)g.jpg",
        "alt": "Cozy night shot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/14228273921651573855(13)h.jpg",
        "alt": "Firelit couple silhouette – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/17604934161651573855(13)i.jpg",
        "alt": "night shot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/6370514301651573855(18).jpg",
        "alt": "Sunset at fort wall – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/17835807541651573865(19).jpg",
        "alt": "Couple near fort gate – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/1983976361651573865(20).jpg",
        "alt": "Romantic fort silhouette – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/11215123891651573865(38).jpg",
        "alt": "Campfire storytelling vibe – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/117886091651573915(39).jpg",
        "alt": "Warmth of love and flames – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/2023669301651573915(41).jpg",
        "alt": "Love around campfire – Wedding Photo Planet"
      }
    ],
    "content": {
      "desc4": "The pre-wedding shoot of Raghav and Parul was a fun and adventurous event. The couple was dressed in casual yet stylish outfits. Their chemistry and love for each other was evident in every shot, making for truly beautiful and candid photographs. The pre-wedding shoot was a perfect representation of the love and excitement that Raghav and Parul have for their upcoming wedding and also their adventurous personalities.",
      "heading1": "Pre Wedding Shoot at Alwar",
      "desc1": "Alwar is known for its royal palaces and beautiful landscape and Indian heritage. This couple chose Alwar as the right destination for their pre-wedding shoot. Their shoot was done at various locations in Alwar like, Bala Quila. The sunset point of the fort and beautiful landscape gave their photos a majestic touch. Chilled nights at Alwar were great for the candids of the couple and came out with really impressive shots.",
      "banner1": "/admin_image/wid/banner1204692970816520949565.jpg",
      "heading2": "Pre Wedding Shoot in Delhi",
      "desc2": "Wedding Photo Planet captures romantic and intimate moments between the couple, and makes every moment memorable before the wedding day. We provide the best team of Photographers and videographers for the pre-wedding shoot in Delhi. With highly skilled cameramen and editors, we provide you with the best photos and videos for the most important event of your life.",
      "heading3": "Pre Wedding Photographers in Delhi",
      "desc3": "We believe in excellence and the idea of quality over quantity so that we can give the clients the best of the best output. Our team has a strong understanding of lighting, composition, and posing to create beautiful and romantic images. Additionally, the team is able to connect with the couple and understand their unique personalities and preferences can help to create a more personalised and intimate experience for the couple.",
      "banner2": "/admin_image/wid/banner1127161156216520949564.jpg"
    }
  },
  {
    "id": "70",
    "slug": "pre-wedding-photos-rohit-bhavya",
    "category": "PRE WEDDING",
    "name": "Rohit & Bhavya",
    "metadata": {
      "title": "Rohit & Bhavya",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image86653113816520825113.jpg",
      "/admin_image/wid/hero_image31017247416520825152.jpg",
      "/admin_image/wid/hero_image95044863516520825191.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/33440445216515717679V3A3607.jpg",
        "alt": "Pre-wedding shoot in Delhi – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/3799014621651571767A38I9806-copy.jpg",
        "alt": "Pre-wedding shoot in Manali mountains – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/18558462671651571767A38I9880-copy.jpg",
        "alt": "Royal couple shoot in Jodhpur – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/5856401891651571767A38I9972-copy.jpg",
        "alt": "Best outdoor shoot spots in Jaipur"
      },
      {
        "src": "/admin_image/wid/16658796131651571767A38I9984-copy.jpg",
        "alt": "Cinematic wedding shoot in South Delhi"
      },
      {
        "src": "/admin_image/wid/944151151651571775A38I9995-copy.jpg",
        "alt": "Filmy couple moment – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/13670922101651571775DSC00312-copy.jpg",
        "alt": "Couple shot at destination – delhi NCR"
      },
      {
        "src": "/admin_image/wid/19100663631651571775WPP00592-copy.jpg",
        "alt": "Traditional attire pose – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/8162233561651571775WPP00600-copy.jpg",
        "alt": "Ethnic couple portrait – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/10099359751651571775WPP00623-copy-Album-Cover.jpg",
        "alt": "Laughing couple pre-wedding photo"
      },
      {
        "src": "/admin_image/wid/13617319241651571793WPP00637-copy.jpg",
        "alt": "Outdoor pre-wedding photo session"
      },
      {
        "src": "/admin_image/wid/7864247791651571793WPP00651-copy.jpg",
        "alt": "Cinematic pre-wedding photo – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/8337031691651571793WPP00654-copy.jpg",
        "alt": "Beach pre-wedding photo – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/1468871981651571793WPP00674-copy.jpg",
        "alt": "Pre-wedding photo at royal location"
      },
      {
        "src": "/admin_image/wid/13697299761651571793WPP00714-copy.jpg",
        "alt": "Traditional pre-wedding photo – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/13252347791651571806WPP00787-copy.jpg",
        "alt": "Ethnic outfit pre-wedding photo"
      },
      {
        "src": "/admin_image/wid/338404321651571806WPP00828-copy.jpg",
        "alt": "Heritage-style pre-wedding portrait"
      },
      {
        "src": "/admin_image/wid/8321723081651571806WPP00850-copy.jpg",
        "alt": "Side pose bridal pre-wedding photo"
      },
      {
        "src": "/admin_image/wid/14013249181651571806WPP00865-copy.jpg",
        "alt": "Romantic road shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/4572958311651571818WPP00873-copy.jpg",
        "alt": "Holding hands on highway – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/6237285081651571818WPP00929-copy.jpg",
        "alt": "Walking away shot on road – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/14195950481651571818WPP00938-copy.jpg",
        "alt": "Mountain wedding shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/13882883371651571818WPP01153-copy.jpg",
        "alt": "Side-by-side walk pose – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/15046694791651571818WPP01161-copy.jpg",
        "alt": "Sitting together pose – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/19296683141651571834WPP01202-copy.jpg",
        "alt": "Natural pre-wedding photo – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/21383531991651571834WPP01254-copy.jpg",
        "alt": "Unscripted pre-wedding shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/4429309181651571834WPP01280-copy.jpg",
        "alt": "Authentic couple moment – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/13155798291651571834WPP01288-copy.jpg",
        "alt": "Spontaneous pre-wedding photo – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/14938460381651571834WPP01310-copy-2.jpg",
        "alt": "Photojournalistic pre-wedding style – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/682745811651571849WPP01320-copy.jpg",
        "alt": "Real moment pre-wedding shot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/10148262371651571849WPP01420-copy.jpg",
        "alt": "Honest couple photo – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/6902150551651571849WPP01453-copy.jpg",
        "alt": "Fun and free pre-wedding shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/1898453501651571849WPP01492-copy.jpg",
        "alt": "Storytelling style photo – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/119694571651571860WPP01529-copy.jpg",
        "alt": "Real-life love shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/18742548611651571860WPP01570-copy.jpg",
        "alt": "Relaxed pre-wedding session – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/16519652471651571860WPP01682-copy-3.jpg",
        "alt": "Caught in the moment photo – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/20643636021651571860WPP01698-copy-2.jpg",
        "alt": "Unique and creative pre-wedding photo – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/17094795001651571860WPP01735-copy.jpg",
        "alt": "Modern love shoot – Wedding Photo Planet"
      }
    ],
    "content": {
      "desc4": "The pre-wedding shoot of Rohit and Bhavya was an elegant and romantic affair. Their chemistry and love for each other shone through in every shot, making for truly stunning and timeless photographs. The shoot was a perfect representation of the love and excitement that Rohit and Bhavya have for their upcoming wedding, and the photographs will serve as a beautiful memory of this special time in their lives.",
      "heading1": "Pre Wedding Shoot at Una",
      "desc1": "This wonderful couple chose Una, Himachal Pradesh as the right destination for their pre-wedding shoot. This beautiful landscape gave a charming effect to the shoot. Our wonderful team with amazing talent made this couple’s shoot memorable and picture-perfect.",
      "banner1": "/admin_image/wid/banner1165839065516520930505.jpg",
      "heading2": "Pre Wedding Photographers in Delhi",
      "desc2": "At Wedding photo planet, our excellent team of photographers delivers a collection of charming photos. We use the latest technology and the trendiest gears and cameras that are top-notch and brilliant in terms of quality. With highly skilled photographers we can fulfill all your wishes.",
      "heading3": "Pre Wedding Photography Packages Prices in Delhi",
      "desc3": "Wedding Photo Planet allows you to have a majestic collection of memories at a very reasonable and competitive price. With such a talented team, we provide you with various packages that will completely suit your pocket and will not make you compromise anything from your budget. To know more about the packages that you can get, feel free to contact us through any platforms that are given below.",
      "banner2": "/admin_image/wid/banner1137643779316520930504.jpg"
    }
  },
  {
    "id": "71",
    "slug": "wedding-photos-rohit-bhavya",
    "category": "WEDDING",
    "name": "Rohit & Bhavya",
    "metadata": {
      "title": "Rohit & Bhavya",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image159687674716513989231.jpg",
      "/admin_image/wid/hero_image163725007516513994932.jpg",
      "/admin_image/wid/hero_image209407157816513990263.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/2053111278165095737501.jpg",
        "alt": "Best wedding photographers in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/197040783116512153941N3A0008.jpg",
        "alt": "Candid wedding photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/142293275016512153991N3A0415.jpg",
        "alt": "Top wedding photographers near me"
      },
      {
        "src": "/admin_image/wid/90761956616512153991N3A0526.jpg",
        "alt": "Pre-wedding shoot Delhi NCR"
      },
      {
        "src": "/admin_image/wid/132174253316512153991N3A0540.jpg",
        "alt": "Pre-wedding shoot in Jaipur"
      },
      {
        "src": "/admin_image/wid/85154643116512153991N3A0547.jpg",
        "alt": "Pre-wedding shoot Rishikesh"
      },
      {
        "src": "/admin_image/wid/62150031516512154081N3A0551.jpg",
        "alt": "Cinematic videographer Delhi NCR"
      },
      {
        "src": "/admin_image/wid/35365135516512154081N3A0552.jpg",
        "alt": "Affordable pre-wedding photography price"
      },
      {
        "src": "/admin_image/wid/9483484516512154081N3A0736.jpg",
        "alt": "Candid photographer for wedding"
      },
      {
        "src": "/admin_image/wid/35375188116512154081N3A0751.jpg",
        "alt": "Best pre-wedding photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/105843640316512154151N3A0755.jpg",
        "alt": "Delhi wedding photographers near me"
      },
      {
        "src": "/admin_image/wid/78905271816512154151N3A0769.jpg",
        "alt": "Photographer for pre-shoot wedding"
      },
      {
        "src": "/admin_image/wid/85650858116512154151N3A0779.jpg",
        "alt": "Traditional"
      },
      {
        "src": "/admin_image/wid/183387548116512154151N3A0796.jpg",
        "alt": "Best candid wedding photographers Delhi"
      },
      {
        "src": "/admin_image/wid/132940420516512154301N3A0812.jpg",
        "alt": "Creative cinematic wedding videographer"
      },
      {
        "src": "/admin_image/wid/176572467416512154301N3A0844.jpg",
        "alt": "Pre-wedding shoot with couple poses Delhi"
      },
      {
        "src": "/admin_image/wid/109019584616512154301N3A8365.jpg",
        "alt": "Mehndi function shoot – candid photography"
      },
      {
        "src": "/admin_image/wid/42296262416512154351N3A8383.jpg",
        "alt": "Solo bride pre-wedding shoot in Jaipur"
      },
      {
        "src": "/admin_image/wid/120333962116512154351N3A8388.jpg",
        "alt": "Couple shoot in Rishikesh – wedding photographers"
      },
      {
        "src": "/admin_image/wid/134920053616512154351N3A8397.jpg",
        "alt": "Professional photographer for wedding Delhi NCR"
      },
      {
        "src": "/admin_image/wid/50772285216512154411N3A8402.jpg",
        "alt": "Couple pre-wedding shoot in Delhi"
      },
      {
        "src": "/admin_image/wid/56784944916512154411N3A8408.jpg",
        "alt": "Candid couple photo shoot Delhi NCR"
      },
      {
        "src": "/admin_image/wid/188069763816512154411N3A8416.jpg",
        "alt": "Best candid pre-wedding photographers in Jaipur"
      },
      {
        "src": "/admin_image/wid/109552648516512154411N3A8422.jpg",
        "alt": "Romantic pre-wedding couple shoot Delhi"
      },
      {
        "src": "/admin_image/wid/128944697916512154481N3A8459.jpg",
        "alt": "Outdoor couple shoot – candid photography"
      },
      {
        "src": "/admin_image/wid/102895847316512154481N3A8460.jpg",
        "alt": "Pre-wedding couple portrait – candid style"
      },
      {
        "src": "/admin_image/wid/108967463516512154481N3A8478.jpg",
        "alt": "Couple shoot with natural poses Delhi NCR"
      },
      {
        "src": "/admin_image/wid/115254145916512154541N3A8485.jpg",
        "alt": "Candid couple photos near Delhi"
      },
      {
        "src": "/admin_image/wid/114506890416512154541N3A8490.jpg",
        "alt": "Pre-wedding couple shoot with props"
      },
      {
        "src": "/admin_image/wid/12863500916512154541N3A8509.jpg",
        "alt": "Cinematic couple video shoot Delhi NCR"
      },
      {
        "src": "/admin_image/wid/73387141516512154611N3A8553.jpg",
        "alt": "Best couple shoot photographer in Delhi"
      },
      {
        "src": "/admin_image/wid/36184035216512154611N3A8557.jpg",
        "alt": "Couple pre-wedding road shot – candid style"
      },
      {
        "src": "/admin_image/wid/80593818016512154611N3A8581.jpg",
        "alt": "Couple hugging shot – candid pre-wedding"
      },
      {
        "src": "/admin_image/wid/135732284416512154611N3A8597.jpg",
        "alt": "City street pre-wedding photo shoot"
      },
      {
        "src": "/admin_image/wid/21032538816512154691N3A8636.jpg",
        "alt": "Candid couple shoot in urban setting"
      },
      {
        "src": "/admin_image/wid/147498458216512154691N3A8650.jpg",
        "alt": "Rooftop pre-wedding couple portrait"
      },
      {
        "src": "/admin_image/wid/158966743516512154691N3A8661.jpg",
        "alt": "Groom lifting bride in open field"
      },
      {
        "src": "/admin_image/wid/120849243716512154691N3A8698.jpg",
        "alt": "Groom spinning bride with joy"
      },
      {
        "src": "/admin_image/wid/21865572716512154691N3A8712.jpg",
        "alt": "Couple walking hand in hand on road"
      },
      {
        "src": "/admin_image/wid/151161920616512154691N3A8728.jpg",
        "alt": "Bride twirling in flowy dress"
      },
      {
        "src": "/admin_image/wid/155923858416512155111N3A8733.jpg",
        "alt": "Bride sitting gracefully on vintage chair"
      },
      {
        "src": "/admin_image/wid/44513071716512155111N3A8738.jpg",
        "alt": "Couple pose on chair in field"
      },
      {
        "src": "/admin_image/wid/74469123916512155111N3A8746.jpg",
        "alt": "Romantic couple sitting on chair in meadow"
      },
      {
        "src": "/admin_image/wid/131411290216512155111N3A8751.jpg",
        "alt": "Couple holding hands on rustic chair"
      },
      {
        "src": "/admin_image/wid/100958946716512155111N3A8934.jpg",
        "alt": "Pre-wedding chair pose under sky"
      },
      {
        "src": "/admin_image/wid/38793215516512155211N3A8951.jpg",
        "alt": "Wedding photography"
      },
      {
        "src": "/admin_image/wid/157068574516512155211N3A8992.jpg",
        "alt": "Candid wedding photography"
      },
      {
        "src": "/admin_image/wid/141774268616512155211N3A9008.jpg",
        "alt": "Traditional wedding photography"
      },
      {
        "src": "/admin_image/wid/194840382116512155211N3A9031.jpg",
        "alt": "Destination wedding photographer"
      },
      {
        "src": "/admin_image/wid/69755365516512155211N3A9105.jpg",
        "alt": "Couple wedding photoshoot"
      },
      {
        "src": "/admin_image/wid/23580017316512155291N3A9115.jpg",
        "alt": "Sangeet night photographer"
      },
      {
        "src": "/admin_image/wid/27140242316512155291N3A9158.jpg",
        "alt": "Cinematic wedding videography"
      },
      {
        "src": "/admin_image/wid/46755459416512155291N3A9179.jpg",
        "alt": "Drone wedding videographer"
      },
      {
        "src": "/admin_image/wid/108030326316512155291N3A9228.jpg",
        "alt": "Wedding highlight photographer"
      },
      {
        "src": "/admin_image/wid/153884981816512155291N3A9370.jpg",
        "alt": "Emotional wedding film"
      },
      {
        "src": "/admin_image/wid/167671900016512155381N3A9516.jpg",
        "alt": "Golden hour wedding photos"
      },
      {
        "src": "/admin_image/wid/118655333516512155381N3A9592.jpg",
        "alt": "Bride and groom on wedding stage"
      },
      {
        "src": "/admin_image/wid/103778467216512155381N3A9614.jpg",
        "alt": "Candid reception stage photo"
      },
      {
        "src": "/admin_image/wid/327308566165121553807.jpg",
        "alt": "Couple posing on decorated stage"
      },
      {
        "src": "/admin_image/wid/1464731712165121553808.jpg",
        "alt": "Bride smiling on stage with groom"
      },
      {
        "src": "/admin_image/wid/17903064281651215549A38I7241.jpg",
        "alt": "Bridal solo portrait"
      },
      {
        "src": "/admin_image/wid/7911002011651215549A38I7322.jpg",
        "alt": "Romantic couple pose after wedding"
      },
      {
        "src": "/admin_image/wid/52046241651215549A38I7332.jpg",
        "alt": "Elegant wedding stage photography"
      },
      {
        "src": "/admin_image/wid/15919087971651215549DC5A8867.jpg",
        "alt": "Wedding stage entry couple photo"
      },
      {
        "src": "/admin_image/wid/10407471621651215549DSC03731.jpg",
        "alt": "Bride in traditional attire"
      },
      {
        "src": "/admin_image/wid/13904534701651215555DSC03753.jpg",
        "alt": "Bride getting ready"
      },
      {
        "src": "/admin_image/wid/11790569951651215555DSC03794.jpg",
        "alt": "Bride twirling in lehenga"
      },
      {
        "src": "/admin_image/wid/7891949031651215555DSC03838.jpg",
        "alt": "Bridal lehenga close-up"
      },
      {
        "src": "/admin_image/wid/18900985001651215555DSC03932.jpg",
        "alt": "Emotional bride candid"
      },
      {
        "src": "/admin_image/wid/3393609341651215555DSC03940.jpg",
        "alt": "Royal bridal look"
      },
      {
        "src": "/admin_image/wid/2251062281651215562DSC04152.jpg",
        "alt": "Side profile bridal pose"
      },
      {
        "src": "/admin_image/wid/19476927151651215562DSC04245.jpg",
        "alt": "Couple enjoying a quiet moment together"
      },
      {
        "src": "/admin_image/wid/886171251651215562DSC04249.jpg",
        "alt": "Couple gazing into each other’s eyes"
      },
      {
        "src": "/admin_image/wid/15968241701651215562DSC04255.jpg",
        "alt": "Groom holding bride’s hand gently"
      },
      {
        "src": "/admin_image/wid/20747905211651215562DSC04264.jpg",
        "alt": "Candid wedding moments – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/3715546071651215570DSC04272.jpg",
        "alt": "Luxury wedding shoots by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/6034777881651215570DSC04282.jpg",
        "alt": "Pre-wedding shoot experts – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/9635733611651215570DSC04288.jpg",
        "alt": "Bride with flower jewelry"
      },
      {
        "src": "/admin_image/wid/181625251651215570DSC04300.jpg",
        "alt": "Artistic wedding photo edits – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/1927894361651215570DSC04305.jpg",
        "alt": "Iconic wedding memories – Wedding Photo Planet"
      }
    ],
    "content": {
      "desc4": "Candid Photographer",
      "heading1": "Best Wedding photographer",
      "desc1": "Candid & Cinematic Photographer",
      "banner1": "/admin_image/wid/banner1117035662216509573751N3A0755.jpg",
      "heading2": "Candid & Cinematographer in Delhi",
      "desc2": "Candid & Cinematographer",
      "heading3": "Wedding photographer in Delhi",
      "desc3": "Candid Wedding Photography",
      "banner2": "/admin_image/wid/banner153388609116509573751N3A0736.jpg"
    }
  },
  {
    "id": "72",
    "slug": "wedding-photos-rachita-aryan",
    "category": "WEDDING",
    "name": "Rachita & Aryan",
    "metadata": {
      "title": "Rachita & Aryan",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image152344316016513074301.jpg",
      "/admin_image/wid/hero_image186695688416513075742.jpg",
      "/admin_image/wid/hero_image45138342316513162853.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/14447788861651047969(0).jpg",
        "alt": "Wedding photography"
      },
      {
        "src": "/admin_image/wid/13378891271651215768(1).jpg",
        "alt": "Wedding videography"
      },
      {
        "src": "/admin_image/wid/13585511011651215768(2).jpg",
        "alt": "Candid wedding photography"
      },
      {
        "src": "/admin_image/wid/14341867141651215768(3).jpg",
        "alt": "Photo and video coverage"
      },
      {
        "src": "/admin_image/wid/2174711901651215768(4).jpg",
        "alt": "Pre-wedding photoshoot"
      },
      {
        "src": "/admin_image/wid/17042587231651215774(5).jpg",
        "alt": "Pre-wedding shoot price"
      },
      {
        "src": "/admin_image/wid/17582153661651215774(6).jpg",
        "alt": "Best pre-wedding photographers"
      },
      {
        "src": "/admin_image/wid/9547488851651215774(7).jpg",
        "alt": "Romantic pre-wedding photography"
      },
      {
        "src": "/admin_image/wid/19868419461651215774(33).jpg",
        "alt": "Outdoor pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/13038872781651215774(34).jpg",
        "alt": "Creative pre-wedding ideas"
      },
      {
        "src": "/admin_image/wid/7774180941651215827(35).jpg",
        "alt": "Candid pre-wedding moments"
      },
      {
        "src": "/admin_image/wid/10428766271651215827(36).jpg",
        "alt": "Couple pre-wedding portraits"
      },
      {
        "src": "/admin_image/wid/11567011401651215827(37).jpg",
        "alt": "Pre-wedding shoot with props"
      },
      {
        "src": "/admin_image/wid/12961632121651215842(38).jpg",
        "alt": "Walking couple pose"
      },
      {
        "src": "/admin_image/wid/20789689401651215842(39).jpg",
        "alt": "Pre-wedding shoot in Jaipur"
      },
      {
        "src": "/admin_image/wid/20049418241651215847(40).jpg",
        "alt": "Pre-wedding shoot in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/11115318131651215847(41).jpg",
        "alt": "Fort pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/16312062411651215852(42).jpg",
        "alt": "Pre wedding shoot"
      },
      {
        "src": "/admin_image/wid/19452091551651215852(43).jpg",
        "alt": "Pre wedding photography"
      },
      {
        "src": "/admin_image/wid/13140692721651215852(44).jpg",
        "alt": "Candid pre wedding"
      },
      {
        "src": "/admin_image/wid/17619543011651215979(45).jpg",
        "alt": "Candid pre wedding"
      },
      {
        "src": "/admin_image/wid/15204246271651215982(52).jpg",
        "alt": "Romantic couple shoot"
      },
      {
        "src": "/admin_image/wid/12908105621651215989(53).jpg",
        "alt": "Destination pre wedding"
      },
      {
        "src": "/admin_image/wid/20263857241651216004(54).jpg",
        "alt": "Cinematic pre shoot"
      },
      {
        "src": "/admin_image/wid/19238554021651216004(55).jpg",
        "alt": "Outdoor couple shoot"
      },
      {
        "src": "/admin_image/wid/8551410171651216004(56).jpg",
        "alt": "Pre shoot wedding"
      },
      {
        "src": "/admin_image/wid/13204485281651216028(72).jpg",
        "alt": "Creative couple shoot"
      },
      {
        "src": "/admin_image/wid/9574149341651216028(73).jpg",
        "alt": "Pre wedding videography - near me"
      },
      {
        "src": "/admin_image/wid/21081291421651216028(74).jpg",
        "alt": "Affordable pre shoot"
      },
      {
        "src": "/admin_image/wid/21089060611651216028(75).jpg",
        "alt": "Pre wedding poses"
      },
      {
        "src": "/admin_image/wid/17260730521651216043(76).jpg",
        "alt": "Best pre wedding"
      },
      {
        "src": "/admin_image/wid/20136548971651216043(77).jpg",
        "alt": "Couple shoot ideas"
      },
      {
        "src": "/admin_image/wid/11803507991651216043(78).jpg",
        "alt": "Pre wedding location"
      },
      {
        "src": "/admin_image/wid/2750456941651216121(80).jpg",
        "alt": "Delhi couple shoot"
      },
      {
        "src": "/admin_image/wid/18787638591651216126(82).jpg",
        "alt": "Jaipur pre shoot"
      },
      {
        "src": "/admin_image/wid/18422060811651216132(84).jpg",
        "alt": "Rishikesh photo shoot"
      },
      {
        "src": "/admin_image/wid/10040773871651216132(85).jpg",
        "alt": "Luxury couple shoot"
      },
      {
        "src": "/admin_image/wid/3614540861651216142(91).jpg",
        "alt": "Indian couple photography"
      },
      {
        "src": "/admin_image/wid/11666853771651216142(92).jpg",
        "alt": "Best wedding photographer"
      },
      {
        "src": "/admin_image/wid/16745323091651216142(93).jpg",
        "alt": "Wedding photography nearme"
      },
      {
        "src": "/admin_image/wid/14716512471651216155(96).jpg",
        "alt": "Affordable wedding photographer"
      },
      {
        "src": "/admin_image/wid/10021185851651216155(100).jpg",
        "alt": "Hire wedding photographer"
      },
      {
        "src": "/admin_image/wid/17519544641651216155(101).jpg",
        "alt": "Candid wedding photography"
      },
      {
        "src": "/admin_image/wid/13893029831651216155(102).jpg",
        "alt": "Professional wedding photos"
      },
      {
        "src": "/admin_image/wid/15790650361651216155(110).jpg",
        "alt": "Book wedding photographer"
      },
      {
        "src": "/admin_image/wid/11143476841651216155(111).jpg",
        "alt": "Destination wedding photographer"
      },
      {
        "src": "/admin_image/wid/2428680971651216155(112).jpg",
        "alt": "Local wedding photography"
      },
      {
        "src": "/admin_image/wid/8675601181651216179(123).jpg",
        "alt": "Top wedding photographers - near me"
      },
      {
        "src": "/admin_image/wid/14501252511651216179(124).jpg",
        "alt": "Indian wedding photographer"
      },
      {
        "src": "/admin_image/wid/16009979501651216179(146).jpg",
        "alt": "Creative wedding photography"
      },
      {
        "src": "/admin_image/wid/10474342751651216179(148).jpg",
        "alt": "Couple shoot ideas"
      },
      {
        "src": "/admin_image/wid/5381283031651216179(151).jpg",
        "alt": "Cinematic wedding video"
      },
      {
        "src": "/admin_image/wid/120214751651216179(152).jpg",
        "alt": "Wedding photographer Delhi"
      },
      {
        "src": "/admin_image/wid/15150800511651216179(160).jpg",
        "alt": "Pre wedding Delhi"
      },
      {
        "src": "/admin_image/wid/1460544971651216179(161).jpg",
        "alt": "Wedding photo packages"
      },
      {
        "src": "/admin_image/wid/10688825011651216179(163).jpg",
        "alt": "Best wedding photoshoot"
      },
      {
        "src": "/admin_image/wid/14457111701651216207(164).jpg",
        "alt": "Bridal photoshoot ideas"
      },
      {
        "src": "/admin_image/wid/664571811651216207(165).jpg",
        "alt": "Solo bride photoshoot"
      },
      {
        "src": "/admin_image/wid/2765674791651216207(166).jpg",
        "alt": "Bridal pre wedding shoot"
      },
      {
        "src": "/admin_image/wid/3269165371651216207(167).jpg",
        "alt": "Bride pre wedding poses"
      },
      {
        "src": "/admin_image/wid/412941731651216207(168).jpg",
        "alt": "Solo bridal photography"
      },
      {
        "src": "/admin_image/wid/6123943591651216207(171).jpg",
        "alt": "Best solo shoot ideas"
      },
      {
        "src": "/admin_image/wid/11903036971651216207(186).jpg",
        "alt": "Bridal shoot in Delhi"
      },
      {
        "src": "/admin_image/wid/6018135721651216207(187).jpg",
        "alt": "Outdoor bridal photoshoot"
      },
      {
        "src": "/admin_image/wid/18310439651651216207(188).jpg",
        "alt": "Creative bride photoshoot"
      },
      {
        "src": "/admin_image/wid/9076615971651216207(190).jpg",
        "alt": "Flowy dress bride shoot"
      },
      {
        "src": "/admin_image/wid/17845943871651216207(191).jpg",
        "alt": "Bridal portrait session"
      },
      {
        "src": "/admin_image/wid/17588597751651216207(192).jpg",
        "alt": "Couple pre wedding shoot"
      },
      {
        "src": "/admin_image/wid/703213831651216207(193).jpg",
        "alt": "Romantic couple photoshoot"
      },
      {
        "src": "/admin_image/wid/21181972681651216216(194).jpg",
        "alt": "Pre wedding shoot nearme"
      },
      {
        "src": "/admin_image/wid/9341134101651216216(198).jpg",
        "alt": "Candid couple photography"
      },
      {
        "src": "/admin_image/wid/3751673051651216227(196).jpg",
        "alt": "Couple shoot in vaatika"
      },
      {
        "src": "/admin_image/wid/18952025911651216227(197).jpg",
        "alt": "Couple shoot in garden"
      },
      {
        "src": "/admin_image/wid/1386884561651216307(199).jpg",
        "alt": "Outdoor couple shoot location"
      },
      {
        "src": "/admin_image/wid/14388385051651216307(219).jpg",
        "alt": "Pre wedding shoot in farmhouse"
      },
      {
        "src": "/admin_image/wid/15678234841651216307(220).jpg",
        "alt": "Couple shoot in nature park"
      },
      {
        "src": "/admin_image/wid/18651490691651216307(221).jpg",
        "alt": "Vaatika mein pre wedding shoot"
      },
      {
        "src": "/admin_image/wid/5577871271651216307(222).jpg",
        "alt": "Vaatika mein pre wedding shoot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/2775733211651216307(223).jpg",
        "alt": "Vaatika shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/16279272891651216315(224).jpg",
        "alt": "Candid tasveer by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/6991229691651216315(225).jpg",
        "alt": "Couple shoot in vaatika – WPP"
      },
      {
        "src": "/admin_image/wid/11228006241651216322(228).jpg",
        "alt": "Pre-wedding vibes – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/15678477541651216322(229).jpg",
        "alt": "Dulhan dulha shoot – WPP"
      },
      {
        "src": "/admin_image/wid/17872092091651216338(199).jpg",
        "alt": "Indian wedding photography"
      },
      {
        "src": "/admin_image/wid/961737621651216338(219).jpg",
        "alt": "Vaatika love shot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/9915859981651216338(220).jpg",
        "alt": "traditional wedding shoot"
      },
      {
        "src": "/admin_image/wid/9425345021651216346(266).jpg",
        "alt": "resort pre wedding shoot"
      },
      {
        "src": "/admin_image/wid/19527802811651216346(267).jpg",
        "alt": "sindoor daan image"
      },
      {
        "src": "/admin_image/wid/6466611151651216355(243).jpg",
        "alt": "mangalsutra ceremony shot"
      },
      {
        "src": "/admin_image/wid/16733148071651216355(244).jpg",
        "alt": "jaimala ceremony photo"
      },
      {
        "src": "/admin_image/wid/16277911141651216355(245).jpg",
        "alt": "varmala candid photo"
      },
      {
        "src": "/admin_image/wid/19380266921651216355(246).jpg",
        "alt": "bride and groom on wedding stage"
      },
      {
        "src": "/admin_image/wid/5363558751651216355(247).jpg",
        "alt": "candid wedding smile"
      },
      {
        "src": "/admin_image/wid/6303161321651216355(248).jpg",
        "alt": "bride hugging parents photo"
      }
    ],
    "content": {
      "desc4": "The couple's chemistry and love for each other shone through in every photo, making for a truly stunning set of images. The photoshoot took place in a variety of locations, including a picturesque garden and a grand building, providing a diverse range of backdrops for the photos. The couple's traditional attire added a touch of elegance to the photos, and the candid moments captured between Rachita and Aryan were truly heartwarming.",
      "heading1": "Wedding photography at mithas motel",
      "desc1": "Mithas Motels, Alipur, Delhi makes a gorgeous space to host a wedding. It has multiple banquet halls and lawns to choose from. The beautiful green gardens of the venue and outstanding banquets of Mithas Motel made the photographs and videos look fabulous.",
      "banner1": "/admin_image/wid/banner1116562028016513167144.jpg",
      "heading2": "Candid photographers in delhi",
      "desc2": "Wedding Photo Planet is proud to offer the best candid wedding photography in Delhi. Our team of experienced and talented photographers specialize in capturing the real, unscripted moments of your special day. We use a photojournalistic approach to document the emotions, candid moments, and interactions of the couple and their loved ones. Our goal is to create a visual story of your wedding day that you can treasure for a lifetime. We understand the importance of capturing those precious moments that happen in a blink of an eye and that's why our photographers are always alert and ready to snap the perfect shot. We use state of the art equipment and the latest techniques to ensure that your photographs are of the highest quality.",
      "heading3": "Budget wedding photo studio in delhi",
      "desc3": "For couples on a budget, a wedding photo planet in Delhi can be a great option for capturing beautiful memories of your special day. Many studios offer affordable packages that include a variety of services, such as pre-wedding photoshoots, candid wedding photography, and traditional posed shots. And this is where wedding photo planet can be your go-to-place. Our studio even offers add-on options like drone footage and photo albums at a reasonable price. Additionally, our budget-friendly studio is equipped with the latest photography equipment and technology, so, what are you waiting for? Contact us to know more about the packages.",
      "banner2": "/admin_image/wid/banner1128432691916513178455.jpg"
    }
  },
  {
    "id": "73",
    "slug": "wedding-photos-rakhi-mukul",
    "category": "WEDDING",
    "name": "Rakhi & Mukul",
    "metadata": {
      "title": "Rakhi & Mukul",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image133296591816513046611.jpg",
      "/admin_image/wid/hero_image160342577416513046662.jpg",
      "/admin_image/wid/hero_image135303045016513046723.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/3044255501651048234(5).jpg",
        "alt": "Pre wedding shoot ideas"
      },
      {
        "src": "/admin_image/wid/5286900031651216603(0).jpg",
        "alt": "Best pre wedding photographer near me"
      },
      {
        "src": "/admin_image/wid/335380641651216607(1).jpg",
        "alt": "Pre wedding shoot in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/166531631651216613(2).jpg",
        "alt": "Affordable pre wedding shoot"
      },
      {
        "src": "/admin_image/wid/18111413551651216613(3).jpg",
        "alt": "Romantic pre wedding photo poses"
      },
      {
        "src": "/admin_image/wid/12122249271651216633(5).jpg",
        "alt": "Cinematic pre wedding shoot"
      },
      {
        "src": "/admin_image/wid/21285846481651216633(6).jpg",
        "alt": "Outdoor pre wedding photoshoot"
      },
      {
        "src": "/admin_image/wid/4172612051651216639(6).jpg",
        "alt": "Couple photoshoot before wedding"
      },
      {
        "src": "/admin_image/wid/376501631651216639(7).jpg",
        "alt": "Pre wedding photography packages"
      },
      {
        "src": "/admin_image/wid/8780149321651216647(8).jpg",
        "alt": "Destination pre wedding shoot"
      },
      {
        "src": "/admin_image/wid/5023165891651216647(9).jpg",
        "alt": "Creative pre wedding photography"
      },
      {
        "src": "/admin_image/wid/5766908891651216675(10).jpg",
        "alt": "Pre wedding video shoot ideas"
      },
      {
        "src": "/admin_image/wid/2009389681651216675(11).jpg",
        "alt": "Candid pre wedding photography"
      },
      {
        "src": "/admin_image/wid/5504122601651216675(12).jpg",
        "alt": "Couple shoot in nature"
      },
      {
        "src": "/admin_image/wid/734826991651216685(14).jpg",
        "alt": "Hill station pre wedding shoot"
      },
      {
        "src": "/admin_image/wid/20022966001651216685(15).jpg",
        "alt": "Pre wedding shoot with props"
      },
      {
        "src": "/admin_image/wid/20296336441651216685(16).jpg",
        "alt": "Sunset pre wedding shoot"
      },
      {
        "src": "/admin_image/wid/13261934371651216693(18).jpg",
        "alt": "Under budget pre wedding shoot"
      },
      {
        "src": "/admin_image/wid/16886861921651216693(19).jpg",
        "alt": "Pre wedding shoot in Jaipur"
      },
      {
        "src": "/admin_image/wid/18264620501651216693(20).jpg",
        "alt": "Pre wedding shoot in Rishikesh"
      },
      {
        "src": "/admin_image/wid/7240914931651216700(22).jpg",
        "alt": "Best wedding photographers near me"
      },
      {
        "src": "/admin_image/wid/1211170111651216700(23).jpg",
        "alt": "Candid wedding photography"
      },
      {
        "src": "/admin_image/wid/4130621611651216700(24).jpg",
        "alt": "Top wedding photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/1254299691651216716(25).jpg",
        "alt": "Wedding Photo And Video Package"
      },
      {
        "src": "/admin_image/wid/21450933331651216716(26).jpg",
        "alt": "Top-Rated Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/17200554821651216727(27).jpg",
        "alt": "Award-Winning Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/18842064981651216727(29).jpg",
        "alt": "Best Wedding Photo Ideas"
      },
      {
        "src": "/admin_image/wid/9826527201651216727(30).jpg",
        "alt": "Bridal Pre-Wedding Pose"
      },
      {
        "src": "/admin_image/wid/20960481311651216727(31).jpg",
        "alt": "Twirling Bride Photo"
      },
      {
        "src": "/admin_image/wid/192841731651216734(32).jpg",
        "alt": "Bride Lehenga Photoshoot"
      },
      {
        "src": "/admin_image/wid/12926734301651216734(33).jpg",
        "alt": "Candid Bridal Moments"
      },
      {
        "src": "/admin_image/wid/11235749341651216734(34).jpg",
        "alt": "Bridal Portrait In Nature"
      },
      {
        "src": "/admin_image/wid/13734394941651216769(29).jpg",
        "alt": "Bridal Look Capture"
      },
      {
        "src": "/admin_image/wid/15182566211651216769(30).jpg",
        "alt": "Bride Under Veil Shot"
      },
      {
        "src": "/admin_image/wid/2645379661651216769(31).jpg",
        "alt": "Bride Close-Up Smile"
      },
      {
        "src": "/admin_image/wid/12239629981651216779(35).jpg",
        "alt": "Bridal Elegance Photography"
      },
      {
        "src": "/admin_image/wid/9067800161651216779(36).jpg",
        "alt": "Bride In Sunset Glow"
      },
      {
        "src": "/admin_image/wid/21017772341651216779(37).jpg",
        "alt": "Bride With Dupatta Flow"
      },
      {
        "src": "/admin_image/wid/15372125531651216779(38).jpg",
        "alt": "Royal Bridal Look"
      },
      {
        "src": "/admin_image/wid/4565802901651216790(40).jpg",
        "alt": "Happy Bride Pre-Wedding"
      },
      {
        "src": "/admin_image/wid/9153118061651216790(41).jpg",
        "alt": "Dreamy Bride Solo Click"
      },
      {
        "src": "/admin_image/wid/18106946541651216790(42).jpg",
        "alt": "Best Bride Pre-Wedding Shoot Ideas"
      },
      {
        "src": "/admin_image/wid/16683786191651216790(43).jpg",
        "alt": "Solo Bride Pre-Wedding Photoshoot"
      },
      {
        "src": "/admin_image/wid/70445781651216796(44).jpg",
        "alt": "Poses for Bride in Pre-Wedding"
      },
      {
        "src": "/admin_image/wid/2080138241651216796(45).jpg",
        "alt": "Bridal Photoshoot in Lehenga"
      },
      {
        "src": "/admin_image/wid/18216248501651216796(46).jpg",
        "alt": "Candid Bridal Pre-Wedding Clicks"
      },
      {
        "src": "/admin_image/wid/13119042211651216796(47).jpg",
        "alt": "Traditional Bride Solo Photos"
      },
      {
        "src": "/admin_image/wid/2010773801651216805(49).jpg",
        "alt": "Bridal Look Photography"
      },
      {
        "src": "/admin_image/wid/16852141111651216805(50).jpg",
        "alt": "Natural Light Bride Photos"
      },
      {
        "src": "/admin_image/wid/4999677111651216805(51).jpg",
        "alt": "Beautiful Bridal Twirl Pose"
      },
      {
        "src": "/admin_image/wid/1319170021651216813(52).jpg",
        "alt": "Bridal Shoot with Dupatta Flowing"
      },
      {
        "src": "/admin_image/wid/16785919201651216813(53).jpg",
        "alt": "Bridal Portrait Ideas for Pre-Wedding"
      },
      {
        "src": "/admin_image/wid/9120939921651216813(54).jpg",
        "alt": "Royal Bridal Shoot Locations"
      },
      {
        "src": "/admin_image/wid/21088136181651216830(70).jpg",
        "alt": "Sunset Bridal Pre-Wedding Shot"
      },
      {
        "src": "/admin_image/wid/17627143091651216830(71).jpg",
        "alt": "Indoor Bridal Photoshoot Ideas"
      },
      {
        "src": "/admin_image/wid/1618311351651216830(72).jpg",
        "alt": "Stunning Bride Poses for Camera"
      },
      {
        "src": "/admin_image/wid/19981936431651216860(101).jpg",
        "alt": "Pre-Wedding Photography for Bride"
      },
      {
        "src": "/admin_image/wid/3267844811651216860(102).jpg",
        "alt": "Creative Bridal Solo Shoot Concepts"
      },
      {
        "src": "/admin_image/wid/730402983165121686001.jpg",
        "alt": "Elegant Bridal Shoot at Fort"
      },
      {
        "src": "/admin_image/wid/20971186761651216869(95).jpg",
        "alt": "Flowy Dress Bride Shoot Outdoors"
      },
      {
        "src": "/admin_image/wid/13309283901651216869(96).jpg",
        "alt": "Best Bridal Photoshoot with Props"
      },
      {
        "src": "/admin_image/wid/5366426181651216869(97).jpg",
        "alt": "Best Bridal Photoshoot in Delhi"
      },
      {
        "src": "/admin_image/wid/5707023791651216869(99).jpg",
        "alt": "Solo Bride Pre-Wedding Shoot Delhi"
      },
      {
        "src": "/admin_image/wid/12857774251651216880(82)b.jpg",
        "alt": "Bridal Portrait Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/2710537101651216880(83).jpg",
        "alt": "Top Bridal Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/12365798391651216880(84).jpg",
        "alt": "Royal Bridal Shoot in Delhi Monuments"
      },
      {
        "src": "/admin_image/wid/17221803551651216880(86).jpg",
        "alt": "Bride Photoshoot Near Me in Delhi"
      },
      {
        "src": "/admin_image/wid/630676991651216880(89).jpg",
        "alt": "Bridal Pre-Wedding Shoot at Lodhi Garden"
      },
      {
        "src": "/admin_image/wid/6603820551651216880(90).jpg",
        "alt": "Best Locations for Bride Shoot in Delhi"
      },
      {
        "src": "/admin_image/wid/17099487961651216890(75).jpg",
        "alt": "Bride and Groom Entry"
      },
      {
        "src": "/admin_image/wid/10354394161651216890(76).jpg",
        "alt": "Bridal Dupatta Shot at India Gate"
      },
      {
        "src": "/admin_image/wid/6976862671651216890(79).jpg",
        "alt": "Couple Pheras Photography"
      },
      {
        "src": "/admin_image/wid/9129391371651216890(80).jpg",
        "alt": "Baraat Entry Captured"
      },
      {
        "src": "/admin_image/wid/14155036781651216890(81).jpg",
        "alt": "Bridal Makeup Close-up"
      },
      {
        "src": "/admin_image/wid/3289970931651216923(72).jpg",
        "alt": "Family Portraits at Wedding"
      },
      {
        "src": "/admin_image/wid/4253467901651216937(14).jpg",
        "alt": "Wedding Mandap Decor Photos"
      },
      {
        "src": "/admin_image/wid/6623793831651216937(15).jpg",
        "alt": "Bride and Groom Poses"
      },
      {
        "src": "/admin_image/wid/7144028701651216937(16).jpg",
        "alt": "Couple Wedding Dance"
      },
      {
        "src": "/admin_image/wid/15190730791651216937(17).jpg",
        "alt": "Wedding Rings Ceremony"
      },
      {
        "src": "/admin_image/wid/14357106341651216962(58).jpg",
        "alt": "Fire Rituals in Wedding"
      },
      {
        "src": "/admin_image/wid/1947021061651216962(59).jpg",
        "alt": "Indian Wedding Traditions Captured"
      }
    ],
    "content": {
      "desc4": "This beautiful couple recently got married and tied the most beautiful knot and decided to spend the rest of their life as each other’s partner. Both were looking glamorous in their wedding outfit and looking really beautiful together. The photos and videos came out fabulous with all the love raining from their eyes for each other and with the scenic and outstanding background of the venue.",
      "heading1": "Wedding photoshoot at carnival motel",
      "desc1": "Wedding photoshoot at Carnival Motel, Alipur was a pretty nice and unique experience. The motel's outdoor spaces, such as the pool area and courtyard, also offer a variety of interesting and unique settings for the photoshoot. Overall, a wedding photoshoot at the Carnival Motel can be a fun and creative way to capture the special moments of the big day. The motel was big enough to accommodate a large number of guests.",
      "banner1": "/admin_image/wid/banner1196320233816513048084.jpg",
      "heading2": "Best wedding photographers in delhi",
      "desc2": "Wedding Photo Planet, Delhi is proud to feature some of the best wedding photographers in the city. Our team of professional photographers are highly skilled and experienced, and are dedicated to capturing every special moment of your big day. Whether you're looking for traditional posed shots or candid, natural moments, our photographers will work with you to create a custom photography package that suits your needs and budget. We understand that your wedding day is one of the most important days of your life, and we are committed to providing you with beautiful, high-quality photographs that you can treasure for a lifetime.",
      "heading3": "Candid and cinematographers",
      "desc3": "Wedding Photo Planet offers a curated list of the best candid photographers and cinematographers in the industry. These professionals specialize in capturing natural, unposed moments that truly capture the essence of your special day. Whether you're looking for a candid photographer to document your wedding ceremony, or a cinematographer to create a beautiful film of your reception, our team has the expertise and experience to deliver stunning results. With an eye for detail and a passion for storytelling, our candid photographers and cinematographers will create lasting memories that you'll treasure for a lifetime.",
      "banner2": "/admin_image/wid/banner113253265051651659566RAkhi (1).jpg"
    }
  },
  {
    "id": "74",
    "slug": "wedding-photos-parinita-rohit",
    "category": "WEDDING",
    "name": "Parinita & Rohit",
    "metadata": {
      "title": "Parinita & Rohit",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image153553938616513017101.jpg",
      "/admin_image/wid/hero_image134443948316513017152.jpg",
      "/admin_image/wid/hero_image82680515216513019063.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/16254397541651220768(0).jpg",
        "alt": "Solo Bridal Pre-Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/105063245716512207680R1A1559.jpg",
        "alt": "Solo Groom Pre-Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/34459576816512207680R1A1637.jpg",
        "alt": "Bride Twirling in Lehenga"
      },
      {
        "src": "/admin_image/wid/165524357816512207740R1A1642.jpg",
        "alt": "Bridal Close-Up in Natural Light"
      },
      {
        "src": "/admin_image/wid/133129835816512207740R1A1660.jpg",
        "alt": "Bride Posing with Dupatta"
      },
      {
        "src": "/admin_image/wid/153015781216512207740R1A1661.jpg",
        "alt": "Traditional Bride Pose Outdoors"
      },
      {
        "src": "/admin_image/wid/49693460616512207830R1A1782.jpg",
        "alt": "Elegant Bridal Portrait Shoot"
      },
      {
        "src": "/admin_image/wid/90997392016512207830R1A1822.jpg",
        "alt": "Candid Bridal Smile Capture"
      },
      {
        "src": "/admin_image/wid/28885121716512207839V3A2827.jpg",
        "alt": "Bride Posing Under Dupatta"
      },
      {
        "src": "/admin_image/wid/147639911716512207839V3A2891.jpg",
        "alt": "Flowy Dress Bride Walking Shot"
      },
      {
        "src": "/admin_image/wid/91237734116512208109V3A2900.jpg",
        "alt": "Bridal Photoshoot at Sunset"
      },
      {
        "src": "/admin_image/wid/71555957216512208109V3A2901.jpg",
        "alt": "Dramatic Bridal Gaze Pose"
      },
      {
        "src": "/admin_image/wid/147550552616512208109V3A3023.jpg",
        "alt": "Lehenga Twirl in Garden Shoot"
      },
      {
        "src": "/admin_image/wid/29781690716512208169V3A3033.jpg",
        "alt": "Bridal Pose on Stairs"
      },
      {
        "src": "/admin_image/wid/30372064216512208169V3A3039.jpg",
        "alt": "Bride Holding Flowers Shot"
      },
      {
        "src": "/admin_image/wid/31001356516512208169V3A3040.jpg",
        "alt": "Emotional Bride Portrait"
      },
      {
        "src": "/admin_image/wid/189159129216512208229V3A3042.jpg",
        "alt": "Modern Bridal Pose with Sunglasses"
      },
      {
        "src": "/admin_image/wid/24520957716512208229V3A3044.jpg",
        "alt": "Mehndi Close-Up on Bride’s Hands"
      },
      {
        "src": "/admin_image/wid/164892838916512208229V3A3046.jpg",
        "alt": "Bride with Bridal Jewelry Focus"
      },
      {
        "src": "/admin_image/wid/53008619916512208229V3A3054.jpg",
        "alt": "Traditional Indian Bridal Look Capture"
      },
      {
        "src": "/admin_image/wid/108472397716512208289V3A3061.jpg",
        "alt": "Best Bridal Photoshoot Ideas"
      },
      {
        "src": "/admin_image/wid/102972483816512208289V3A3063.jpg",
        "alt": "Solo Bride Pre-Wedding Shoot Poses"
      },
      {
        "src": "/admin_image/wid/42701396016512208289V3A3081.jpg",
        "alt": "Bridal Pre-Wedding Photography Near Me"
      },
      {
        "src": "/admin_image/wid/62804275516512208289V3A3082.jpg",
        "alt": "Poses for Bride in Pre-Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/162403871316512208369V3A3084.jpg",
        "alt": "Bridal Photoshoot in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/70490051216512208369V3A3085.jpg",
        "alt": "Affordable Bride Photoshoot Packages"
      },
      {
        "src": "/admin_image/wid/142366829716512208369V3A3087.jpg",
        "alt": "Trending Bridal Pre-Wedding Shoot Concepts"
      },
      {
        "src": "/admin_image/wid/211274330516512208439V3A3108.jpg",
        "alt": "Candid Shots of Bride Before Wedding"
      },
      {
        "src": "/admin_image/wid/131723491016512208439V3A3110.jpg",
        "alt": "Bridal Outdoor Photoshoot Locations"
      },
      {
        "src": "/admin_image/wid/28735675116512208589V3A3112.jpg",
        "alt": "Bride Posing with Dupatta for Photoshoot"
      },
      {
        "src": "/admin_image/wid/147257396016512208589V3A3115.jpg",
        "alt": "Pre-Wedding Photographer for Bridal Shoot"
      },
      {
        "src": "/admin_image/wid/120552864116512208589V3A3116.jpg",
        "alt": "Best Places for Bridal Shoot in Jaipur"
      },
      {
        "src": "/admin_image/wid/179253749616512208589V3A3119.jpg",
        "alt": "Creative Solo Bride Shoot Ideas"
      },
      {
        "src": "/admin_image/wid/204191127216512208659V3A3123.jpg",
        "alt": "Bridal Portrait Photography Delhi"
      },
      {
        "src": "/admin_image/wid/80756077016512208659V3A3127.jpg",
        "alt": "Traditional Indian Bride Photoshoot"
      },
      {
        "src": "/admin_image/wid/14574286716512208659V3A3132.jpg",
        "alt": "Cinematic Pre-Wedding Shoot for Bride"
      },
      {
        "src": "/admin_image/wid/144656944516512208709V3A3133.jpg",
        "alt": "Bridal Shoot Photographer in Rishikesh"
      },
      {
        "src": "/admin_image/wid/35845018016512208709V3A3148.jpg",
        "alt": "Pre-Wedding Bridal Shoot Under 10k"
      },
      {
        "src": "/admin_image/wid/80754025316512208709V3A3159.jpg",
        "alt": "Natural Light Bridal Portrait Photography"
      },
      {
        "src": "/admin_image/wid/185427981016512208929V3A3160.jpg",
        "alt": "Affordable Bridal Photoshoot Packages"
      },
      {
        "src": "/admin_image/wid/142674561816512208929V3A3177.jpg",
        "alt": "Low Budget Bride Photoshoot"
      },
      {
        "src": "/admin_image/wid/66403343216512209009V3A3193.jpg",
        "alt": "Bridal Pre-Wedding Shoot Under ₹5000"
      },
      {
        "src": "/admin_image/wid/121228052016512209009V3A3196.jpg",
        "alt": "Budget Bride Shoot in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/82345475116512209009V3A3208.jpg",
        "alt": "Cheap Bridal Photoshoot Ideas"
      },
      {
        "src": "/admin_image/wid/142975691616512209109V3A3215.jpg",
        "alt": "Bridal Shoot Under 15k in Jaipur"
      },
      {
        "src": "/admin_image/wid/92243818516512209109V3A3218.jpg",
        "alt": "Pre-Wedding Shoot Packages for Brides"
      },
      {
        "src": "/admin_image/wid/158480216116512209109V3A3220.jpg",
        "alt": "Pocket-Friendly Bride Photoshoot"
      },
      {
        "src": "/admin_image/wid/188507284216512209189V3A3224.jpg",
        "alt": "Bridal Photoshoot in Budget"
      },
      {
        "src": "/admin_image/wid/53563560516512209189V3A3229.jpg",
        "alt": "Bride Solo Shoot Under ₹10,000"
      },
      {
        "src": "/admin_image/wid/4193310916512209279V3A3230.jpg",
        "alt": "Economical Bridal Photography Near Me"
      },
      {
        "src": "/admin_image/wid/139020172416512209279V3A3241.jpg",
        "alt": "Low Cost Bridal Pre-Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/157009580416512209279V3A3244.jpg",
        "alt": "Bridal Shoot Deals in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/88159370216512209279V3A3249.jpg",
        "alt": "Best Bridal Shoot Packages Under 10k"
      },
      {
        "src": "/admin_image/wid/162288413616512209629V3A3253.jpg",
        "alt": "Affordable Bridal Photography in India"
      },
      {
        "src": "/admin_image/wid/96721537516512209629V3A3257.jpg",
        "alt": "Budget Pre-Wedding Shoot for Bride"
      },
      {
        "src": "/admin_image/wid/31950761716512209839V3A3264.jpg",
        "alt": "Bride Photoshoot in Low Budget Locations"
      },
      {
        "src": "/admin_image/wid/1994976416512209839V3A3270.jpg",
        "alt": "Cinematic Bridal Shoot Under Budget"
      },
      {
        "src": "/admin_image/wid/23736231816512209919V3A3277.jpg",
        "alt": "Budget Bride Photography Packages 2025"
      },
      {
        "src": "/admin_image/wid/24136044216512209989V3A3281.jpg",
        "alt": "Bridal Portrait Session Below ₹10k"
      },
      {
        "src": "/admin_image/wid/166157905416512209999V3A3284.jpg",
        "alt": "Pre Wedding Bridal Shoot Delhi Under 10k"
      },
      {
        "src": "/admin_image/wid/116995000216512209999V3A3292.jpg",
        "alt": "Best Budget Bridal Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/114327492916512209999V3A3293.jpg",
        "alt": "Bride Solo Shoot Package Low Price"
      },
      {
        "src": "/admin_image/wid/89121090416512209999V3A3294.jpg",
        "alt": "Affordable Bridal Shoot Locations in Delhi"
      },
      {
        "src": "/admin_image/wid/63936592516512210089V3A3294.jpg",
        "alt": "Bridal Shoot Offers Under ₹10000"
      },
      {
        "src": "/admin_image/wid/61489184916512210089V3A3301.jpg",
        "alt": "Bridal Photoshoot Packages in NCR"
      },
      {
        "src": "/admin_image/wid/189444351216512210089V3A3314.jpg",
        "alt": "Cheap Pre Wedding Bridal Shoot Near Me"
      },
      {
        "src": "/admin_image/wid/60809860616512210179V3A3327.jpg",
        "alt": "Simple Bride Pre Wedding Shoot Ideas"
      },
      {
        "src": "/admin_image/wid/150681314416512210179V3A3334.jpg",
        "alt": "Pre Wedding Shoot for Bride in Budget"
      },
      {
        "src": "/admin_image/wid/197686161916512210179V3A3336.jpg",
        "alt": "Delhi Bridal Photographer Under Budget"
      },
      {
        "src": "/admin_image/wid/122576118916512210289V3A3281.jpg",
        "alt": "Jaipur Bride Shoot Under ₹10k"
      },
      {
        "src": "/admin_image/wid/119887092716512210289V3A3284.jpg",
        "alt": "Affordable Solo Bridal Portrait Shoot"
      },
      {
        "src": "/admin_image/wid/67973590516512210289V3A3292.jpg",
        "alt": "Creative Bridal Shoots Low Price"
      },
      {
        "src": "/admin_image/wid/8080713016512210289V3A3293.jpg",
        "alt": "Bride Poses Pre Wedding Shoot Budget"
      },
      {
        "src": "/admin_image/wid/5425388016512210369V3A3294.jpg",
        "alt": "Under 10k Bride Shoot in Outdoor Location"
      },
      {
        "src": "/admin_image/wid/73734303616512210369V3A3301.jpg",
        "alt": "Best Bridal Shoot Packages Near Me"
      },
      {
        "src": "/admin_image/wid/100679891816512210369V3A3314.jpg",
        "alt": "Wedding Photography Bridal Budget Plan"
      },
      {
        "src": "/admin_image/wid/16346065116512210369V3A3327.jpg",
        "alt": "Solo Bridal Shoot in Budget Range"
      },
      {
        "src": "/admin_image/wid/109852193116512210739V3A3349.jpg",
        "alt": "Bride Shoot with Dress Under ₹10000"
      },
      {
        "src": "/admin_image/wid/107951590416512210739V3A3360.jpg",
        "alt": "Stylish Pre Wedding Shoot for Bride Cheap"
      },
      {
        "src": "/admin_image/wid/73307614216512210739V3A3362.jpg",
        "alt": "Bridal Photoshoot Under 15k Near Me"
      },
      {
        "src": "/admin_image/wid/64021474316512210739V3A3364.jpg",
        "alt": "Affordable Bridal Photographer in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/191305871216512210739V3A3369.jpg",
        "alt": "Pre Wedding Solo Shoot for Bride Low Budget"
      },
      {
        "src": "/admin_image/wid/4708592416512210809V3A3377.jpg",
        "alt": "Cheap Bridal Shoot Packages Delhi"
      },
      {
        "src": "/admin_image/wid/102085779216512210809V3A3378.jpg",
        "alt": "Best Bridal Shoot Under 10000 Rupees"
      },
      {
        "src": "/admin_image/wid/87942139716512210809V3A3389.jpg",
        "alt": "Bridal Poses Pre Wedding Budget Price"
      },
      {
        "src": "/admin_image/wid/95871490416512210809V3A3391.jpg",
        "alt": "Bride Pre Wedding Candid Shoot Low Cost"
      },
      {
        "src": "/admin_image/wid/58233388316512210809V3A3396.jpg",
        "alt": "Female Photographer for Bridal Shoot Delhi"
      },
      {
        "src": "/admin_image/wid/105659393816512210889V3A3405.jpg",
        "alt": "Bride Solo Outdoor Shoot Affordable"
      },
      {
        "src": "/admin_image/wid/63514788816512210889V3A3410.jpg",
        "alt": "Budget Bridal Shoot Near India Gate Delhi"
      },
      {
        "src": "/admin_image/wid/74830437116512210889V3A3411.jpg",
        "alt": "Bridal Shoot With Props Under ₹10k"
      },
      {
        "src": "/admin_image/wid/96522356216512210889V3A3415.jpg",
        "alt": "Traditional Bridal Shoot Low Price"
      },
      {
        "src": "/admin_image/wid/120865966816512210889V3A3452.jpg",
        "alt": "Budget Bride Shoot Near Me in Studio"
      },
      {
        "src": "/admin_image/wid/115375870116512211619V3A3472.jpg",
        "alt": "Pre Wedding Shoot for Bride Near Me Cheap"
      },
      {
        "src": "/admin_image/wid/123959830416512211619V3A3473.jpg",
        "alt": "Bridal Shoot Offers with Makeup Included"
      },
      {
        "src": "/admin_image/wid/39308129516512211619V3A3476.jpg",
        "alt": "Rishikesh Bride Photoshoot Under Budget"
      },
      {
        "src": "/admin_image/wid/207589853416512211619V3A3479.jpg",
        "alt": "Best Place for Budget Bridal Shoot in Jaipur"
      },
      {
        "src": "/admin_image/wid/188235890216512211619V3A3482.jpg",
        "alt": "Pre Wedding Shoot for Girls Under ₹10,000"
      },
      {
        "src": "/admin_image/wid/129247125116512211729V3A3490.jpg",
        "alt": "Affordable Royal Bridal Shoot Packages"
      },
      {
        "src": "/admin_image/wid/213437869016512211729V3A3514.jpg",
        "alt": "Couple Pre Wedding Combo Under Budget"
      },
      {
        "src": "/admin_image/wid/145092364916512211729V3A3518.jpg",
        "alt": "Royal Pre Wedding Shoot on Budget"
      },
      {
        "src": "/admin_image/wid/123161477716512211729V3A3531.jpg",
        "alt": "Best Budget Wedding Photographer in Delhi"
      },
      {
        "src": "/admin_image/wid/32891520716512211729V3A3538.jpg",
        "alt": "Royal Couple Shoot Under 15k"
      },
      {
        "src": "/admin_image/wid/170115804616512211789V3A3548.jpg",
        "alt": "Affordable Royal Theme Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/30537011716512211789V3A3899.jpg",
        "alt": "Luxury Wedding Shoot at Low Cost"
      },
      {
        "src": "/admin_image/wid/153560805116512211789V3A3904.jpg",
        "alt": "Royal Wedding Photography at Budget Price"
      },
      {
        "src": "/admin_image/wid/90864670016512211789V3A3925.jpg",
        "alt": "Top Budget Wedding Photographers in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/200105077616512211789V3A3926.jpg",
        "alt": "Grand Wedding Photoshoot Low Budget"
      },
      {
        "src": "/admin_image/wid/57616150516512211849V3A3931.jpg",
        "alt": "Premium Wedding Shoot Without High Cost"
      },
      {
        "src": "/admin_image/wid/67207223016512211849V3A3988.jpg",
        "alt": "Affordable Destination Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/14691803216512211849V3A4006.jpg",
        "alt": "Royal Palace Pre Wedding Shoot on Budget"
      },
      {
        "src": "/admin_image/wid/138823005416512211849V3A4009.jpg",
        "alt": "Royal Pre Wedding Shoot on Budget"
      },
      {
        "src": "/admin_image/wid/9727899001651221184DSC00555.jpg",
        "alt": "Best Budget Wedding Photographer in Delhi"
      },
      {
        "src": "/admin_image/wid/18437334271651221191DSC00567.jpg",
        "alt": "Royal Couple Shoot Under 15k"
      },
      {
        "src": "/admin_image/wid/4211430731651221191DSC00577.jpg",
        "alt": "Affordable Royal Theme Wedding Shoot Services"
      },
      {
        "src": "/admin_image/wid/20022450901651221191DSC00595.jpg",
        "alt": "Luxury Wedding Shoot at Low Cost"
      },
      {
        "src": "/admin_image/wid/14380962161651221191DSC00661.jpg",
        "alt": "Best Pre Wedding Photography Packages Under 10,000"
      },
      {
        "src": "/admin_image/wid/2260368291651221191DSC00662.jpg",
        "alt": "Royal Wedding Photography Services in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/832917281651221203DSC00930.jpg",
        "alt": "Budget Wedding Photography   Cinematic Videography"
      },
      {
        "src": "/admin_image/wid/12316666031651221203DSC09993.jpg",
        "alt": "Grand Wedding Photoshoot Low Budget Packages"
      },
      {
        "src": "/admin_image/wid/6623587221651221203DSC09998.jpg",
        "alt": "Premium Wedding Shoot Without High Cost"
      },
      {
        "src": "/admin_image/wid/15607849791651221203Untitled-1.jpg",
        "alt": "Couple Shoot at Fort Locations – Budget Photography Services"
      }
    ],
    "content": {
      "desc4": "The wedding photoshoot of Parinita and Rohit was a beautiful and intimate affair. The couple looked stunning together, with Parinita wearing a traditional red and gold lehenga and Rohit dressed in a crisp sherwani. The photographer captured every special moment, from the exchange of vows to the first dance as husband and wife. The couple will always cherish the memories of their special day, captured forever in the beautiful photographs taken during their wedding photoshoot.",
      "heading1": "Wedding photoshoot at wedding villa",
      "desc1": "Wedding Villa is the perfect location for a wedding photoshoot. With its stunning architecture, lush gardens, and picturesque views, the villa provides a romantic and elegant setting for capturing beautiful memories of your special day. Whether you're looking for traditional posed shots or candid moments, the villa's various outdoor and indoor spaces offer a variety of options for your wedding photography.",
      "banner1": "/admin_image/wid/banner11801452213165165697602 (1).jpg",
      "heading2": "Best wedding photographers",
      "desc2": "Wedding Photo Planet is proud to feature some of the best wedding photographers in the industry. Our team of professional photographers are highly skilled and experienced, and are dedicated to capturing every special moment of your big day. Whether you're looking for traditional posed shots or candid, natural moments, our photographers will work with you to create a custom photography package that suits your needs and budget. We understand that your wedding day is one of the most important days of your life, and we are committed to providing you with beautiful, high-quality photographs that you can treasure for a lifetime.",
      "heading3": "Budget wedding photo studio in delhi",
      "desc3": "For couples on a budget, a wedding photo planet in Delhi can be a great option for capturing beautiful memories of your special day. Many studios offer affordable packages that include a variety of services, such as pre-wedding photoshoots, candid wedding photography, and traditional posed shots. And this is where wedding photo planet can be your go-to-place. Our studio even offers add-on options like drone footage and photo albums at a reasonable price. Additionally, our budget-friendly studio is equipped with the latest photography equipment and technology, so, what are you waiting for? Contact us to know more about the packages.",
      "banner2": "/admin_image/wid/banner1881457105165165645701 copy.jpg"
    }
  },
  {
    "id": "75",
    "slug": "wedding-photos-chanderkant-ruchika",
    "category": "WEDDING",
    "name": "Chander Kant & Ruchika",
    "metadata": {
      "title": "Chander Kant & Ruchika",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image6421754161651297898Banner-Of-All-Top-(1).jpg",
      "/admin_image/wid/hero_image172677593716512979033.jpg",
      "/admin_image/wid/hero_image112680709816512979032.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/94306510116512324879V3A3865.jpg",
        "alt": "Bride Solo Pre Wedding Shoot - under budget"
      },
      {
        "src": "/admin_image/wid/143073949016512325639V3A3607.jpg",
        "alt": "Bride Traditional Dress Shoot"
      },
      {
        "src": "/admin_image/wid/75575924716512325639V3A3771.jpg",
        "alt": "Bride Twirling Pose Ideas"
      },
      {
        "src": "/admin_image/wid/126232940516512325699V3A3841.jpg",
        "alt": "Bride Haldi Ceremony Photos"
      },
      {
        "src": "/admin_image/wid/196679984016512325699V3A3865.jpg",
        "alt": "Bride Mehndi Function Poses"
      },
      {
        "src": "/admin_image/wid/33359321416512325699V3A3900.jpg",
        "alt": "Bride Posing with Dupatta"
      },
      {
        "src": "/admin_image/wid/124863630916512325699V3A3908.jpg",
        "alt": "Bride Getting Ready Shots"
      },
      {
        "src": "/admin_image/wid/42774428216512325699V3A3909.jpg",
        "alt": "Bride Entry Photography"
      },
      {
        "src": "/admin_image/wid/29381176916512325759V3A3923.jpg",
        "alt": "Bride Posing with Jewelry"
      },
      {
        "src": "/admin_image/wid/69092986116512325759V3A3925.jpg",
        "alt": "Bride Makeup Close-Up Photo"
      },
      {
        "src": "/admin_image/wid/45164636516512325759V3A3931.jpg",
        "alt": "Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/116232998316512325759V3A3948.jpg",
        "alt": "Wedding Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/99996064816512325759V3A4009.jpg",
        "alt": "Photo Studio Near Me"
      },
      {
        "src": "/admin_image/wid/10415611416512325859V3A4010.jpg",
        "alt": "Best Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/212389564416512325859V3A4023.jpg",
        "alt": "Candid Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/171959996916512325859V3A4633.jpg",
        "alt": "Romantic Couple Photoshoot"
      },
      {
        "src": "/admin_image/wid/183569344016512325859V3A4687.jpg",
        "alt": "Couple Shoot in Delhi"
      },
      {
        "src": "/admin_image/wid/186253554916512325859V3A4715.jpg",
        "alt": "Candid Couple Photography"
      },
      {
        "src": "/admin_image/wid/147205262116512325919V3A4720.jpg",
        "alt": "Couple Photoshoot in Garden"
      },
      {
        "src": "/admin_image/wid/59522566916512325919V3A4722.jpg",
        "alt": "Couple Pre Wedding Shoot in Jaipur"
      },
      {
        "src": "/admin_image/wid/36576475916512325919V3A4724.jpg",
        "alt": "Pre Wedding Shoot with Couple Poses"
      },
      {
        "src": "/admin_image/wid/4862712921651232591IMG_1400.jpg",
        "alt": "Royal Couple Pre Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/10115710391651232598IMG_1421.jpg",
        "alt": "Outdoor Couple Pre Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/7653426771651232598VSP_0011.jpg",
        "alt": "Hilltop Couple Photoshoot"
      },
      {
        "src": "/admin_image/wid/5296465451651232598VSP_0022-(2).jpg",
        "alt": "Casual Couple Pre Wedding Photos"
      },
      {
        "src": "/admin_image/wid/15573646631651232598VSP_0022.jpg",
        "alt": "Couple Shoot in Traditional Dress"
      },
      {
        "src": "/admin_image/wid/8920565581651232598VSP_0061.jpg",
        "alt": "Couple Shoot Under Fairy Lights"
      },
      {
        "src": "/admin_image/wid/5457727871651232605VSP_0063.jpg",
        "alt": "Couple Pre Wedding Shoot at Sunset"
      },
      {
        "src": "/admin_image/wid/10763327411651232605VSP_0065-(2).jpg",
        "alt": "Fun Couple Photography Ideas"
      },
      {
        "src": "/admin_image/wid/1963025831651232605VSP_0065.jpg",
        "alt": "Couple Holding Hands Photoshoot"
      },
      {
        "src": "/admin_image/wid/12409592221651232605VSP_0078.jpg",
        "alt": "Pre Wedding Shoot in Fort with Couple"
      },
      {
        "src": "/admin_image/wid/5923147011651232605VSP_0085.jpg",
        "alt": "Candid Moments of Couple Shoot"
      },
      {
        "src": "/admin_image/wid/7341338811651232612VSP_0090-(2).jpg",
        "alt": "Stylish Couple Pre Wedding Pictures"
      },
      {
        "src": "/admin_image/wid/10490957651651232612VSP_0090.jpg",
        "alt": "Affordable Wedding Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/16434062281651232612VSP_0110.jpg",
        "alt": "Best Candid Wedding Photographer in Delhi"
      },
      {
        "src": "/admin_image/wid/13540344401651232612VSP_0110a.jpg",
        "alt": "Indian Wedding Photography Packages"
      },
      {
        "src": "/admin_image/wid/2960889051651232612VSP_0124.jpg",
        "alt": "Local Wedding Videographer with Drone"
      },
      {
        "src": "/admin_image/wid/4471795541651232621VSP_0126.jpg",
        "alt": "Book Wedding Photographer Online"
      },
      {
        "src": "/admin_image/wid/17056072301651232621VSP_0136.jpg",
        "alt": "Top-Rated Wedding Photography Studio Near Me"
      },
      {
        "src": "/admin_image/wid/7240085051651232621VSP_0143.jpg",
        "alt": "Traditional and Candid Wedding Photography Combo"
      },
      {
        "src": "/admin_image/wid/20782990601651232621VSP_0159.jpg",
        "alt": "Luxury Wedding Photography Services"
      },
      {
        "src": "/admin_image/wid/5559239521651232628VSP_0358.jpg",
        "alt": "Wedding Photographer with Instant Delivery"
      },
      {
        "src": "/admin_image/wid/13989289301651232628VSP_0369.jpg",
        "alt": "Creative Wedding Photoshoot Ideas"
      },
      {
        "src": "/admin_image/wid/18969246831651232628VSP_0374.jpg",
        "alt": "Budget Wedding Photography Packages"
      },
      {
        "src": "/admin_image/wid/12158238701651232628VSP_0377.jpg",
        "alt": "Destination Wedding Photography Packages India"
      },
      {
        "src": "/admin_image/wid/11509352571651232628VSP_0388.jpg",
        "alt": "Cinematic Wedding Videographer Delhi"
      },
      {
        "src": "/admin_image/wid/20779233901651232634VSP_0390.jpg",
        "alt": "Couple Wedding Shoot Ideas"
      },
      {
        "src": "/admin_image/wid/14185841451651232634VSP_0398-(2).jpg",
        "alt": "Experienced Indian Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/20350033251651232634VSP_0398.jpg",
        "alt": "Haldi and Mehndi Photography Services"
      },
      {
        "src": "/admin_image/wid/13565187881651232634VSP_0406.jpg",
        "alt": "Drone Videography for Wedding Ceremony"
      },
      {
        "src": "/admin_image/wid/18159728261651232634VSP_0435.jpg",
        "alt": "Engagement Photography and Video Services"
      },
      {
        "src": "/admin_image/wid/17272786391651232643VSP_0447.jpg",
        "alt": "Wedding Photographer with Editing Services Included"
      },
      {
        "src": "/admin_image/wid/4819803251651232643VSP_0464.jpg",
        "alt": "Drone Wedding Photography"
      },
      {
        "src": "/admin_image/wid/7379735151651232643VSP_0524-(2).jpg",
        "alt": "Aerial Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/16660031671651232643VSP_0524.jpg",
        "alt": "Drone Shots for Pre-Wedding"
      },
      {
        "src": "/admin_image/wid/19013497831651232643VSP_0615-(2).jpg",
        "alt": "Best Drone Photography for Wedding"
      },
      {
        "src": "/admin_image/wid/5365353511651232650VSP_0615.jpg",
        "alt": "Drone Videography for Indian Weddings"
      },
      {
        "src": "/admin_image/wid/2491458761651232650VSP_1459.jpg",
        "alt": "Pre-Wedding Drone Shoot Delhi"
      },
      {
        "src": "/admin_image/wid/9143393611651232650VSP_1475.jpg",
        "alt": "Drone Cinematic Wedding Video"
      },
      {
        "src": "/admin_image/wid/19742164431651232650VSP_1496.jpg",
        "alt": "Aerial Pre-Wedding Photography Ideas"
      },
      {
        "src": "/admin_image/wid/9204037131651232650VSP_1536-(2).jpg",
        "alt": "Wedding Drone Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/15861934481651232656VSP_1536.jpg",
        "alt": "4K Drone Wedding Videographer"
      },
      {
        "src": "/admin_image/wid/4318716161651232656VSP_1551.jpg",
        "alt": "Luxury Drone Wedding Coverage"
      },
      {
        "src": "/admin_image/wid/1168125041651232656VSP_1557.jpg",
        "alt": "Destination Wedding Drone Shoot"
      },
      {
        "src": "/admin_image/wid/16656648611651232656VSP_1579.jpg",
        "alt": "Couple Drone Photoshoot"
      },
      {
        "src": "/admin_image/wid/16613711461651232662VSP_3920.jpg",
        "alt": "Top Drone Wedding Photographer in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/15045164331651232662VSP_3968.jpg",
        "alt": "Aerial Couple Photography with Drone"
      },
      {
        "src": "/admin_image/wid/5334033391651232662VSP_3982.jpg",
        "alt": "Drone Shot of Bride Entry"
      }
    ],
    "content": {
      "desc4": "Best Wedding Photographers in Delhi",
      "heading1": "Best Wedding Photographers in Delhi NCR",
      "desc1": "Candid Photographer",
      "banner1": "/admin_image/wid/banner112422021871651299519Untitled-1.jpg",
      "heading2": "Best Wedding photographer",
      "desc2": "Candid & Cinematographer in Delhi",
      "heading3": "Candid & Cinematographer",
      "desc3": "Candid Wedding Photographer",
      "banner2": "/admin_image/wid/banner115697431841651300338Untitled-2.jpg"
    }
  },
  {
    "id": "76",
    "slug": "pre-wedding-photos-barkha-madhav",
    "category": "PRE WEDDING",
    "name": "Barkha & Madhav",
    "metadata": {
      "title": "Barkha & Madhav",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image91344902716520788651.jpg",
      "/admin_image/wid/hero_image41550782916520788692.jpg",
      "/admin_image/wid/hero_image160210468716520788743.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/77956736416515693149V3A3607.jpg",
        "alt": "Pre Wedding Photographer in Mountains"
      },
      {
        "src": "/admin_image/wid/12563492191651569314DSC00127.jpg",
        "alt": "Lake Side Pre Wedding Photoshoot"
      },
      {
        "src": "/admin_image/wid/17020466881651569314DSC00175.jpg",
        "alt": "Mountain View Couple Photography"
      },
      {
        "src": "/admin_image/wid/13239486181651569314DSC00630.jpg",
        "alt": "Best Pre Wedding Shoot in Hills"
      },
      {
        "src": "/admin_image/wid/16132486711651569314DSC00688-copy.jpg",
        "alt": "Scenic Pre Wedding Shoot Locations"
      },
      {
        "src": "/admin_image/wid/19325353301651569339DSC00958.jpg",
        "alt": "Romantic Photoshoot at Lake"
      },
      {
        "src": "/admin_image/wid/18412608591651569339DSC00976.jpg",
        "alt": "Pre Wedding Shoot in Rishikesh Mountains"
      },
      {
        "src": "/admin_image/wid/16193684861651569339DSC00984.jpg",
        "alt": "Couple Shoot at Lake with Drone"
      },
      {
        "src": "/admin_image/wid/2734520441651569339DSC01008.jpg",
        "alt": "Natural Location Pre Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/12141006031651569374DSC01598-copy.jpg",
        "alt": "Pre Wedding Shoot with Mountain Background"
      },
      {
        "src": "/admin_image/wid/7719263271651569374DSC01644-copy.jpg",
        "alt": "Hill Station Pre Wedding Photography"
      },
      {
        "src": "/admin_image/wid/15882298421651569374DSC01647-copy.jpg",
        "alt": "Mountain   Lake Couple Shoot Packages"
      },
      {
        "src": "/admin_image/wid/15355560791651569374DSC01650-copy.jpg",
        "alt": "Outdoor Pre Wedding Shoot Near Hills"
      },
      {
        "src": "/admin_image/wid/11635088691651569374DSC01657-copy.jpg",
        "alt": "Destination Pre Wedding Shoot in Mountains"
      },
      {
        "src": "/admin_image/wid/13238203261651569386DSC01677-copy.jpg",
        "alt": "Pre Wedding Photographer for Natural Locations"
      },
      {
        "src": "/admin_image/wid/15465173361651569386DSC01683-copy.jpg",
        "alt": "Best Pre Wedding Shoot at Nainital Lake"
      },
      {
        "src": "/admin_image/wid/7328585201651569386DSC09359-copy.jpg",
        "alt": "Scenic Couple Shoot in Manali"
      },
      {
        "src": "/admin_image/wid/4629410731651569386DSC09370-copy.jpg",
        "alt": "Pre Wedding Shoot with Nature Views"
      },
      {
        "src": "/admin_image/wid/16160717621651569386DSC09381-copy.jpg",
        "alt": "Affordable Mountain Pre Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/5005580751651569431DSC09395-copy.jpg",
        "alt": "Pre Wedding Shoot in Nature with Lake View"
      },
      {
        "src": "/admin_image/wid/15198380801651569431DSC09485-copy.jpg",
        "alt": "Pre Wedding Photographer in Nature"
      },
      {
        "src": "/admin_image/wid/10530344771651569431DSC09515-copy.jpg",
        "alt": "Drone Shoot at Lake for Couples"
      },
      {
        "src": "/admin_image/wid/15264250441651569431DSC09554-copy.jpg",
        "alt": "Mountain Pre Wedding Shoot Near Me"
      },
      {
        "src": "/admin_image/wid/4302231971651569431DSC09613-copy.jpg",
        "alt": "Couple Photoshoot at Lake View Point"
      },
      {
        "src": "/admin_image/wid/12298440641651569438DSC09650-copy.jpg",
        "alt": "Natural Pre Wedding Shoot Delhi NCR"
      },
      {
        "src": "/admin_image/wid/182303821651569438DSC09682-copy.jpg",
        "alt": "Romantic Shoot at Hill Station"
      },
      {
        "src": "/admin_image/wid/19027313841651569438DSC09701-copy.jpg",
        "alt": "Scenic Backdrop Pre Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/13701424741651569438DSC09706-copy.jpg",
        "alt": "Couple Pre Wedding Shoot in Open Field"
      },
      {
        "src": "/admin_image/wid/149969471651569438DSC09713-copy.jpg",
        "alt": "Mountain and Waterfall Photoshoot for Couples"
      },
      {
        "src": "/admin_image/wid/18375669781651569446DSC09714-copy.jpg",
        "alt": "Budget Pre Wedding Shoot in Hills"
      },
      {
        "src": "/admin_image/wid/15369644611651569446DSC09723-copy.jpg",
        "alt": "Drone Pre Wedding Shoot in Mountains"
      },
      {
        "src": "/admin_image/wid/552623311651569446DSC09841.jpg",
        "alt": "Outdoor Pre Wedding Shoot in Rishikesh"
      },
      {
        "src": "/admin_image/wid/7154423981651569446DSC09921.jpg",
        "alt": "Sunset Shoot at Lake for Couples"
      },
      {
        "src": "/admin_image/wid/12333402721651569446DSC09925.jpg",
        "alt": "Couple Shoot in Nature Park or Valley"
      },
      {
        "src": "/admin_image/wid/17121068211651569454DSC09928-copy.jpg",
        "alt": "Pre Wedding Shoot in Forest   Mountain"
      },
      {
        "src": "/admin_image/wid/877219751651569454DSC09930.jpg",
        "alt": "Top Locations for Mountain Pre Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/12887287901651569454DSC09930-copy.jpg",
        "alt": "Couple Photos at Cliff or Lake"
      },
      {
        "src": "/admin_image/wid/17947368101651569454HIM07079-copy.jpg",
        "alt": "Mountain Couple Shoot Ideas with Props"
      }
    ],
    "content": {
      "desc4": "Pre Wedding Photographers in Delhi NCR",
      "heading1": "Pre Wedding Shoot in Uttarakhand",
      "desc1": "This lovely couple's shoot was done at various locations like Nainital, Jim Corbett, and Saat Taal. Nainital and Saat Taal, The picturesque town, surrounded by the Himalayas, offers an array of stunning locations for a photoshoot. It's also a good idea to plan your photoshoot for the best lighting conditions, such as an early morning or late afternoon, when the sun is low in the sky and the light is soft and warm. Jim Corbett is a preferred and lovely location for the pre-wedding photo shoot, it's a go-to place for couples for their shoot due to its rainforest and beautiful landscapes.",
      "banner1": "/admin_image/wid/banner183570990616520941215.jpg",
      "heading2": "Pre Wedding Photographers in Delhi",
      "desc2": "At Wedding Photo Planet, we make sure that all our clients stay happy with the services and the quality that we provide to the customers. We have a procreative team of photographers that are experts in terms of clicking stunning candids and still photos. This beautiful couple wanted their photoshoot to be done at the gorgeous destination and chose the picture-perfect one, The Jim Corbett. Our team did a fantastic job and the couple was highly impressed with the photos.",
      "heading3": "Pre-wedding Photography at Wedding Photo Planet",
      "desc3": "Our great team selects the best from the best pictures that will make every second memorable. Our best-in-class team of photo and video editors will make sure to make your photos and videos look gorgeous. We suggest you go for an experienced and skillful photography agency like us that will leave you amazed.",
      "banner2": "/admin_image/wid/banner1180385752016520941154.jpg"
    }
  },
  {
    "id": "77",
    "slug": "wedding-photos-bhavneet-gurneet",
    "category": "WEDDING",
    "name": "BHAVNEET & GURNEET",
    "metadata": {
      "title": "BHAVNEET & GURNEET",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image87680815116583107661.jpg",
      "/admin_image/wid/hero_image202748555016583107712.jpg",
      "/admin_image/wid/hero_image156741135916583108394.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/148052590116582989091N3A8421.jpg",
        "alt": "Hire Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/140069991716582989111N3A8423.jpg",
        "alt": "Book Candid Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/143823211316582989131N3A8426.jpg",
        "alt": "Wedding Photography Services Near Me"
      },
      {
        "src": "/admin_image/wid/172728803916582989141N3A8428.jpg",
        "alt": "Cinematic Wedding Videographer"
      },
      {
        "src": "/admin_image/wid/13030193916583845431N3A8421.jpg",
        "alt": "Traditional And Candid Photography Package"
      },
      {
        "src": "/admin_image/wid/106222791216583845431N3A8423.jpg",
        "alt": "Wedding Photo And Video Combo"
      },
      {
        "src": "/admin_image/wid/138714637516583845431N3A8426.jpg",
        "alt": "Drone Wedding Photography Service"
      },
      {
        "src": "/admin_image/wid/44346333316583845431N3A8428.jpg",
        "alt": "Budget Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/91016621516583845431N3A8439.jpg",
        "alt": "Premium Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/34524037916583845431N3A8444.jpg",
        "alt": "Best Wedding Photographer In Delhi"
      },
      {
        "src": "/admin_image/wid/40994134416583845431N3A8450.jpg",
        "alt": "Wedding Photographers In Delhi NCR"
      },
      {
        "src": "/admin_image/wid/28568243816583845431N3A8461.jpg",
        "alt": "Pre Wedding Shoot Delhi NCR"
      },
      {
        "src": "/admin_image/wid/148114624416583845431N3A8465.jpg",
        "alt": "Pre Wedding Shoot In Jaipur"
      },
      {
        "src": "/admin_image/wid/74144834616583845431N3A8469.jpg",
        "alt": "Local Wedding Photographers Near Me"
      },
      {
        "src": "/admin_image/wid/140631864716583845531N3A8522.jpg",
        "alt": "Top Candid Photographers In Delhi NCR"
      },
      {
        "src": "/admin_image/wid/167319852316583845531N3A8532.jpg",
        "alt": "Destination Wedding Photographer In India"
      },
      {
        "src": "/admin_image/wid/128786742716583845531N3A8537.jpg",
        "alt": "Affordable Wedding Photographers Near Me"
      },
      {
        "src": "/admin_image/wid/107562451416583845531N3A8542.jpg",
        "alt": "Wedding Photographer Near [Venue/Locality]"
      },
      {
        "src": "/admin_image/wid/170576538216583845531N3A8554.jpg",
        "alt": "Wedding Photography Price List"
      },
      {
        "src": "/admin_image/wid/47670231916583845531N3A8555.jpg",
        "alt": "Wedding Videography Cost"
      },
      {
        "src": "/admin_image/wid/138826370316583845531N3A8589.jpg",
        "alt": "Pre Wedding Shoot Packages With Price"
      },
      {
        "src": "/admin_image/wid/147878869316583845531N3A8594.jpg",
        "alt": "Affordable Pre Wedding Shoot Near Me"
      },
      {
        "src": "/admin_image/wid/156633977216583845531N3A8595.jpg",
        "alt": "Candid Photography Under 50K"
      },
      {
        "src": "/admin_image/wid/125209900816583845531N3A8598.jpg",
        "alt": "Wedding Shoot Price In Delhi NCR"
      },
      {
        "src": "/admin_image/wid/103657515616583845631N3A8600.jpg",
        "alt": "Pre Wedding Photoshoot Price"
      },
      {
        "src": "/admin_image/wid/214378897816583845631N3A8603.jpg",
        "alt": "Cinematic Shoot Under 30K"
      },
      {
        "src": "/admin_image/wid/13726305516583845631N3A8606.jpg",
        "alt": "Wedding Photography Under Budget"
      },
      {
        "src": "/admin_image/wid/180927297516583845631N3A8609.jpg",
        "alt": "Photography And Videography Package Price"
      },
      {
        "src": "/admin_image/wid/87914781916583845631N3A8621.jpg",
        "alt": "Candid Wedding Photography"
      },
      {
        "src": "/admin_image/wid/81535004016583845631N3A8634.jpg",
        "alt": "Cinematic Wedding Video"
      },
      {
        "src": "/admin_image/wid/125975725016583845631N3A8635.jpg",
        "alt": "Modern Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/136954684716583845631N3A8662.jpg",
        "alt": "Creative Wedding Photo Ideas"
      },
      {
        "src": "/admin_image/wid/32216491716583845631N3A8664.jpg",
        "alt": "Photojournalistic Wedding Photography"
      },
      {
        "src": "/admin_image/wid/54742871616583845631N3A8667.jpg",
        "alt": "Pre Wedding Shoot With Drone"
      },
      {
        "src": "/admin_image/wid/180540426316583845731N3A8672.jpg",
        "alt": "Natural Light Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/152721552616583845731N3A8675.jpg",
        "alt": "Emotional Wedding Photography Style"
      },
      {
        "src": "/admin_image/wid/149845841016583845731N3A8691.jpg",
        "alt": "Indian Wedding Photography Team"
      },
      {
        "src": "/admin_image/wid/126183842316583845731N3A8694.jpg",
        "alt": "Best Wedding Photography Style"
      },
      {
        "src": "/admin_image/wid/149000437316583845731N3A8698.jpg",
        "alt": "Pre Wedding Shoot Price"
      },
      {
        "src": "/admin_image/wid/97825933316583845731N3A8702.jpg",
        "alt": "Pre Wedding Photography Cost"
      },
      {
        "src": "/admin_image/wid/134243739016583845731N3A8714.jpg",
        "alt": "Pre Wedding Shoot Under 10K"
      },
      {
        "src": "/admin_image/wid/109846502816583845731N3A8724.jpg",
        "alt": "Affordable Pre Wedding Photography Packages"
      },
      {
        "src": "/admin_image/wid/48848525716583845731N3A8729.jpg",
        "alt": "Cinematic Pre Wedding Shoot Under 30K"
      },
      {
        "src": "/admin_image/wid/14298375116583845731N3A8733.jpg",
        "alt": "Pre Wedding Shoot Packages With Price"
      },
      {
        "src": "/admin_image/wid/100064181016583845841N3A8753.jpg",
        "alt": "Budget Pre Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/40088658816583845841N3A8793.jpg",
        "alt": "Best Pre Wedding Shoot Under 20K"
      },
      {
        "src": "/admin_image/wid/97583974116583845841N3A8795.jpg",
        "alt": "Cheap Pre Wedding Shoot Near Me"
      },
      {
        "src": "/admin_image/wid/142470442116583845841N3A8845.jpg",
        "alt": "Pre Wedding Shoot Price In Delhi NCR"
      },
      {
        "src": "/admin_image/wid/132989482916583845841N3A8847.jpg",
        "alt": "Candid Pre Wedding Photography"
      },
      {
        "src": "/admin_image/wid/159485352816583845841N3A8857.jpg",
        "alt": "Cinematic Pre Wedding Video"
      },
      {
        "src": "/admin_image/wid/202350197716583845841N3A8864.jpg",
        "alt": "Creative Pre Wedding Shoot Ideas"
      },
      {
        "src": "/admin_image/wid/45875535716583845841N3A8941.jpg",
        "alt": "Drone Pre Wedding Photography"
      },
      {
        "src": "/admin_image/wid/50532265916583845841N3A9037.jpg",
        "alt": "Traditional Pre Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/122444453716583845841N3A9081.jpg",
        "alt": "Natural Light Pre Wedding Photography"
      },
      {
        "src": "/admin_image/wid/166023151816583845991N3A8793.jpg",
        "alt": "Pre Wedding Shoot With Props"
      },
      {
        "src": "/admin_image/wid/28923537016583845991N3A8795.jpg",
        "alt": "Romantic Couple Shoot Poses"
      },
      {
        "src": "/admin_image/wid/199226701416583845991N3A8845.jpg",
        "alt": "Pre Wedding Shoot With Music"
      },
      {
        "src": "/admin_image/wid/187432169016583845991N3A8847.jpg",
        "alt": "Thematic Pre Wedding Photography"
      },
      {
        "src": "/admin_image/wid/124581790316583845991N3A8857.jpg",
        "alt": "Drone Pre Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/42884744316583848191N3A8864.jpg",
        "alt": "Aerial Wedding Photography"
      },
      {
        "src": "/admin_image/wid/62016512816583848191N3A8941.jpg",
        "alt": "Drone Wedding Videography"
      },
      {
        "src": "/admin_image/wid/210170970216583848191N3A9037.jpg",
        "alt": "Cinematic Drone Shots For Weddings"
      },
      {
        "src": "/admin_image/wid/53167386816583848191N3A9081.jpg",
        "alt": "Pre Wedding Shoot With Drone"
      },
      {
        "src": "/admin_image/wid/91402195816583858821N3A9083.jpg",
        "alt": "Drone Photography In Wedding Events"
      },
      {
        "src": "/admin_image/wid/51487793816583858821N3A9085.jpg",
        "alt": "Top Angle Wedding Shots"
      },
      {
        "src": "/admin_image/wid/50538576016583858821N3A9088.jpg",
        "alt": "Drone Shots For Couple Shoot"
      },
      {
        "src": "/admin_image/wid/105010007716583858821N3A9090.jpg",
        "alt": "Drone Pre Wedding Shoot In Mountains"
      },
      {
        "src": "/admin_image/wid/179192168816583858821N3A9095.jpg",
        "alt": "Aerial View Of Wedding Venue"
      },
      {
        "src": "/admin_image/wid/45582393316583858821N3A9099.jpg",
        "alt": "Cinematic Pre Wedding Video"
      },
      {
        "src": "/admin_image/wid/124710766016583858821N3A9103.jpg",
        "alt": "Wedding Film Style Photography"
      },
      {
        "src": "/admin_image/wid/22384902916583858821N3A9110.jpg",
        "alt": "Cinematic Couple Shoot"
      },
      {
        "src": "/admin_image/wid/155074835316583858821N3A9119.jpg",
        "alt": "Best Photographer Shadi Ke Liye"
      },
      {
        "src": "/admin_image/wid/45113219916583858821N3A9127.jpg",
        "alt": "Photographer For Pre Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/103608061016583859271N3A9133.jpg",
        "alt": "Pre Wedding Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/198284658016583859271N3A9134.jpg",
        "alt": "Best Pre Wedding Photographer In Delhi"
      },
      {
        "src": "/admin_image/wid/47845500116583859271N3A9203.jpg",
        "alt": "Photographer And Videographer For Pre Wedding"
      },
      {
        "src": "/admin_image/wid/99249834916583859271N3A9226.jpg",
        "alt": "Photo Video Shoot For Pre Wedding"
      },
      {
        "src": "/admin_image/wid/24308568216583859271N3A9249.jpg",
        "alt": "Pre Wedding Drone Video Shoot"
      },
      {
        "src": "/admin_image/wid/19920900591658385948VSP00579.jpg",
        "alt": "Full Pre Wedding Photo And Video Package"
      },
      {
        "src": "/admin_image/wid/9500348511658385948VSP00584.jpg",
        "alt": "Photo Aur Video Dono Wala Pre Wedding Package"
      },
      {
        "src": "/admin_image/wid/9540259851658385948VSP00611.jpg",
        "alt": "Bridal Pre Wedding Photoshoot"
      },
      {
        "src": "/admin_image/wid/13923997661658385948VSP00630.jpg",
        "alt": "Bride Solo Photoshoot Ideas"
      },
      {
        "src": "/admin_image/wid/8616064841658385948VSP00644.jpg",
        "alt": "Bride Posing For Pre Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/19227151221658385948VSP00665.jpg",
        "alt": "Elegant Bridal Portrait Photography"
      },
      {
        "src": "/admin_image/wid/912390411658385948VSP00672.jpg",
        "alt": "Bride In Lehenga Pre Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/605171881658385957VSP00681.jpg",
        "alt": "Candid Solo Bride Photography"
      },
      {
        "src": "/admin_image/wid/4751176861658385957VSP00702.jpg",
        "alt": "Traditional Bride Portrait Shoot"
      },
      {
        "src": "/admin_image/wid/2336910441658385957VSP00703.jpg",
        "alt": "Shaadi Se Pehle Dulhan Ka Shoot"
      },
      {
        "src": "/admin_image/wid/20218001281658386065VSP00719.jpg",
        "alt": "Bridal Portrait With Jewelry"
      },
      {
        "src": "/admin_image/wid/4677770421658386065VSP00737.jpg",
        "alt": "Royal Bride Photoshoot"
      },
      {
        "src": "/admin_image/wid/6261277711658386065VSP00742.jpg",
        "alt": "Vintage Bridal Look Shoot"
      },
      {
        "src": "/admin_image/wid/14414419731658386065VSP00744.jpg",
        "alt": "Traditional Indian Bride Shoot"
      },
      {
        "src": "/admin_image/wid/8747773001658386065VSP00751.jpg",
        "alt": "Modern Bride In Studio Photoshoot"
      },
      {
        "src": "/admin_image/wid/1066593411658386065VSP00752.jpg",
        "alt": "Wedding Photographer In Uttam Nagar"
      },
      {
        "src": "/admin_image/wid/9261617321658386065VSP00778.jpg",
        "alt": "Pre Wedding Shoot In Uttam Nagar"
      },
      {
        "src": "/admin_image/wid/5609231011658386075VSP00781.jpg",
        "alt": "Candid Photographer Near Uttam Nagar"
      },
      {
        "src": "/admin_image/wid/19802672801658386075VSP00783.jpg",
        "alt": "Pre Wedding Photographer In Raja Puri"
      },
      {
        "src": "/admin_image/wid/15750968971658386075VSP00785.jpg",
        "alt": "Wedding Photographer In Dwarka"
      },
      {
        "src": "/admin_image/wid/5304586871658386075VSP00811.jpg",
        "alt": "Affordable Photographer In Dwarka Sector 7"
      },
      {
        "src": "/admin_image/wid/10950758981658386075VSP00818.jpg",
        "alt": "Wedding Videographer Near Dwarka Mor"
      },
      {
        "src": "/admin_image/wid/14035879031658386075VSP00845.jpg",
        "alt": "Candid Wedding Photography In Dwarka"
      },
      {
        "src": "/admin_image/wid/19029130531658386087VSP00902.jpg",
        "alt": "Drone Wedding Shoot Near Raja Puri"
      },
      {
        "src": "/admin_image/wid/20228810431658386087VSP00909.jpg",
        "alt": "Cinematic Wedding Photography Near Raja Puri"
      },
      {
        "src": "/admin_image/wid/18153704491658386087VSP00928.jpg",
        "alt": "Solo Bridal Photoshoot"
      },
      {
        "src": "/admin_image/wid/17170650741658386087VSP00934.jpg",
        "alt": "Bridal Portrait Photoshoot"
      },
      {
        "src": "/admin_image/wid/5074131191658386087VSP00958.jpg",
        "alt": "Bride Solo Pre Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/1519172551658386087VSP00974.jpg",
        "alt": "Solo Bride Photoshoot Ideas"
      },
      {
        "src": "/admin_image/wid/9652410981658386097VSP00975.jpg",
        "alt": "Candid Bridal Photography"
      },
      {
        "src": "/admin_image/wid/20565332041658386097VSP00977.jpg",
        "alt": "Wedding Day Solo Shoot For Bride"
      },
      {
        "src": "/admin_image/wid/10166473631658386097VSP00982.jpg",
        "alt": "Bridal Look Photoshoot"
      },
      {
        "src": "/admin_image/wid/5642589721658386097VSP00984.jpg",
        "alt": "Bride Solo Shoot With Lehenga"
      },
      {
        "src": "/admin_image/wid/11492338201658386097VSP01022.jpg",
        "alt": "Solo Bride Photography Near Me"
      },
      {
        "src": "/admin_image/wid/18705218691658386097VSP01024.jpg",
        "alt": "Royal Bride Solo Photoshoot"
      },
      {
        "src": "/admin_image/wid/16305154541658386097VSP01028.jpg",
        "alt": "Traditional Bridal Portrait Photography"
      },
      {
        "src": "/admin_image/wid/11945686821658386106VSP01038.jpg",
        "alt": "Veil Shot Bride Portrait"
      },
      {
        "src": "/admin_image/wid/11788862031658386106VSP01044.jpg",
        "alt": "Professional Marriage Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/8346390631658386106VSP01059.jpg",
        "alt": "Candid Marriage Photography"
      },
      {
        "src": "/admin_image/wid/11027304081658386106VSP01060.jpg",
        "alt": "Indian Style Marriage Photography"
      },
      {
        "src": "/admin_image/wid/1994395101658386106VSP01068.jpg",
        "alt": "Best Marriage Photographer In delhi"
      },
      {
        "src": "/admin_image/wid/5874497061658386106VSP01077.jpg",
        "alt": "Photographer And Videographer For Marriage"
      },
      {
        "src": "/admin_image/wid/6459536881658386118VSP01143.jpg",
        "alt": "Cinematic Photography And Videography Combo"
      },
      {
        "src": "/admin_image/wid/13396247151658386118VSP01148.jpg",
        "alt": "Creative Wedding Photo Ideas"
      },
      {
        "src": "/admin_image/wid/14498643981658386118VSP01162.jpg",
        "alt": "Couple Wedding Pose Ideas"
      },
      {
        "src": "/admin_image/wid/14989977321658386118VSP01173.jpg",
        "alt": "Unique Bridal Portrait Ideas"
      },
      {
        "src": "/admin_image/wid/2617528911658386118VSP01227.jpg",
        "alt": "Trendy Indian Wedding Photo Ideas"
      },
      {
        "src": "/admin_image/wid/15394344351658386118VSP01229.jpg",
        "alt": "Cinematic Wedding Videographer Near Me"
      },
      {
        "src": "/admin_image/wid/19027295841658386118VSP01231.jpg",
        "alt": "Professional Wedding Videography Services"
      },
      {
        "src": "/admin_image/wid/15823714111658386128VSP01232.jpg",
        "alt": "Candid Wedding Videographer"
      },
      {
        "src": "/admin_image/wid/18686430761658386128VSP01236.jpg",
        "alt": "Drone Wedding Videographer"
      },
      {
        "src": "/admin_image/wid/8891571731658386128VSP01237.jpg",
        "alt": "Natural Moment Wedding Photography"
      },
      {
        "src": "/admin_image/wid/11690525261658386128VSP01244.jpg",
        "alt": "Destination Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/3722051471658386128VSP01247.jpg",
        "alt": "Udaipur Destination Wedding Photography"
      },
      {
        "src": "/admin_image/wid/6001068791658386128VSP01259.jpg",
        "alt": "Goa Destination Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/15185357391658386128VSP01269.jpg",
        "alt": "Traditional Indian Wedding Photography"
      },
      {
        "src": "/admin_image/wid/8032010591658386138VSP01277.jpg",
        "alt": "Indian Bridal Portrait Photography"
      },
      {
        "src": "/admin_image/wid/8505964901658386138VSP01282.jpg",
        "alt": "Best Wedding Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/2107759701658386138VSP01286.jpg",
        "alt": "Affordable Wedding Photographer Nearby"
      },
      {
        "src": "/admin_image/wid/14612312701658386138VSP01289.jpg",
        "alt": "Top Rated Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/11880083581658386138VSP01292.jpg",
        "alt": "Local Wedding Photography Services"
      },
      {
        "src": "/admin_image/wid/4783807721658386138VSP01302.jpg",
        "alt": "Wedding Photographer With Portfolio Near Me"
      },
      {
        "src": "/admin_image/wid/931456121658386151VSP01307.jpg",
        "alt": "Best Wedding Photography Team Near Me"
      },
      {
        "src": "/admin_image/wid/17385925121658386151VSP01316.jpg",
        "alt": "Top Wedding Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/7969454871658386151VSP01327.jpg",
        "alt": "Best Rated Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/2721616161658386151VSP01351.jpg",
        "alt": "Famous Wedding Photographer Nearby"
      },
      {
        "src": "/admin_image/wid/15967838131658386151VSP01352.jpg",
        "alt": "Experienced Wedding Photography Team"
      },
      {
        "src": "/admin_image/wid/2760409671658386151VSP01387.jpg",
        "alt": "Wedding Photography Experts"
      },
      {
        "src": "/admin_image/wid/10263934201658386151VSP01392.jpg",
        "alt": "Verified Wedding Photographers Near Me"
      },
      {
        "src": "/admin_image/wid/18007762941658386160VSP01446.jpg",
        "alt": "Best Wedding Photographer Websites"
      },
      {
        "src": "/admin_image/wid/9899223821658386160VSP01488.jpg",
        "alt": "Famous Wedding Photographer In India"
      },
      {
        "src": "/admin_image/wid/11578940431658386160VSP01515.jpg",
        "alt": "Pre Wedding Shoot Package Price"
      },
      {
        "src": "/admin_image/wid/15305351301658386160VSP01546.jpg",
        "alt": "Pre Wedding Photoshoot Charges"
      },
      {
        "src": "/admin_image/wid/20803253031658386160VSP01563.jpg",
        "alt": "Budget Pre Wedding Shoot Cost"
      },
      {
        "src": "/admin_image/wid/10552637761658386160VSP01571.jpg",
        "alt": "Drone Pre Wedding Video Shoot Price"
      },
      {
        "src": "/admin_image/wid/1465729521658386174VSP01580.jpg",
        "alt": "Pre Wedding Shoot Under 20K"
      },
      {
        "src": "/admin_image/wid/10440024361658386174VSP01617.jpg",
        "alt": "Wedding Shoot Under 20K"
      },
      {
        "src": "/admin_image/wid/16392963091658386174VSP01629.jpg",
        "alt": "Full Package Price For Pre Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/9114227801658386174VSP01645.jpg",
        "alt": "Low Cost Pre Wedding Shoot Packages"
      },
      {
        "src": "/admin_image/wid/8313345431658386174VSP01659.jpg",
        "alt": "Pre Wedding Shoot With Drone Price"
      },
      {
        "src": "/admin_image/wid/4732585921658386174VSP02012.jpg",
        "alt": "Outdoor Pre Wedding Shoot Charges"
      },
      {
        "src": "/admin_image/wid/16906376881658386174VSP02194.jpg",
        "alt": "Affordable Pre Wedding Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/18120648901658386183VSP02390.jpg",
        "alt": "Pre Wedding Shoot Price For Couples"
      },
      {
        "src": "/admin_image/wid/10955826531658386183VSP02396.jpg",
        "alt": "Best Budget Pre Wedding Shoot In Delhi NCR"
      },
      {
        "src": "/admin_image/wid/8643737681658386183VSP02528.jpg",
        "alt": "Cinematic Pre Wedding Shoot Price In Jaipur"
      },
      {
        "src": "/admin_image/wid/1720667311658386183VSP02530.jpg",
        "alt": "Pre Wedding Shoot In Rishikesh With Price"
      },
      {
        "src": "/admin_image/wid/2018826591658386183VSP02603.jpg",
        "alt": "Pre Wedding Photoshoot With Makeup Charges"
      },
      {
        "src": "/admin_image/wid/2218263501658386183VSP02608.jpg",
        "alt": "Complete Pre Wedding Shoot Cost Breakdown"
      },
      {
        "src": "/admin_image/wid/11858532801658386191VSP02749.jpg",
        "alt": "Cheapest Pre Wedding Photography Package"
      },
      {
        "src": "/admin_image/wid/8625169161658386191VSP02760.jpg",
        "alt": "Delhi Pre Wedding Photographer Cost"
      },
      {
        "src": "/admin_image/wid/3882829201658386191VSP02994.jpg",
        "alt": "Pre Wedding Shoot Price With Props And Styling"
      },
      {
        "src": "/admin_image/wid/6953587351658386191VSP03035.jpg",
        "alt": "Couple Shoot Price For Pre Wedding"
      },
      {
        "src": "/admin_image/wid/5482984581658386191VSP03040.jpg",
        "alt": "Luxury Pre Wedding Shoot Package Cost"
      },
      {
        "src": "/admin_image/wid/18339961641658386191VSP03051.jpg",
        "alt": "1 Day Pre Wedding Shoot Price"
      },
      {
        "src": "/admin_image/wid/15500522791658386201VSP03112.jpg",
        "alt": "All Inclusive Pre Wedding Shoot Price"
      },
      {
        "src": "/admin_image/wid/4569695671658386201VSP03114.jpg",
        "alt": "Romantic Couple Pose During Pre-Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/13524669881658386201VSP03121.jpg",
        "alt": "Couple Holding Hands in Scenic Pre-Wedding Location"
      },
      {
        "src": "/admin_image/wid/13686755871658386201VSP03127.jpg",
        "alt": "Candid Laughing Moment of Bride and Groom"
      },
      {
        "src": "/admin_image/wid/13293733851658386201VSP03131.jpg",
        "alt": "Couple Walking Together in Pre-Wedding Outfit"
      },
      {
        "src": "/admin_image/wid/1628279701658386201VSP03150.jpg",
        "alt": "Mountain View Pre-Wedding Couple Pose"
      },
      {
        "src": "/admin_image/wid/208095031658386215VSP03161.jpg",
        "alt": "Bride and Groom Posing Under Fairy Lights"
      },
      {
        "src": "/admin_image/wid/16387042271658386215VSP03201.jpg",
        "alt": "Silhouette Shot of Couple at Sunset"
      },
      {
        "src": "/admin_image/wid/11071644091658386215VSP03226.jpg",
        "alt": "Dramatic Pre-Wedding Couple Shot with Veil"
      },
      {
        "src": "/admin_image/wid/3703474681658386215VSP03252.jpg",
        "alt": "Traditional Outfit Couple Pre-Wedding Pose"
      },
      {
        "src": "/admin_image/wid/2093599971658386215VSP03258.jpg",
        "alt": "Couple Sharing Intimate Eye Contact Pre-Wedding"
      },
      {
        "src": "/admin_image/wid/14453280841658386215VSP03262.jpg",
        "alt": "Fun and Playful Pre-Wedding Shoot Idea"
      },
      {
        "src": "/admin_image/wid/312554001658386223VSP03316.jpg",
        "alt": "Couple Sitting on Staircase Pre-Wedding Photo"
      },
      {
        "src": "/admin_image/wid/9175145611658386223VSP03319.jpg",
        "alt": "Royal Look Pre-Wedding Couple Pose"
      },
      {
        "src": "/admin_image/wid/2382523571658386223VSP03418.jpg",
        "alt": "Black and White Pre-Wedding Couple Portrait"
      },
      {
        "src": "/admin_image/wid/4191422281658386223VSP03423.jpg",
        "alt": "Elegant Couple Posing with Luxury Car"
      },
      {
        "src": "/admin_image/wid/14392771091658386223VSP03432.jpg",
        "alt": "Ethnic Styled Couple Shoot with Props"
      }
    ],
    "content": {
      "desc4": "Wedding photoshoot of Bhavneet and Gurneet was an eventful and emotional experience. The couple's traditional attire, with Gurneet in a beautiful lehenga and Bhavneet in a classic sherwani, added a touch of elegance to the photos. The photographers captured their candid moments and emotions throughout the day, showcasing the love and connection between the couple. The couple's chemistry and love for each other were evident in every photo, making for a truly stunning set of images.",
      "heading1": "Wedding shoot at aravali golf course",
      "desc1": "Wedding Photo Planet offers you the best photographers to capture the beauty of your special day at the picturesque Aravali Golf Course, one of the most sought-after venues for weddings in Delhi. Our team of experts has handpicked a list of top photographers who have extensive experience in capturing the natural beauty and serenity of the Aravali Golf Course in their photography. Whether you choose to have your wedding ceremony in the lush green lawns or in the elegant banquet hall, our photographers will make sure to bring out the best of the venue in their photography. They will work with you to create a collection of images that are truly unique and timeless, that will help you remember your special day forever.",
      "banner1": "/admin_image/wid/banner119421999981658298904VSP00572.jpg",
      "heading2": "Best candid wedding photographers in delhi",
      "desc2": "Our photographers are known for their ability to capture those candid moments that are often missed by traditional photographers. They have the skill and expertise to create a visual story of your wedding day that is both emotional and visually stunning. Whether you're looking for traditional or contemporary style, our candid wedding photographers will work with you to create a collection of images that perfectly capture the essence of your love story and the beauty of your special day. Trust us to provide you with the best candid wedding photography services in Delhi.",
      "heading3": "Wedding photography packages in delhi",
      "desc3": "Wedding Photo Planet offers a wide range of wedding photography packages in Delhi to suit your needs and budget. Our team of experts has carefully curated a variety of packages that include everything from traditional and candid photography to wedding shoots and videography. Whether you're looking for full-day coverage or just a few hours, we have a package that will fit your requirements.",
      "banner2": "/admin_image/wid/banner119788475551658298907VSP00630.jpg"
    }
  },
  {
    "id": "78",
    "slug": "wedding-photos-kunal-anuradha",
    "category": "WEDDING",
    "name": "Kunal & Anuradha",
    "metadata": {
      "title": "Kunal & Anuradha",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image6323842641658299912DSC06702.jpg",
      "/admin_image/wid/hero_image19542654431658299913DSC06785.jpg",
      "/admin_image/wid/hero_image4479630481658299916DSC06797.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/18407810111658299910DSC06549.jpg",
        "alt": "Wedding Photography Services Delhi NCR"
      },
      {
        "src": "/admin_image/wid/3163610401660631404VSP02222.jpg",
        "alt": "Top Wedding Photographers Near Me"
      },
      {
        "src": "/admin_image/wid/16721023221660631404VSP02231.jpg",
        "alt": "Affordable Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/2238622031660631404VSP02251.jpg",
        "alt": "Local Wedding Photography Studio"
      },
      {
        "src": "/admin_image/wid/1266139051660631404VSP02259.jpg",
        "alt": "Wedding Photo Experts"
      },
      {
        "src": "/admin_image/wid/7668183671660631404VSP02277.jpg",
        "alt": "Best Rated Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/4468790641660631404VSP02293.jpg",
        "alt": "Award-Winning Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/4809662711660631412VSP02310.jpg",
        "alt": "Most Recommended Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/18390712071660631412VSP02352.jpg",
        "alt": "Verified Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/12179420661660631412VSP02405.jpg",
        "alt": "Premium Wedding Photography Packages"
      },
      {
        "src": "/admin_image/wid/7563598581660631412VSP02417.jpg",
        "alt": "Candid Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/8420746361660631412VSP02419.jpg",
        "alt": "Natural Wedding Photography"
      },
      {
        "src": "/admin_image/wid/15330899411660631413VSP02432.jpg",
        "alt": "Candid Couple Photoshoot"
      },
      {
        "src": "/admin_image/wid/11827136921660631420VSP02455.jpg",
        "alt": "Artistic Candid Photography"
      },
      {
        "src": "/admin_image/wid/16298312341660631420VSP02466.jpg",
        "alt": "Documentary Style Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/14651273021660631420VSP02476.jpg",
        "alt": "Wedding Day Photographer"
      },
      {
        "src": "/admin_image/wid/12316276471660631420VSP02488.jpg",
        "alt": "Full Coverage Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/14323403971660631420VSP02492.jpg",
        "alt": "Top Rated Wedding Photographers Delhi"
      },
      {
        "src": "/admin_image/wid/8087905321660631420VSP02501.jpg",
        "alt": "Delhi's Best Wedding Photography Experts"
      },
      {
        "src": "/admin_image/wid/3856277221660631437VSP02735.jpg",
        "alt": "Professional Wedding Photographers In Delhi"
      },
      {
        "src": "/admin_image/wid/1717308671660631437VSP02799.jpg",
        "alt": "Delhi’s Top Photographers"
      },
      {
        "src": "/admin_image/wid/2874450721660631437VSP02808.jpg",
        "alt": "Best Photography Studio In Delhi"
      },
      {
        "src": "/admin_image/wid/15325345831660631437VSP02824.jpg",
        "alt": "Top Candid Photographer Delhi"
      },
      {
        "src": "/admin_image/wid/19702233321660631437VSP02889.jpg",
        "alt": "Wedding Photography Delhi NCR"
      },
      {
        "src": "/admin_image/wid/11708357541660631437VSP02943.jpg",
        "alt": "Cinematic Wedding Shoots In NCR"
      },
      {
        "src": "/admin_image/wid/13417728941660631472VSP03116.jpg",
        "alt": "Popular Wedding Photographers Delhi NCR"
      },
      {
        "src": "/admin_image/wid/17909671671660631472VSP03232.jpg",
        "alt": "Budget Wedding Photographer NCR Region"
      },
      {
        "src": "/admin_image/wid/2574705391660631472VSP03241.jpg",
        "alt": "Candid Wedding Experts In NCR"
      },
      {
        "src": "/admin_image/wid/914720061660631472VSP03250.jpg",
        "alt": "Best Natural Photographers In Delhi NCR"
      },
      {
        "src": "/admin_image/wid/18746986481660631472VSP03262.jpg",
        "alt": "Affordable Candid Photography NCR"
      },
      {
        "src": "/admin_image/wid/15575747771660631472VSP03268.jpg",
        "alt": "Artistic Wedding Moments Delhi NCR"
      },
      {
        "src": "/admin_image/wid/16029124621660631484VSP03277.jpg",
        "alt": "Pre Wedding Photoshoot In NCR"
      },
      {
        "src": "/admin_image/wid/13819027771660631484VSP03316.jpg",
        "alt": "Romantic Pre Wedding Shoot Delhi NCR"
      },
      {
        "src": "/admin_image/wid/1046647021660631484VSP03336.jpg",
        "alt": "Outdoor Couple Shoot In NCR"
      },
      {
        "src": "/admin_image/wid/7626948661660631484VSP03338.jpg",
        "alt": "Cinematic Pre Wedding NCR"
      },
      {
        "src": "/admin_image/wid/7223484931660631484VSP03341.jpg",
        "alt": "Pre Wedding Locations Near Delhi NCR"
      },
      {
        "src": "/admin_image/wid/21435340711660631484VSP03372.jpg",
        "alt": "Destination Pre Wedding Shoot Jaipur"
      },
      {
        "src": "/admin_image/wid/17374208861660631495VSP03391.jpg",
        "alt": "Royal Theme Pre Wedding Jaipur"
      },
      {
        "src": "/admin_image/wid/5967646081660631495VSP03394.jpg",
        "alt": "Pink City Couple Shoot"
      },
      {
        "src": "/admin_image/wid/16399798571660631495VSP03396.jpg",
        "alt": "Fort Pre Wedding Shoot Jaipur"
      },
      {
        "src": "/admin_image/wid/3864368301660631495VSP03400.jpg",
        "alt": "River View Pre Wedding Rishikesh"
      },
      {
        "src": "/admin_image/wid/14707027991660631495VSP03419.jpg",
        "alt": "Pre Wedding Shoot With Ganga View"
      },
      {
        "src": "/admin_image/wid/6589749501660631495VSP03453.jpg",
        "alt": "Hillside Couple Photoshoot Rishikesh"
      },
      {
        "src": "/admin_image/wid/8113527131660631504VSP03468.jpg",
        "alt": "Pre Wedding Photography In Rishikesh"
      },
      {
        "src": "/admin_image/wid/20497024321660631504VSP03486.jpg",
        "alt": "Nature Pre Wedding Shoot Rishikesh"
      },
      {
        "src": "/admin_image/wid/4222456411660631504VSP03506.jpg",
        "alt": "Natural Wedding Photography"
      },
      {
        "src": "/admin_image/wid/12573365851660631504VSP03517.jpg",
        "alt": "Emotive Candid Photoshoot"
      },
      {
        "src": "/admin_image/wid/7535479061660631504VSP03526.jpg",
        "alt": "Cost Of Pre Wedding Photoshoot"
      },
      {
        "src": "/admin_image/wid/10302996851660631504VSP03553.jpg",
        "alt": "Pre Wedding Shoot Budget Ideas"
      },
      {
        "src": "/admin_image/wid/12368621291660631515VSP03774.jpg",
        "alt": "Delhi Pre Wedding Photography Charges"
      },
      {
        "src": "/admin_image/wid/19206241501660631515VSP03822.jpg",
        "alt": "Pre Wedding Photo Packages Price"
      },
      {
        "src": "/admin_image/wid/3694416151660631515VSP03834.jpg",
        "alt": "How Much Does A Pre Wedding Shoot Cost"
      },
      {
        "src": "/admin_image/wid/3827445721660631515VSP03897.jpg",
        "alt": "Best Photographers For Shaadi Delhi NCR"
      },
      {
        "src": "/admin_image/wid/11914899951660631515VSP03906.jpg",
        "alt": "Wedding Photography Shoot Ideas"
      },
      {
        "src": "/admin_image/wid/3748575421660631515VSP03920.jpg",
        "alt": "Candid Wedding Photo Shoot"
      },
      {
        "src": "/admin_image/wid/11095333331660631515VSP03923.jpg",
        "alt": "Traditional Indian Wedding Photoshoot"
      },
      {
        "src": "/admin_image/wid/20315274801660631515VSP03930.jpg",
        "alt": "Couple Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/11041096371660631515VSP03948.jpg",
        "alt": "Creative Wedding Photography Styles"
      },
      {
        "src": "/admin_image/wid/2879664011660634413DSC05316.jpg",
        "alt": "Outdoor Wedding Photo Shoot"
      },
      {
        "src": "/admin_image/wid/8572112391660634413DSC05322.jpg",
        "alt": "Wedding Ceremony Photoshoot"
      },
      {
        "src": "/admin_image/wid/2643335221660634413DSC05329.jpg",
        "alt": "Bridal Portrait Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/19656408281660634413DSC05340.jpg",
        "alt": "Groom"
      },
      {
        "src": "/admin_image/wid/16202398831660634413DSC05352.jpg",
        "alt": "Cinematic Wedding Photo Session"
      },
      {
        "src": "/admin_image/wid/17931842181660634413DSC05356.jpg",
        "alt": "Wedding Shoot With Drone"
      },
      {
        "src": "/admin_image/wid/9088353201660634421DSC05366.jpg",
        "alt": "Destination Wedding Photoshoot"
      },
      {
        "src": "/admin_image/wid/11603386271660634421DSC05466.jpg",
        "alt": "Budget Wedding Photoshoot Packages"
      },
      {
        "src": "/admin_image/wid/181826901660634421DSC05475.jpg",
        "alt": "Pre Wedding Photoshoot Price"
      },
      {
        "src": "/admin_image/wid/18655420331660634421DSC05479.jpg",
        "alt": "Pre Wedding Shoot Under 10,000"
      },
      {
        "src": "/admin_image/wid/1584885671660634421DSC05482.jpg",
        "alt": "Affordable Pre Wedding Shoot Packages"
      },
      {
        "src": "/admin_image/wid/5542280341660634427DSC05487.jpg",
        "alt": "Low Budget Pre Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/13249099751660634427DSC05493.jpg",
        "alt": "Best Budget Pre Wedding Photography"
      },
      {
        "src": "/admin_image/wid/19250620731660634427DSC05494.jpg",
        "alt": "How Much Does A Pre Wedding Shoot Cost?"
      },
      {
        "src": "/admin_image/wid/18374409701660634427DSC05497.jpg",
        "alt": "Cheapest Pre Wedding Shoot In Delhi"
      },
      {
        "src": "/admin_image/wid/17237315341660634427DSC05507.jpg",
        "alt": "Full Pre Wedding Shoot Package Cost"
      },
      {
        "src": "/admin_image/wid/1098471071660634427DSC05518.jpg",
        "alt": "Budget Pre Wedding Photography Near Me"
      },
      {
        "src": "/admin_image/wid/1926593311660634440DSC05522.jpg",
        "alt": "Pre Wedding Shoot Charges With Video"
      },
      {
        "src": "/admin_image/wid/12933623971660634440DSC05534.jpg",
        "alt": "Drone Pre Wedding Shoot Price"
      },
      {
        "src": "/admin_image/wid/14088823961660634440DSC05602.jpg",
        "alt": "Aerial Pre Wedding Videography"
      },
      {
        "src": "/admin_image/wid/13533549131660634440DSC05627.jpg",
        "alt": "Cinematic Drone Couple Shoot"
      },
      {
        "src": "/admin_image/wid/7153533131660634440DSC05640.jpg",
        "alt": "Drone Shoot For Pre Wedding Under Budget"
      },
      {
        "src": "/admin_image/wid/15505607091660634440DSC05774.jpg",
        "alt": "Pre Wedding Shoot With Drone In Delhi"
      },
      {
        "src": "/admin_image/wid/12464354061660634449VSP00055.jpg",
        "alt": "Luxury Drone Pre Wedding Packages"
      },
      {
        "src": "/admin_image/wid/8577748881660634449VSP00297.jpg",
        "alt": "Hilltop Drone Shoot Pre Wedding"
      },
      {
        "src": "/admin_image/wid/16163278651660634449VSP00877.jpg",
        "alt": "Drone Pre Wedding Shoot Under 20K"
      },
      {
        "src": "/admin_image/wid/18626588901660634449VSP01042.jpg",
        "alt": "Drone Video Shoot For Couples"
      },
      {
        "src": "/admin_image/wid/2341697491660634449VSP01194.jpg",
        "alt": "Best Pre Wedding Locations Near Me"
      },
      {
        "src": "/admin_image/wid/9974732531660634449VSP01203.jpg",
        "alt": "Pre Wedding Shoot In Uttam Nagar"
      },
      {
        "src": "/admin_image/wid/11327454301660634459VSP01401.jpg",
        "alt": "Romantic couple pose during pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/20522690381660634459VSP01418.jpg",
        "alt": "Bride and groom holding hands in scenic location"
      },
      {
        "src": "/admin_image/wid/4887878051660634459VSP01467.jpg",
        "alt": "Couple smiling candidly during golden hour"
      },
      {
        "src": "/admin_image/wid/14326428611660634459VSP01470.jpg",
        "alt": "Pre-wedding couple walking in traditional outfits"
      },
      {
        "src": "/admin_image/wid/19122489271660634459VSP01573.jpg",
        "alt": "Couple laughing together in casual pre-wedding attire"
      },
      {
        "src": "/admin_image/wid/9608164161660634459VSP01718.jpg",
        "alt": "Groom lifting bride during pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/15406113821660634474VSP01720.jpg",
        "alt": "Pre-wedding shoot in open green field"
      },
      {
        "src": "/admin_image/wid/11929356141660634474VSP02231.jpg",
        "alt": "Couple posing in front of heritage monument"
      },
      {
        "src": "/admin_image/wid/16384729561660634474VSP08398.jpg",
        "alt": "Hilltop couple pose with scenic mountain view"
      },
      {
        "src": "/admin_image/wid/15451645681660634474VSP08419.jpg",
        "alt": "Pre-wedding shoot near lake at sunset"
      },
      {
        "src": "/admin_image/wid/7349927231660634474VSP08670.jpg",
        "alt": "Couple shoot at royal palace location"
      },
      {
        "src": "/admin_image/wid/18266214681660634474VSP08887.jpg",
        "alt": "Artistic couple pose with urban backdrop"
      },
      {
        "src": "/admin_image/wid/14882115301660634485VSP08889.jpg",
        "alt": "Pre-wedding shoot under fairy lights at night"
      },
      {
        "src": "/admin_image/wid/16284005581660634485VSP08891.jpg",
        "alt": "Drone shot of pre-wedding couple holding hands"
      },
      {
        "src": "/admin_image/wid/425364231660634485VSP09221.jpg",
        "alt": "Aerial view of pre-wedding couple in nature"
      },
      {
        "src": "/admin_image/wid/6144028151660634485VSP09334.jpg",
        "alt": "Cinematic wide-angle couple pose on red carpet"
      },
      {
        "src": "/admin_image/wid/418234521660634485VSP09766.jpg",
        "alt": "Creative pre-wedding drone photography"
      },
      {
        "src": "/admin_image/wid/18538548331660634485VSP09895.jpg",
        "alt": "Slow-motion inspired romantic couple pose"
      },
      {
        "src": "/admin_image/wid/13885763281660634495VSP09962.jpg",
        "alt": "Traditional Indian couple shoot pose"
      },
      {
        "src": "/admin_image/wid/8490725841660636947DSC05850.jpg",
        "alt": "Classic black and white pre-wedding portrait"
      },
      {
        "src": "/admin_image/wid/15070862581660636947DSC06636.jpg",
        "alt": "Modern themed couple photoshoot outdoors"
      },
      {
        "src": "/admin_image/wid/7903984541660636947DSC06637.jpg",
        "alt": "Candid Photographer For Bridal Shoot"
      },
      {
        "src": "/admin_image/wid/19988639771660636947DSC06639.jpg",
        "alt": "Wedding Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/6272760721660636947DSC06750.jpg",
        "alt": "Wedding Photography Packages For Brides"
      },
      {
        "src": "/admin_image/wid/7077944161660636947DSC06754.jpg",
        "alt": "Bridal Photoshoot Photographer In My City"
      },
      {
        "src": "/admin_image/wid/7275015771660637047DSC06756.jpg",
        "alt": "Solo Pre-Wedding Shoot For Bride"
      },
      {
        "src": "/admin_image/wid/445158781660637047DSC06774.jpg",
        "alt": "Pre-Wedding Bridal Portrait Photographer"
      },
      {
        "src": "/admin_image/wid/15874732721660637047DSC06775.jpg",
        "alt": "Pre-Wedding Bridal Portrait Photographer"
      },
      {
        "src": "/admin_image/wid/7006546561660637047DSC06782.jpg",
        "alt": "Budget Pre-Wedding Photoshoot For Bride"
      },
      {
        "src": "/admin_image/wid/15712346551660637047DSC06784.jpg",
        "alt": "Drone Pre-Wedding Shoot For Bride Only"
      },
      {
        "src": "/admin_image/wid/14673487341660637047DSC06785.jpg",
        "alt": "Creative Pre-Wedding Shoot Ideas For Brides"
      },
      {
        "src": "/admin_image/wid/17522515461660637053DSC06795.jpg",
        "alt": "Best Locations For Solo Bride Pre-Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/6944242011660637053DSC06797.jpg",
        "alt": "Female Photographer For Pre-Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/21304992871660637053DSC06798.jpg",
        "alt": "Traditional Bridal Pre-Wedding Shoot Package"
      },
      {
        "src": "/admin_image/wid/18687005601660637053DSC06802.jpg",
        "alt": "Pre-Wedding Shoot For Brides In Delhi NCR"
      },
      {
        "src": "/admin_image/wid/5871305621660637053DSC06814.jpg",
        "alt": "Bridal Photographer In Uttam Nagar"
      },
      {
        "src": "/admin_image/wid/204029421660637053DSC06833.jpg",
        "alt": "Solo Bride Shoot Photographer In Rajapuri"
      },
      {
        "src": "/admin_image/wid/6603380421660637061DSC06847.jpg",
        "alt": "Candid Photographer For Bride In Delhi NCR"
      },
      {
        "src": "/admin_image/wid/2529923371660637061DSC06855.jpg",
        "alt": "Bridal Photography Packages Near Me"
      },
      {
        "src": "/admin_image/wid/15096275431660637061DSC06861.jpg",
        "alt": "Romantic pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/15422728941660637061DSC06883.jpg",
        "alt": "Couple eye contact photography"
      },
      {
        "src": "/admin_image/wid/6792416971660637061DSC07082.jpg",
        "alt": "Love-filled gaze photo pose"
      },
      {
        "src": "/admin_image/wid/18769077421660637061DSC07324.jpg",
        "alt": "Hand-in-hand couple photo"
      },
      {
        "src": "/admin_image/wid/761964241660637069DSC07333.jpg",
        "alt": "Walking pose for pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/17217106631660637069DSC07336.jpg",
        "alt": "Candid movement pre-wedding photo"
      },
      {
        "src": "/admin_image/wid/5918332261660637069DSC07359.jpg",
        "alt": "Outdoor couple photography ideas"
      },
      {
        "src": "/admin_image/wid/2891419911660637069DSC07408.jpg",
        "alt": "Romantic walk couple shoot"
      },
      {
        "src": "/admin_image/wid/395888941660637069DSC07411.jpg",
        "alt": "Sunset pre-wedding couple shoot"
      },
      {
        "src": "/admin_image/wid/9240938661660637069DSC07488.jpg",
        "alt": "Golden hour wedding photography"
      },
      {
        "src": "/admin_image/wid/8294368961660637078DSC07568.jpg",
        "alt": "Romantic sunset couple pose"
      },
      {
        "src": "/admin_image/wid/1075833881660637078DSC07574.jpg",
        "alt": "Backlit pre-wedding photo ideas"
      },
      {
        "src": "/admin_image/wid/4793126521660637078DSC07575.jpg",
        "alt": "Sunset silhouette couple shoot"
      },
      {
        "src": "/admin_image/wid/16236991411660637078VSP06858.jpg",
        "alt": "Fun pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/15446163751660637078VSP06859.jpg",
        "alt": "Laughing couple candid pose"
      },
      {
        "src": "/admin_image/wid/389925361660637078VSP06867.jpg",
        "alt": "Casual couple pre-wedding outfit ideas"
      },
      {
        "src": "/admin_image/wid/16786227671660637093VSP07488.jpg",
        "alt": "Natural couple expressions photography"
      },
      {
        "src": "/admin_image/wid/260763811660637093VSP07490.jpg",
        "alt": "Outdoor candid couple shoot"
      },
      {
        "src": "/admin_image/wid/15520551231660637093VSP07501.jpg",
        "alt": "Royal Indian pre-wedding photo"
      },
      {
        "src": "/admin_image/wid/11643366011660637093VSP07504.jpg",
        "alt": "Ethnic outfit couple shoot"
      },
      {
        "src": "/admin_image/wid/15499976541660637093VSP07514.jpg",
        "alt": "Heritage location wedding photography"
      },
      {
        "src": "/admin_image/wid/4950670361660637093VSP07519.jpg",
        "alt": "Traditional Indian pre-wedding look"
      },
      {
        "src": "/admin_image/wid/13024742751660637192VSP07488.jpg",
        "alt": "Royal palace shoot for couples"
      },
      {
        "src": "/admin_image/wid/18594351021660637192VSP07490.jpg",
        "alt": "Lake side pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/8675426021660637192VSP07501.jpg",
        "alt": "Palace location couple shoot"
      },
      {
        "src": "/admin_image/wid/16344843651660637192VSP07504.jpg",
        "alt": "Jaipur pre-wedding photo ideas"
      },
      {
        "src": "/admin_image/wid/16758944031660637192VSP07514.jpg",
        "alt": "Heritage destination pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/12307176041660637192VSP07519.jpg",
        "alt": "Traditional couple photography"
      },
      {
        "src": "/admin_image/wid/16645675651660637200VSP07549.jpg",
        "alt": "Royal couple pre-wedding pose"
      },
      {
        "src": "/admin_image/wid/1043593871660637200VSP07555.jpg",
        "alt": "Creative couple photography"
      },
      {
        "src": "/admin_image/wid/13414267821660637200VSP07565.jpg",
        "alt": "Styled pre-wedding portrait ideas"
      },
      {
        "src": "/admin_image/wid/16856644881660637200VSP07567.jpg",
        "alt": "Conceptual wedding photo shoot"
      },
      {
        "src": "/admin_image/wid/12354993041660637200VSP07702.jpg",
        "alt": "Mood-based pre-wedding photo"
      },
      {
        "src": "/admin_image/wid/9553879391660637200VSP07710.jpg",
        "alt": "Natural couple photography"
      },
      {
        "src": "/admin_image/wid/5497721041660637208VSP07749.jpg",
        "alt": "Motion shot in wedding shoot"
      },
      {
        "src": "/admin_image/wid/12410480761660637208VSP07766.jpg",
        "alt": "Bollywood-style pre-wedding shoot"
      }
    ],
    "content": {
      "desc4": "Wedding photoshoot of Kunal and Anuradha was an eventful and emotional experience. The couple's traditional attire, with Anuradha in a beautiful lehenga and Kunal in a classic sherwani, added a touch of elegance to the photos. The photographers captured their candid moments and emotions throughout the day, showcasing the love and connection between the couple. The couple's chemistry and love for each other were evident in every photo, making for a truly stunning set of images.",
      "heading1": "Beautiful story shoot done at jodhpur",
      "desc1": "Wedding Photo Planet specializes in creating beautiful story shoots for weddings held in Jodhpur. Our team of expert photographers have an eye for capturing the unique culture and heritage of Jodhpur in a way that is both authentic and visually stunning. Jodhpur offers a wide range of stunning venues, from grand palaces and forts to traditional havelis, providing the perfect backdrop for your wedding photography. Our photographers understand how to make the most of these locations and create a collection of images that tell the story of your special day in an emotional and candid way.",
      "banner1": "/admin_image/wid/banner17646879951658299908DSC06571.jpg",
      "heading2": "Best candid and cinematographers in delhi",
      "desc2": "Wedding Photo Planet is your one-stop-shop for finding the best candid and cinematographer for your wedding day. These professionals are known for their ability to capture the real emotions, reactions and moments of your special day in a way that traditional photography can't match. They use their creativity and skills to create a film that showcases the beauty, romance and excitement of your wedding day, giving you a memory that you can cherish for a lifetime. Whether you're looking for traditional or contemporary style, our candid and cinematographer will work with you to create a collection of images and videos that perfectly capture the essence of your love story.",
      "heading3": "Cinematic wedding video film",
      "desc3": "Wedding Photo Planet offers you the best cinematic wedding video films. Our team of professional videographers specialize in creating visually stunning, emotional and cinematic films that tell the story of your special day. They use advanced filming techniques, equipment and editing skills to create a film that showcases the beauty, romance, and emotions of your wedding day in a way that traditional videography can't match. They work closely with you to understand your preferences and style, and create a film that is tailored to your unique story. Whether you're looking for a traditional or contemporary style, our cinematic wedding video films are designed to capture the essence of your love story and the beauty of your special day in a way that will be cherished for a lifetime.",
      "banner2": "/admin_image/wid/banner114516085891658299909DSC06639.jpg"
    }
  },
  {
    "id": "79",
    "slug": "wedding-photos-annanaya-praharsh",
    "category": "WEDDING",
    "name": "Annanaya & Praharsh",
    "metadata": {
      "title": "Annanaya & Praharsh",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image8868228681658302661277246012_2487382644730073_6157878049333645917_n.jpg",
      "/admin_image/wid/hero_image4970051021658302661277246840_2487199508081720_7481706208242826536_n.jpg",
      "/admin_image/wid/hero_image12288620641658302661277254203_2487382641396740_1075052049048552470_n.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/5690979381658302661275977028_2487199478081723_7432958422609167104_n.jpg",
        "alt": "Candid wedding photographer"
      },
      {
        "src": "/admin_image/wid/633205321660809583DSC00101.jpg",
        "alt": "Natural wedding moments captured"
      },
      {
        "src": "/admin_image/wid/13413257261660809583DSC00105.jpg",
        "alt": "Unscripted wedding photography"
      },
      {
        "src": "/admin_image/wid/4506361561660809583DSC00138.jpg",
        "alt": "Real moment wedding shoot"
      },
      {
        "src": "/admin_image/wid/5452606621660809583DSC00162.jpg",
        "alt": "Best candid photography services"
      },
      {
        "src": "/admin_image/wid/15630708911660809583DSC00200.jpg",
        "alt": "Photographer for Indian wedding"
      },
      {
        "src": "/admin_image/wid/4415297911660809583DSC00218.jpg",
        "alt": "Book wedding photographer online"
      },
      {
        "src": "/admin_image/wid/17750096611660809589DSC00220.jpg",
        "alt": "Wedding photography expert"
      },
      {
        "src": "/admin_image/wid/10583402171660809589DSC00222.jpg",
        "alt": "Traditional and candid wedding shoot"
      },
      {
        "src": "/admin_image/wid/18063436271660809589DSC00228.jpg",
        "alt": "Wedding day professional photographer"
      },
      {
        "src": "/admin_image/wid/11677629501660809589DSC00230.jpg",
        "alt": "Pre wedding shoot photographer"
      },
      {
        "src": "/admin_image/wid/12874814991660809589DSC00236.jpg",
        "alt": "Creative pre wedding photo ideas"
      },
      {
        "src": "/admin_image/wid/14026899851660809589DSC00240.jpg",
        "alt": "Outdoor couple pre wedding shoot"
      },
      {
        "src": "/admin_image/wid/16439783621660809594DSC00265.jpg",
        "alt": "Pre wedding shoot packages"
      },
      {
        "src": "/admin_image/wid/1227178271660809594DSC00290.jpg",
        "alt": "Destination pre wedding shoot"
      },
      {
        "src": "/admin_image/wid/8082601481660809594DSC00294.jpg",
        "alt": "Wedding photography Delhi"
      },
      {
        "src": "/admin_image/wid/8865148781660809594DSC00302.jpg",
        "alt": "Top wedding photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/14208181351660809594DSC00325.jpg",
        "alt": "Best photo studio in Delhi for weddings"
      },
      {
        "src": "/admin_image/wid/6395298601660809594DSC00355.jpg",
        "alt": "Candid wedding photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/20247134571660809600DSC00357.jpg",
        "alt": "Professional wedding photography Delhi"
      },
      {
        "src": "/admin_image/wid/7935321871660809600DSC00359.jpg",
        "alt": "Nearby wedding photographer"
      },
      {
        "src": "/admin_image/wid/3335184621660809600DSC00364.jpg",
        "alt": "Local wedding photography services"
      },
      {
        "src": "/admin_image/wid/9428441981660809600DSC00369.jpg",
        "alt": "Find best photographer near me"
      },
      {
        "src": "/admin_image/wid/12921581811660809600DSC00371.jpg",
        "alt": "Photographers near me for marriage"
      },
      {
        "src": "/admin_image/wid/8874826471660809600DSC00374.jpg",
        "alt": "Book wedding photo expert close by"
      },
      {
        "src": "/admin_image/wid/4767231891660809608DSC00386.jpg",
        "alt": "Pre wedding shoot cost in Delhi"
      },
      {
        "src": "/admin_image/wid/2593058781660809608DSC00392.jpg",
        "alt": "Price for couple shoot"
      },
      {
        "src": "/admin_image/wid/275739711660809608DSC00395.jpg",
        "alt": "Pre wedding packages under ₹20,000"
      },
      {
        "src": "/admin_image/wid/1314271481660809608DSC00405.jpg",
        "alt": "Affordable pre wedding price list"
      },
      {
        "src": "/admin_image/wid/5082511331660809608DSC00409.jpg",
        "alt": "Photography charges for pre wedding"
      },
      {
        "src": "/admin_image/wid/16217816371660809608DSC00412.jpg",
        "alt": "Pre Wedding Shoot Cost In Delhi NCR"
      },
      {
        "src": "/admin_image/wid/4741206871660809630DSC00413.jpg",
        "alt": "Pre Wedding Shoot Under ₹15,000"
      },
      {
        "src": "/admin_image/wid/16795437811660809630DSC00416.jpg",
        "alt": "Budget Pre Wedding Packages In Delhi"
      },
      {
        "src": "/admin_image/wid/20291249111660809630DSC00422.jpg",
        "alt": "Full Pre Wedding Shoot Package With Video"
      },
      {
        "src": "/admin_image/wid/17747241221660809630DSC00435.jpg",
        "alt": "Pre Wedding Shoot With Drone Price"
      },
      {
        "src": "/admin_image/wid/6175798971660809630DSC00438.jpg",
        "alt": "Couple Photography Package Deals"
      },
      {
        "src": "/admin_image/wid/11947437971660809630DSC00445.jpg",
        "alt": "Cinematic Pre Wedding Shoot Cost Delhi"
      },
      {
        "src": "/admin_image/wid/9033263201660809640DSC00469.jpg",
        "alt": "Pre Wedding Shoot Package Under ₹10,000"
      },
      {
        "src": "/admin_image/wid/1869302351660809640DSC00471.jpg",
        "alt": "Outdoor Pre Wedding Shoot Cost In delhi"
      },
      {
        "src": "/admin_image/wid/6998199341660809640DSC00473.jpg",
        "alt": "Outdoor Pre Wedding Shoot Cost In Mountain"
      },
      {
        "src": "/admin_image/wid/18912557261660809640DSC00488.jpg",
        "alt": "Pre Wedding Photoshoot Rates In Delhi"
      },
      {
        "src": "/admin_image/wid/3614165351660809640DSC00489.jpg",
        "alt": "Pre Wedding Photography Cost With Props"
      },
      {
        "src": "/admin_image/wid/5140577381660809640DSC00546.jpg",
        "alt": "Pre Wedding Shoot   Album Combo Price"
      },
      {
        "src": "/admin_image/wid/5773972021660809685DSC00553.jpg",
        "alt": "Affordable Couple Shoot Price In Dwarka"
      },
      {
        "src": "/admin_image/wid/1738981781660809685DSC00560.jpg",
        "alt": "Best Price For Destination Pre Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/21039479321660809685DSC00568.jpg",
        "alt": "Romantic Couple Shoot Under Budget Delhi"
      },
      {
        "src": "/admin_image/wid/15748648201660809685DSC00692.jpg",
        "alt": "Drone   Cinematic Pre Wedding Package Price"
      },
      {
        "src": "/admin_image/wid/10962221921660809685DSC00718.jpg",
        "alt": "Couple Photoshoot Price Near Me"
      },
      {
        "src": "/admin_image/wid/1987231391660809685DSC00814.jpg",
        "alt": "Pre Wedding Shoot In Studio Price"
      },
      {
        "src": "/admin_image/wid/365895681660809694DSC00841.jpg",
        "alt": "Cheapest Pre Wedding Shoot Packages In Delhi"
      },
      {
        "src": "/admin_image/wid/14017443981660809694DSC00980.jpg",
        "alt": "Royal Pre Wedding Shoot Price In Jaipur"
      },
      {
        "src": "/admin_image/wid/14887965491660809694DSC01037.jpg",
        "alt": "Drone Pre Wedding Shoot Price In Delhi"
      },
      {
        "src": "/admin_image/wid/16182006351660809694DSC01080.jpg",
        "alt": "Fireworks Pre Wedding Shoot Cost"
      },
      {
        "src": "/admin_image/wid/21121987201660809694DSC01082.jpg",
        "alt": "Champagne Pop Pre Wedding Shoot Package"
      },
      {
        "src": "/admin_image/wid/448532151660809694DSC01100.jpg",
        "alt": "Smoke Bomb Pre Wedding Shoot Price"
      },
      {
        "src": "/admin_image/wid/6385234301660809704DSC01113.jpg",
        "alt": "Drone   Cinematic Pre Wedding Shoot Cost"
      },
      {
        "src": "/admin_image/wid/11167875201660809704DSC01128.jpg",
        "alt": "Pre Wedding Shoot With Props"
      },
      {
        "src": "/admin_image/wid/9605610191660809704DSC05850.jpg",
        "alt": "Pre Wedding Shoot With Cold Pyro Fireworks"
      },
      {
        "src": "/admin_image/wid/18160119621660809704DSC07296.jpg",
        "alt": "Romantic Pre Wedding Shoot With Drone"
      },
      {
        "src": "/admin_image/wid/17122887301660809704DSC07432.jpg",
        "alt": "Cinematic Couple Shoot With Drone In Budget"
      },
      {
        "src": "/admin_image/wid/20573011551660809704DSC07684.jpg",
        "alt": "Pre Wedding Shoot With Confetti"
      },
      {
        "src": "/admin_image/wid/13267725481660809712DSC07731.jpg",
        "alt": "Mountain View Drone Shoot Cost Pre Wedding"
      },
      {
        "src": "/admin_image/wid/15847739281660809712DSC07777.jpg",
        "alt": "Night Pre Wedding Shoot With Fireworks Price"
      },
      {
        "src": "/admin_image/wid/16433228051660809712DSC07798.jpg",
        "alt": "Drone Shoot With Traditional Outfit – Cost"
      },
      {
        "src": "/admin_image/wid/17647306451660809712DSC07808.jpg",
        "alt": "Pre Wedding Shoot With Music Video Vibes Price"
      },
      {
        "src": "/admin_image/wid/5847442151660809712DSC07856.jpg",
        "alt": "Affordable Drone Couple Shoot Under ₹20K"
      },
      {
        "src": "/admin_image/wid/16623615711660809712DSC08277.jpg",
        "alt": "Pre Wedding Shoot Package With Smoke Bombs"
      },
      {
        "src": "/admin_image/wid/20797687201660809720DSC08336.jpg",
        "alt": "Couple Shoot With Cold Sparks"
      },
      {
        "src": "/admin_image/wid/17209040131660809720DSC08344.jpg",
        "alt": "Pre Wedding Shoot In Palace With Fireworks Cost"
      },
      {
        "src": "/admin_image/wid/14934427461660809720DSC08394.jpg",
        "alt": "Drone   Fireworks Pre Wedding Combo Package Price"
      },
      {
        "src": "/admin_image/wid/3649998191660809720DSC08715.jpg",
        "alt": "Cinematic Pre Wedding With Visual Effects Pricing"
      },
      {
        "src": "/admin_image/wid/18825152671660809720DSC08718.jpg",
        "alt": "Drone pre-wedding shoot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/9579812561660809720DSC08722.jpg",
        "alt": "Romantic couple shoot at sunset – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/7077897491660809730DSC08725.jpg",
        "alt": "Affordable pre-wedding shoot under ₹20K – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/12806685911660809730DSC08733.jpg",
        "alt": "Cinematic video shoot with drone and effects by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/16616311961660809730DSC08736.jpg",
        "alt": "Traditional outfit shoot near palace by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/17968534291660809730DSC08743.jpg",
        "alt": "Pre-wedding shoot with fireworks and cold sparks – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/8340253971660809730DSC08802.jpg",
        "alt": "Forest-themed couple shoot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/14039627431660809730DSC08837.jpg",
        "alt": "Royal pre-wedding shoot in Jaipur – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/1949519941660809739DSC08851.jpg",
        "alt": "Candid couple photography with props – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/14159702391660809739DSC08896.jpg",
        "alt": "Artistic champagne pop shots by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/20187643721660809739DSC08957.jpg",
        "alt": "Budget-friendly drone couple shoot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/7678372971660809739DSC08982.jpg",
        "alt": "Creative pre-wedding photo ideas – powered by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/510724841660809739DSC09352.jpg",
        "alt": "Fireworks"
      },
      {
        "src": "/admin_image/wid/20659783841660809739DSC09404.jpg",
        "alt": "Pre-wedding shoot with cinematic touch by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/3511582171660809746DSC09415.jpg",
        "alt": "Outdoor couple shoot near lake – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/8961839301660809746DSC09487.jpg",
        "alt": "Pre-wedding album package with drone shots – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/15456273551660809746DSC09629.jpg",
        "alt": "Destination pre-wedding shoot planned by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/15401047751660809746DSC09659.jpg",
        "alt": "Styled pre-wedding photography experience – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/6615118261660809746DSC09692.jpg",
        "alt": "Best pre wedding photographer"
      },
      {
        "src": "/admin_image/wid/13393588661660809746DSC09696.jpg",
        "alt": "Drone shoot for couple"
      },
      {
        "src": "/admin_image/wid/11574497121660809778DSC09758.jpg",
        "alt": "Fireworks pre wedding shoot"
      },
      {
        "src": "/admin_image/wid/14813920291660809778DSC09764.jpg",
        "alt": "Budget pre wedding shoot"
      },
      {
        "src": "/admin_image/wid/51472081660809778DSC09766.jpg",
        "alt": "Royal pre wedding shoot Jaipur"
      },
      {
        "src": "/admin_image/wid/2582377181660809778DSC09824.jpg",
        "alt": "Candid pre wedding photography"
      },
      {
        "src": "/admin_image/wid/603536491660809778DSC09828.jpg",
        "alt": "Outdoor shoot with drone"
      },
      {
        "src": "/admin_image/wid/17778153171660809778DSC09882.jpg",
        "alt": "Top wedding photographer in Delhi"
      },
      {
        "src": "/admin_image/wid/14331141041660809785DSC09893.jpg",
        "alt": "Photographer for pre wedding"
      },
      {
        "src": "/admin_image/wid/3135164861660809785DSC09921.jpg",
        "alt": "Couple shoot under 20k"
      },
      {
        "src": "/admin_image/wid/20928830111660809785DSC09933.jpg",
        "alt": "Cinematic wedding shoot"
      },
      {
        "src": "/admin_image/wid/16944521691660809785DSC09948.jpg",
        "alt": "Bride groom shoot ideas"
      },
      {
        "src": "/admin_image/wid/13582602101660809785DSC09952.jpg",
        "alt": "Traditional couple shoot"
      },
      {
        "src": "/admin_image/wid/4485624231660809785DSC09956.jpg",
        "alt": "Drone and fireworks shoot"
      }
    ],
    "content": {
      "desc4": "The wedding photoshoot of Annanaya & Praharsh was a beautiful and romantic experience for the couple and their photographers. The couple's chemistry and love for each other shone through in every photo, making for a truly stunning set of images. The photoshoot took place in a variety of locations providing a diverse range of backdrops for the photos. The couple's traditional attire added a touch of elegance to the photos, and the candid moments captured between Annanaya & Praharsh were truly heartwarming.",
      "heading1": "Wedding shoot at godwin hotels and resort",
      "desc1": "Wedding Photo Planet offers you the best photographers to make your wedding day even more special at Godwin Hotels and Resorts, one of the most sought-after venues for weddings in Delhi. Our team of experts have carefully selected a list of top photographers who have a proven track record of capturing the essence and luxury of Godwin Hotels and Resorts in their photography. Whether you choose to have your wedding ceremony in the lush garden, grand ballroom or indoor spaces, our photographers will make sure to bring out the best of the venue in their photography. They will work with you to create a collection of images that are truly unique and timeless, that will help you remember your special day forever.",
      "banner1": "/admin_image/wid/banner113940832271658302661275993594_2487382658063405_6421808985778782256_n.jpg",
      "heading2": "Best candid wedding photographers in delhi",
      "desc2": "Wedding Photo Planet is dedicated to providing you with the best candid wedding photography in Delhi. Our team of expert photographers are skilled in capturing the candid moments and emotions of your special day in an unobtrusive and natural way. They understand how to capture the real emotions, reactions and feelings of your big day, creating a collection of images that truly reflect the essence of your wedding. Candid photography allows for a more natural and authentic representation of your wedding day compared to traditional photography and our photographers are known for their ability to capture those real moments that are often missed by the traditional photographers.",
      "heading3": "Wedding photography packages in delhi",
      "desc3": "Wedding Photo Planet offers a wide range of wedding photography packages in Delhi to suit your needs and budget. Our team of experts has carefully curated a variety of packages that include everything from traditional and candid photography to wedding shoots and videography. Whether you're looking for full-day coverage or just a few hours, we have a package that will fit your requirements.",
      "banner2": "/admin_image/wid/banner16569193331658302661275994950_2487382664730071_4894853607117730213_n.jpg"
    }
  },
  {
    "id": "81",
    "slug": "wedding-photos-chetan-preksha",
    "category": "WEDDING",
    "name": "Chetan & Preksha",
    "metadata": {
      "title": "Chetan & Preksha",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image3420459541660894750_MG_1540.jpg",
      "/admin_image/wid/hero_image14144908621660894750IMG_2903.jpg",
      "/admin_image/wid/hero_image21178859041660894750IMG_2692.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/4657910741660894750_MG_1539.jpg",
        "alt": "Wedding Photographers Capturing Candid Indian Couple Moments"
      },
      {
        "src": "/admin_image/wid/12141429021660894980_MG_1468.jpg",
        "alt": "Top-Rated Wedding Photographers For Traditional Indian Weddings"
      },
      {
        "src": "/admin_image/wid/1932622321660894980_MG_1472.jpg",
        "alt": "Best Wedding Photographers Near Me Capturing Varmala Rituals"
      },
      {
        "src": "/admin_image/wid/5370598641660894980_MG_1491.jpg",
        "alt": "Best Wedding Photographers In Delhi NCR Capturing Bridal Portraits"
      },
      {
        "src": "/admin_image/wid/16715119441660894980_MG_1495.jpg",
        "alt": "Famous Wedding Photographers In India For Cinematic Wedding Moments"
      },
      {
        "src": "/admin_image/wid/7384628691660894980_MG_1497.jpg",
        "alt": "Best-Rated Wedding Photographers For Destination Weddings"
      },
      {
        "src": "/admin_image/wid/10168689051660894980_MG_1498.jpg",
        "alt": "Candid Wedding Photographer Capturing Emotional Couple Shots"
      },
      {
        "src": "/admin_image/wid/3953126251660894985_MG_1500.jpg",
        "alt": "Natural Candid Photography By Expert Wedding Photographer Delhi"
      },
      {
        "src": "/admin_image/wid/14959841501660894985_MG_1501.jpg",
        "alt": "Haldi Function Captured By Candid Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/15064481551660894985_MG_1506.jpg",
        "alt": "Professional Photographer For Wedding Day Moments"
      },
      {
        "src": "/admin_image/wid/20276471861660894985_MG_1508.jpg",
        "alt": "Best Wedding Ceremony Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/20629379271660894985_MG_1511.jpg",
        "alt": "Photographer For Indian Wedding Capturing Bridal Makeup Moments"
      },
      {
        "src": "/admin_image/wid/18607740821660894985_MG_1519.jpg",
        "alt": "Dreamy Outdoor Pre Shoot Wedding Ideas For Couples"
      },
      {
        "src": "/admin_image/wid/18801491201660894991_MG_1532.jpg",
        "alt": "Best Poses For Pre Shoot Wedding In Nature"
      },
      {
        "src": "/admin_image/wid/16658877471660894991_MG_1533.jpg",
        "alt": "Jaipur Location For Pre Shoot Wedding With Fort Backdrop"
      },
      {
        "src": "/admin_image/wid/1388483761660894991_MG_1539.jpg",
        "alt": "Wedding Photographers In Delhi Capturing Luxurious Indian Ceremonies"
      },
      {
        "src": "/admin_image/wid/12358881321660894991_MG_1540.jpg",
        "alt": "Book Top Wedding Photographers In Delhi For Royal Weddings"
      },
      {
        "src": "/admin_image/wid/7018253551660894991_MG_1542.jpg",
        "alt": "Famous Delhi Photographers For Pre Wedding And Bridal Shots"
      },
      {
        "src": "/admin_image/wid/17808706551660894991_MG_1546.jpg",
        "alt": "Award-Winning Best Wedding Photographers In Delhi NCR"
      },
      {
        "src": "/admin_image/wid/3193444671660894997_MG_1557.jpg",
        "alt": "Bridal Entry Shot By Best Photographers In Delhi"
      },
      {
        "src": "/admin_image/wid/21283381021660894997_MG_1632.jpg",
        "alt": "Cinematic Wedding Photos By Delhi’s Best Photographers"
      },
      {
        "src": "/admin_image/wid/11452949471660894997_MG_1635.jpg",
        "alt": "Bridal Lehenga Shoot By Best Photographer In Delhi"
      },
      {
        "src": "/admin_image/wid/16578766121660894997_MG_1636.jpg",
        "alt": "Top Delhi Photographer For Haldi And Mehndi Events"
      },
      {
        "src": "/admin_image/wid/7473488891660894997_MG_1637.jpg",
        "alt": "Engagement Couple Shoot By Best Photographer Delhi NCR"
      },
      {
        "src": "/admin_image/wid/92010790016608949971D4A8093.jpg",
        "alt": "Candid Photographers In Delhi NCR For Haldi And Wedding Rituals"
      },
      {
        "src": "/admin_image/wid/159931905616608950051D4A8102.jpg",
        "alt": "Emotional Wedding Photography By Candid Experts Delhi NCR"
      },
      {
        "src": "/admin_image/wid/162202216216608950051D4A8112.jpg",
        "alt": "Candid Couple Moments Captured During Mehndi Function"
      },
      {
        "src": "/admin_image/wid/81440580416608950051D4A8116.jpg",
        "alt": "Romantic Pre Wedding Shoot Delhi NCR With Couple Pose Ideas"
      },
      {
        "src": "/admin_image/wid/64195804316608950051D4A8121.jpg",
        "alt": "Cinematic Pre Wedding Shoot Delhi NCR With Drone Shots"
      },
      {
        "src": "/admin_image/wid/190970061716608950051D4A8188.jpg",
        "alt": "Affordable Pre Wedding Shoot Packages In Delhi NCR"
      },
      {
        "src": "/admin_image/wid/197858738216608950051D4A8221.jpg",
        "alt": "Top Spots For Pre Wedding Shoot Jaipur With Forts And Lakes"
      },
      {
        "src": "/admin_image/wid/41073998516608950131D4A8225.jpg",
        "alt": "Best Pre Wedding Photographers In Jaipur Capturing Couple Moments"
      },
      {
        "src": "/admin_image/wid/134650824616608950131D4A8281.jpg",
        "alt": "Jaipur Pre Wedding Shoot With Traditional Rajasthani Elements"
      },
      {
        "src": "/admin_image/wid/195646785116608950131D4A8369.jpg",
        "alt": "Scenic Pre Wedding Shoot In Rishikesh Near Ganga"
      },
      {
        "src": "/admin_image/wid/1528574316608950131D4A8386.jpg",
        "alt": "Couple Posing By River In Rishikesh Pre Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/145567666716608950131D4A8416.jpg",
        "alt": "Mountain View Rishikesh Pre Wedding Shoot Ideas"
      },
      {
        "src": "/admin_image/wid/111625099116608950131D4A8423.jpg",
        "alt": "Experienced Wedding Photographers Delhi Capturing Rituals"
      },
      {
        "src": "/admin_image/wid/68432141916608950241D4A8432.jpg",
        "alt": "Creative Wedding Photographers In Delhi For Bridal Photos"
      },
      {
        "src": "/admin_image/wid/55797763016608950241D4A8442.jpg",
        "alt": "Wedding Photographers Delhi NCR For Pre Wedding And Candid Shots"
      },
      {
        "src": "/admin_image/wid/68936443716608950241D4A8884.jpg",
        "alt": "Best Photographer Wedding Near Me For Indian Ceremonies"
      },
      {
        "src": "/admin_image/wid/2272643916608950241D4A8888.jpg",
        "alt": "Cinematic Videographer For Indian Wedding Video Highlights"
      },
      {
        "src": "/admin_image/wid/202123062916608950241D4A8890.jpg",
        "alt": "Top Wedding Photographers In Delhi NCR With Candid Style"
      },
      {
        "src": "/admin_image/wid/132533457816608950241D4A8893.jpg",
        "alt": "Destination Wedding Moments By Delhi NCR’s Top Photographers"
      },
      {
        "src": "/admin_image/wid/191834321616608950351D4A8899.jpg",
        "alt": "Cinematic Photography By Top Wedding Photographers Near Me"
      },
      {
        "src": "/admin_image/wid/64114791416608950351D4A8909.jpg",
        "alt": "Affordable Wedding Photography"
      },
      {
        "src": "/admin_image/wid/117138907816608950351D4A8913.jpg",
        "alt": "Cheap Wedding Photography Packages"
      },
      {
        "src": "/admin_image/wid/209410042316608950351D4A8915.jpg",
        "alt": "Budget Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/1105506757166089503510.jpg",
        "alt": "Inexpensive Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/1712627340166089503511.jpg",
        "alt": "Budget Wedding Photography Cost"
      },
      {
        "src": "/admin_image/wid/644991091166089504912.jpg",
        "alt": "Budget Wedding Photography Packages"
      },
      {
        "src": "/admin_image/wid/1798118365166089504913.jpg",
        "alt": "Affordable Wedding Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/19068212841660895049DSC00101.jpg",
        "alt": "Cheap Wedding Photographers Near Me"
      },
      {
        "src": "/admin_image/wid/7356306861660895049IMG_2609.jpg",
        "alt": "Affordable Wedding Photographers In Delhi NCR"
      },
      {
        "src": "/admin_image/wid/20471043151660895049IMG_2615.jpg",
        "alt": "Budget Photographers Delhi NCR Under ₹30K"
      },
      {
        "src": "/admin_image/wid/16819532141660895049IMG_2627.jpg",
        "alt": "Inexpensive Pre-Wedding Photography Delhi NCR"
      },
      {
        "src": "/admin_image/wid/13402914721660895057IMG_2636.jpg",
        "alt": "Wedding Photography Packages Under ₹50,000"
      },
      {
        "src": "/admin_image/wid/7906099041660895057IMG_2637.jpg",
        "alt": "Pre-Wedding Shoot Price In Delhi"
      },
      {
        "src": "/admin_image/wid/20095127341660895057IMG_2659.jpg",
        "alt": "Pre-Wedding Photography Price Delhi NCR"
      },
      {
        "src": "/admin_image/wid/9938896271660895057IMG_2661.jpg",
        "alt": "Cheap Pre-Wedding Shoot Jaipur Under Budget"
      },
      {
        "src": "/admin_image/wid/5035049981660895057IMG_2677.jpg",
        "alt": "Budget Full-Day Wedding Photography Packages"
      },
      {
        "src": "/admin_image/wid/11811390571660895057IMG_2680.jpg",
        "alt": "Candid Photographer Budget Package"
      },
      {
        "src": "/admin_image/wid/665475071660895066IMG_2688.jpg",
        "alt": "Basic Candid Wedding Photography Cost"
      },
      {
        "src": "/admin_image/wid/8538096311660895066IMG_2691.jpg",
        "alt": "Budget Traditional Wedding Photography Packages"
      },
      {
        "src": "/admin_image/wid/5311658131660895066IMG_2692.jpg",
        "alt": "Pre-Wedding Shoot Packages Affordable"
      },
      {
        "src": "/admin_image/wid/10409883781660895066IMG_2703.jpg",
        "alt": "Budget Drone Wedding Photography Delhi"
      },
      {
        "src": "/admin_image/wid/4883533851660895066IMG_2704.jpg",
        "alt": "Affordable Candid Wedding Photography Delhi NCR"
      },
      {
        "src": "/admin_image/wid/10146703721660895066IMG_2725.jpg",
        "alt": "Budget-Friendly Cinematic Wedding Videography"
      },
      {
        "src": "/admin_image/wid/9530402111660895073IMG_2750.jpg",
        "alt": "Low-Cost Destination Wedding Photography Jaipur"
      },
      {
        "src": "/admin_image/wid/14929935631660895073IMG_2756.jpg",
        "alt": "Cheap Bridal Portraiture Delhi"
      },
      {
        "src": "/admin_image/wid/2784364291660895073IMG_2759.jpg",
        "alt": "Inexpensive Pre-Wedding Cinematic Shoot"
      },
      {
        "src": "/admin_image/wid/14833789691660895073IMG_2762.jpg",
        "alt": "Wedding Photography Packages Under ₹30,000"
      },
      {
        "src": "/admin_image/wid/12725896221660895073IMG_2771.jpg",
        "alt": "Affordable Pre-Wedding Shoot With Drone"
      },
      {
        "src": "/admin_image/wid/8199528021660895073IMG_2805.jpg",
        "alt": "Low-Cost Wedding Cinematic Videography"
      },
      {
        "src": "/admin_image/wid/17054872731660895084IMG_2817.jpg",
        "alt": "Budget Bridal Entry Shots With Drone"
      },
      {
        "src": "/admin_image/wid/16005900011660895084IMG_2825.jpg",
        "alt": "Cheap Couple Photoshoot With Props"
      },
      {
        "src": "/admin_image/wid/15411162981660895084IMG_2834.jpg",
        "alt": "Affordable Wedding Photography With Traditional Touch"
      },
      {
        "src": "/admin_image/wid/4059692681660895084IMG_2836.jpg",
        "alt": "Low-Budget Pre-Wedding Shoot In Rishikesh"
      },
      {
        "src": "/admin_image/wid/13814403271660895084IMG_2840.jpg",
        "alt": "Candid Photography Packages Under ₹40,000"
      },
      {
        "src": "/admin_image/wid/20259715611660895084IMG_2841.jpg",
        "alt": "Affordable Wedding Photographer Delhi NCR"
      },
      {
        "src": "/admin_image/wid/12998793571660895325IMG_2886.jpg",
        "alt": "Bridal Portrait Shoot On Budget"
      },
      {
        "src": "/admin_image/wid/18755260421660895325IMG_2891.jpg",
        "alt": "Cheap Destination Wedding Shoot Jaipur"
      },
      {
        "src": "/admin_image/wid/3791421911660895325IMG_2895.jpg",
        "alt": "Pre-Wedding Shoot Under ₹25,000 In Delhi"
      },
      {
        "src": "/admin_image/wid/12298203961660895325IMG_2903.jpg",
        "alt": "Wedding Teaser Video Package Budget"
      },
      {
        "src": "/admin_image/wid/4570269721660895325IMG_2904.jpg",
        "alt": "Haldi"
      },
      {
        "src": "/admin_image/wid/9929506531660895325IMG_2934.jpg",
        "alt": "Drone Wedding Photography Under ₹50,000"
      },
      {
        "src": "/admin_image/wid/17475389341660895334IMG_2954.jpg",
        "alt": "Full-Day Wedding Photography Budget Deal"
      },
      {
        "src": "/admin_image/wid/16685191391660895334IMG_2968.jpg",
        "alt": "Cinematic Wedding Film Package Budget"
      },
      {
        "src": "/admin_image/wid/14143915801660895334IMG_3002.jpg",
        "alt": "Low-Cost Engagement Photoshoot Delhi NCR"
      },
      {
        "src": "/admin_image/wid/9008855431660895334IMG_3020.jpg",
        "alt": "Affordable Couple Shoot With Traditional Outfits"
      },
      {
        "src": "/admin_image/wid/20491714491660895334IMG_3021.jpg",
        "alt": "Cheap Wedding Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/16301338581660895334IMG_3023.jpg",
        "alt": "Pocket-Friendly Wedding Photography Packages"
      },
      {
        "src": "/admin_image/wid/19547656841660895439IMG_3026.jpg",
        "alt": "Budget Wedding Cinematic Highlights Video"
      },
      {
        "src": "/admin_image/wid/12808523911660895439IMG_3119.jpg",
        "alt": "Affordable Cultural Wedding Photography Package"
      },
      {
        "src": "/admin_image/wid/2804521271660895439IMG_3121.jpg",
        "alt": "Simple Couple Shoot Ideas On Budget"
      },
      {
        "src": "/admin_image/wid/16564666531660895439IMG_3125.jpg",
        "alt": "Bridal Getting Ready Shots Budget-Friendly"
      },
      {
        "src": "/admin_image/wid/4976947221660895439IMG_3131.jpg",
        "alt": "Engagement Shoot With Drone Under ₹35,000"
      },
      {
        "src": "/admin_image/wid/8827379121660895439IMG_3170.jpg",
        "alt": "Affordable Indoor Couple Photoshoot"
      },
      {
        "src": "/admin_image/wid/15499211001660895448IMG_3172.jpg",
        "alt": "Budget Wedding Photographer In Delhi For Entire Event"
      },
      {
        "src": "/admin_image/wid/4005587141660895448IMG_3174.jpg",
        "alt": "Candid"
      },
      {
        "src": "/admin_image/wid/6558725981660895448IMG_3175.jpg",
        "alt": "Budget Friendly Wedding Photography"
      },
      {
        "src": "/admin_image/wid/1104635921660895448IMG_3176.jpg",
        "alt": "Affordable Pre-Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/7268800561660895448IMG_3178.jpg",
        "alt": "Cheap Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/5228519721660895448IMG_3180.jpg",
        "alt": "Wedding Shoot Under 50K"
      },
      {
        "src": "/admin_image/wid/19948387121660895455IMG_3181.jpg",
        "alt": "Low-Cost Candid Photography"
      },
      {
        "src": "/admin_image/wid/14826439241660895455IMG_3183.jpg",
        "alt": "Bridal Shoot Budget"
      },
      {
        "src": "/admin_image/wid/20185512771660895455IMG_3184.jpg",
        "alt": "Pre-Wedding Delhi Cheap"
      }
    ],
    "content": {
      "desc4": "Wedding photoshoot of Chetan & Preksha was an eventful and emotional experience. The couple's traditional attire, with Preksha in a beautiful lehenga and Chetan in a classic sherwani, added a touch of elegance to the photos. The photographers captured their candid moments and emotions throughout the day, showcasing the love and connection between the couple. The couple's chemistry and love for each other were evident in every photo, making for a truly stunning set of images.",
      "heading1": "Wedding photo shoot at te leela",
      "desc1": "The Leela, one of the most luxurious wedding venues in Delhi. Our team of experts has handpicked a list of the top photographers who have extensive experience in capturing the grandeur and elegance of this iconic venue. The Leela's stunning architecture, lush gardens and elegant ballrooms provide the perfect backdrop for your wedding photography. Our photographers are skilled professionals who know how to make the most of the venue's features and create a collection of images that are truly unique and timeless.",
      "banner1": "/admin_image/wid/banner15373053201660894750IMG_2836.jpg",
      "heading2": "Candid and cinematographers in delhi",
      "desc2": "Wedding Photo Planet is your go-to source for the best candid and cinematography professionals in Delhi. Our team of experts has top photographers and videographers who specialize in capturing candid moments and creating cinematic wedding films. These professionals have the skill, creativity and expertise to create a visual story of your special day that is both emotional and visually stunning. They have the ability to capture the candid moments and emotions of your wedding in a way that traditional photography can't match.",
      "heading3": "Best wedding photographers in delhi",
      "desc3": "Wedding Photo Planet is proud to offer the best wedding photographers in Delhi for your special day. Our team of experts has carefully selected a list of the top photographers in the city known for their exceptional skills, creativity and ability to capture the essence of your wedding day. We understand that every couple has different photography needs and preferences, which is why we offer a wide range of styles, from traditional to photojournalistic.",
      "banner2": "/admin_image/wid/banner116757184731660894750IMG_2704.jpg"
    }
  },
  {
    "id": "82",
    "slug": "pre-wedding-photos-vaishali-deepender",
    "category": "PRE WEDDING",
    "name": "Vaishali & Deepender",
    "metadata": {
      "title": "Vaishali & Deepender",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image18467273571661773567(1).JPG",
      "/admin_image/wid/hero_image15585580391661773570(3).JPG",
      "/admin_image/wid/hero_image4111607071661773572(6).JPG"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/6750201041661773565(1).JPG",
        "alt": "Wedding Photography Deals"
      },
      {
        "src": "/admin_image/wid/3281742381661777518DJI_0084.jpg",
        "alt": "Budget Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/9584940831661777518DJI_0085-Edit.jpg",
        "alt": "Affordable Bridal Portraits"
      },
      {
        "src": "/admin_image/wid/7725655281661777518DJI_0099-Edit.jpg",
        "alt": "Cheap Cinematic Videography"
      },
      {
        "src": "/admin_image/wid/9475211981661777518DJI_0128.jpg",
        "alt": "Couple Shoot Under Budget"
      },
      {
        "src": "/admin_image/wid/19397608091661777518DSC00128-Edit.jpg",
        "alt": "Budget Engagement Shoot"
      },
      {
        "src": "/admin_image/wid/1099205521661777518DSC00135-Edit.jpg",
        "alt": "Drone Wedding Shoot Budget"
      },
      {
        "src": "/admin_image/wid/15514303151661777538DSC00149-Edit.jpg",
        "alt": "Haldi Photography Budget"
      },
      {
        "src": "/admin_image/wid/20862420301661777538DSC00272-Edit.jpg",
        "alt": "Mehndi Photography Cheap"
      },
      {
        "src": "/admin_image/wid/18625746291661777538DSC00276-Edit.jpg",
        "alt": "Affordable Wedding Video"
      },
      {
        "src": "/admin_image/wid/19279209111661777538DSC00280-Edit.jpg",
        "alt": "Budget Wedding Photography Delhi"
      },
      {
        "src": "/admin_image/wid/16788034821661777538DSC01143.jpg",
        "alt": "Cheap Candid Photographer NCR"
      },
      {
        "src": "/admin_image/wid/18181435521661777538DSC01150.jpg",
        "alt": "Pre-Wedding Shoot Under 30K Delhi"
      },
      {
        "src": "/admin_image/wid/11965651741661777580DSC01158.jpg",
        "alt": "Affordable Bridal Portrait Delhi"
      },
      {
        "src": "/admin_image/wid/10673204951661777580DSC01162.jpg",
        "alt": "Drone Wedding Shoot Cheap NCR"
      },
      {
        "src": "/admin_image/wid/14607054671661777580DSC01163.jpg",
        "alt": "Engagement Photographer Delhi Budget"
      },
      {
        "src": "/admin_image/wid/12179873961661777580DSC01164.jpg",
        "alt": "Pre Wedding Videography Delhi Deals"
      },
      {
        "src": "/admin_image/wid/9092449481661777580DSC01165.jpg",
        "alt": "Low-Cost Photographer Delhi NCR"
      },
      {
        "src": "/admin_image/wid/380428221661777580DSC01678-copy.jpg",
        "alt": "Pre Wedding Shoot Jaipur Budget"
      },
      {
        "src": "/admin_image/wid/20574115781661777589DSC01681-Edit.jpg",
        "alt": "Cheap Drone Shoot Jaipur"
      },
      {
        "src": "/admin_image/wid/2815645291661777589DSC01690-Edit.jpg",
        "alt": "Affordable Couple Shoot Jaipur"
      },
      {
        "src": "/admin_image/wid/20643679231661777589DSC01696-Edit.jpg",
        "alt": "Jaipur Candid Photographer Under 25K"
      },
      {
        "src": "/admin_image/wid/7186304881661777589DSC01725.jpg",
        "alt": "Drone Wedding Rishikesh Cheap"
      },
      {
        "src": "/admin_image/wid/504593621661777589DSC01725-Edit.jpg",
        "alt": "Budget Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/12114066411661777589DSC01738-Edit.jpg",
        "alt": "Cheap Bridal Portraits"
      },
      {
        "src": "/admin_image/wid/5253971931661777598DSC01751-Edit.jpg",
        "alt": "Affordable Haldi Photography"
      },
      {
        "src": "/admin_image/wid/10053472851661777598DSC01791-Edit.jpg",
        "alt": "Couple Shoot Under 15K"
      },
      {
        "src": "/admin_image/wid/4194178381661777598DSC01798-Edit.jpg",
        "alt": "Candid Wedding Shots Low Cost"
      },
      {
        "src": "/admin_image/wid/16131754741661777598DSC01806-Edit.jpg",
        "alt": "Drone Photography Budget Pack"
      },
      {
        "src": "/admin_image/wid/17219737191661777598DSC01810-Edit.jpg",
        "alt": "Budget Wedding Highlights"
      },
      {
        "src": "/admin_image/wid/7723382301661777598DSC01833-Edit.jpg",
        "alt": "Wedding Packages Under ₹50,000"
      },
      {
        "src": "/admin_image/wid/14281201501661777607DSC01904-Edit.jpg",
        "alt": "Low-Cost Pre-Wedding Packages"
      },
      {
        "src": "/admin_image/wid/1518666461661777607DSC01937-Edit.jpg",
        "alt": "Affordable Couple Shoot Offers"
      },
      {
        "src": "/admin_image/wid/19557229831661777607DSC02002-Edit.jpg",
        "alt": "Best Wedding Deals Near Me"
      },
      {
        "src": "/admin_image/wid/9709313361661777607DSC02274-Edit.jpg",
        "alt": "Book Your Pre-Wedding Shoot In Delhi Under ₹30K"
      },
      {
        "src": "/admin_image/wid/5167037011661777607DSC02303-Edit.jpg",
        "alt": "Bridal Portraits Starting At Just ₹5,000"
      },
      {
        "src": "/admin_image/wid/6254616591661777607DSC02306-Edit.jpg",
        "alt": "Book Your Pre-Wedding Shoot In Delhi Under ₹30K"
      },
      {
        "src": "/admin_image/wid/9858281071661777615DSC02458.jpg",
        "alt": "Thematic Styled Shoot Now ₹6,500"
      },
      {
        "src": "/admin_image/wid/15617104491661777615DSC02459.jpg",
        "alt": "Bridal Makeup Shots Just ₹3,000"
      },
      {
        "src": "/admin_image/wid/18666062501661777615DSC02521.jpg",
        "alt": "Haldi And Mehndi Photography Combo Just ₹7,500"
      },
      {
        "src": "/admin_image/wid/298220311661777615DSC02521-copy.jpg",
        "alt": "Pre-Wedding Plus Drone Shots Under ₹25,000"
      }
    ],
    "content": {
      "desc4": "Just like our other clients, these two love birds were highly impressed by the pre-wedding video shoot and the candids taken by our videographers and photographers. Like Vaishali and Deepender, give us a chance, and let us give you a pleasing and alluring set of memories for the most important occasion of your life. We ensure quality and creativity in our pre-wedding shoots so that the client gets the best of the best results.",
      "heading1": "Pre Wedding Photography at The Perfect Ville",
      "desc1": "Pre-wedding photoshoot remains on the bucket list of almost every couple. And why not, everyone would like to make this event memorable. The combination of this beautiful destination that is as beautiful as a picture. The Perfect Ville in Delhi is a perfect destination for your pre-wedding shoot. The shoot took place in various locations within the property, such as the gardens, the lake and the rustic bridge, each location offering unique and stunning backgrounds for the photographs. Their chemistry and love for each other was evident in every shot, making for truly beautiful and romantic photographs. The pre-wedding shoot at The Perfect Ville was a perfect representation of the love and excitement that the couple has for their upcoming wedding and also their appreciation for nature and beautiful surroundings.",
      "banner1": "/admin_image/wid/banner116125226841661773561(8).JPG",
      "heading2": "Pre-wedding Photography",
      "desc2": "We use the best gears and tools like drones and high-end cameras to provide you with extreme-quality output. We have a great customer relation team that will make sure about your queries and their solutions. Hence, make every moment of your life memorable and beautiful with Wedding Photo Planet.",
      "heading3": "Pre-wedding Photography at Wedding Photo Planet",
      "desc3": "At Wedding photo planet, our excellent team of photographers delivers a collection of charming photos. We use the latest technology and the trendiest gears and cameras that are top-notch and brilliant in terms of quality. With highly skilled photographers we can fulfill all your wishes.",
      "banner2": "/admin_image/wid/banner14861374261661773563(8).JPG"
    }
  },
  {
    "id": "84",
    "slug": "wedding-photos-vaishali-deepender",
    "category": "WEDDING",
    "name": "Vaishali & Deepender",
    "metadata": {
      "title": "Vaishali & Deepender",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image3612012516754107941N3A2378.JPG",
      "/admin_image/wid/hero_image15008505016754107941N3A2357.JPG",
      "/admin_image/wid/hero_image170138826516754107951N3A2380.JPG"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/63139377016754107911N3A2273.JPG",
        "alt": "Book Bridal Portraits Now From ₹4,999"
      },
      {
        "src": "/admin_image/wid/10884147716754107921N3A2410.JPG",
        "alt": "Get Cinematic Wedding Video Under ₹30K"
      },
      {
        "src": "/admin_image/wid/74374681716754107921N3A2515.JPG",
        "alt": "Luxury Wedding Shoot Without Luxury Prices"
      },
      {
        "src": "/admin_image/wid/9678194616754107921N3A2682.JPG",
        "alt": "Drone Wedding Shoot Starting ₹8,000 Only"
      },
      {
        "src": "/admin_image/wid/24156675816754107931N3A2722.JPG",
        "alt": "Full-Day Wedding Coverage Under ₹40K"
      },
      {
        "src": "/admin_image/wid/191708265516754107931N3A2739.JPG",
        "alt": "Bridal Makeup Shots Just ₹3,000"
      },
      {
        "src": "/admin_image/wid/103634459216754107931N3A2767.JPG",
        "alt": "Thematic Styled Shoot Now ₹6,500"
      },
      {
        "src": "/admin_image/wid/44029756616754107931N3A3046.JPG",
        "alt": "Engagement Photo Shoot Under ₹10K"
      },
      {
        "src": "/admin_image/wid/185400262416754107941N3A3110.JPG",
        "alt": "Save More On Your Pre-Wedding With Us Starting ₹15K"
      },
      {
        "src": "/admin_image/wid/127752602216754107941N3A3186.JPG",
        "alt": "Golden Hour Portraits For Couples From ₹4,500"
      },
      {
        "src": "/admin_image/wid/9227605316755788961N3A2472.JPG",
        "alt": "Low Cost Candid Photography"
      },
      {
        "src": "/admin_image/wid/41696337116755788971N3A2769.JPG",
        "alt": "Budget Pre-Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/56437012616755788971N3A2771.JPG",
        "alt": "Wedding Packages Under 50K"
      },
      {
        "src": "/admin_image/wid/162973882516755788971N3A3058.JPG",
        "alt": "Pre-Wedding Shoot Deals"
      },
      {
        "src": "/admin_image/wid/20016864716755788971N3A3187.JPG",
        "alt": "Drone Wedding Shoot Budget"
      },
      {
        "src": "/admin_image/wid/189475944416755788981N3A3228.JPG",
        "alt": "Haldi Photography Low Price"
      },
      {
        "src": "/admin_image/wid/18136499041675578898IMG_5011.JPG",
        "alt": "Pocket-Friendly Wedding Photos"
      },
      {
        "src": "/admin_image/wid/6408883721675578898IMG_5015.JPG",
        "alt": "Wedding Photographer Near Me Cheap"
      },
      {
        "src": "/admin_image/wid/3728932041675578899IMG_5238.JPG",
        "alt": "Small Budget Wedding Coverage"
      },
      {
        "src": "/admin_image/wid/16066227951675578899IMG_7746.JPG",
        "alt": "Rishikesh Pre-Wedding Budget"
      }
    ],
    "content": {
      "desc4": "Vaishali and Deepender is one of the sweetest couples. The experience of Wedding Photo Planet with this couple was very pleasant. It was a great photoshoot, and the images turned out really well. The professional photographer managed to capture the couple in a series of beautiful poses, showcasing their love and joy. With the help of Wedding Photo Planet's skilled team of photographers, Vaishali and Deepender will have these precious memories to cherish for the rest of their lives.",
      "heading1": "Wedding Photoshoot at Ambrosia Palace",
      "desc1": "The venue of this beautiful couple’s wedding was Ambrosia Palace, Vaishali. The venue was equipped with a large wedding hall area for the guests. Photographers and videographers captured every candid moment and cherishable memory. The couple looked radiant in their wedding attire, and the photographer captured every detail of the special day. The venue was decorated with balloons, flowers, and streamers which made the atmosphere even more romantic. The pictures were taken in a variety of poses and locations, making sure to capture the couple's love and happiness. With the help of Wedding Photo Planet's talented team of photographers, Vaishali and Deepender will have these precious memories to cherish for the rest of their lives.",
      "banner1": "/admin_image/wid/banner168854138416754107911N3A2320.JPG",
      "heading2": "Best wedding candid photographers in Delhi",
      "desc2": "For the best wedding candid photography in Delhi, look no further than Wedding Photo Planet. With their team of experienced photographers, they are able to capture the most special moments of the day. The photographers have a great eye for detail and know how to capture the perfect shot. Whether it's the bride and groom walking down the aisle or the first dance as a newlywed couple, Wedding Photo Planet will make sure to immortalize all the special moments. They also use the latest cutting-edge photography equipment, allowing them to take stunning photos of your special day.",
      "heading3": "Wedding photoshoot prices and packages in Delhi",
      "desc3": "Wedding Photo Planet offers you various prices and packages that suit every couple’s budget. With our packages, you won't have to worry about breaking the bank. So, Just give us a chance and if you want to know more about us, feel free to contact us through any social media app or through the contact details given below.",
      "banner2": "/admin_image/wid/banner117243338511675410791IMG_8537.JPG"
    }
  },
  {
    "id": "85",
    "slug": "wedding-photos-shubhangi-mohak",
    "category": "WEDDING",
    "name": "Shubhangi & Mohak",
    "metadata": {
      "title": "Shubhangi & Mohak",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image103944370716754188731D4A9281.JPG",
      "/admin_image/wid/hero_image60373341216754188741D4A0137.JPG",
      "/admin_image/wid/hero_image186703490316754188741D4A9814.JPG"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/86110810816754188711D4A0004.JPG",
        "alt": "Wedding Photography"
      },
      {
        "src": "/admin_image/wid/70688505316754188711D4A0137.JPG",
        "alt": "Candid Wedding Photography"
      },
      {
        "src": "/admin_image/wid/58888598216754188711D4A8947.JPG",
        "alt": "Destination Wedding Photography"
      },
      {
        "src": "/admin_image/wid/14557309416754188721D4A9152.JPG",
        "alt": "Modern Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/104207687816754188721D4A9305.JPG",
        "alt": "Bridal Photoshoot"
      },
      {
        "src": "/admin_image/wid/91097346516754188721D4A9492.JPG",
        "alt": "Wedding Video Highlights"
      },
      {
        "src": "/admin_image/wid/61559304016754188721D4A9820.JPG",
        "alt": "Wedding Photographer Near Me"
      },
      {
        "src": "/admin_image/wid/21370807321675418873DSC00480.JPG",
        "alt": "Best Wedding Photographers Near Me"
      },
      {
        "src": "/admin_image/wid/19893602131675418873DSC00559.JPG",
        "alt": "Local Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/13306965361675418873SHUB5782.JPG",
        "alt": "Destination Wedding Photographer In India"
      }
    ],
    "content": {
      "desc4": "The beautiful wedding photo of Shubhangi and Mohak was one of the most gorgeous shots captured at the Wedding Photo Planet. The carefully composed photo was taken at one of their chosen locations, with the love of the couple shining through the lens. They have captured their most special day in the most beautiful way possible. The Wedding Photo Planet was the perfect choice for Shubhangi and Mohak's special day, as it was able to capture the very essence of their love. The vibrant colors of their clothing, the scenery of the landscape, and the emotion of the couple made the photo truly unforgettable. The photograph is sure to be cherished for years to come, and it serves as a reminder of Shubhangi and Mohak's special day.",
      "heading1": "Wedding Photoshoot at The Umrao",
      "desc1": "The Umrao is one of the most luxurious places in Delhi. The venue has everything that gives you a completely divine experience. Due to the venue's wonderful architecture and lucid decorations, the photographs were able to get a fantastic backdrop that came out as beautiful as the pictures themselves, which is a testament to the couple's happiness.",
      "banner1": "/admin_image/wid/banner12013767371675418870SHUB6711.JPG",
      "heading2": "Best Wedding Photographers In Delhi",
      "desc2": "Wedding Photo Planet, Delhi is proud to feature some of the best wedding photographers in the city. Our team of professional photographers is highly skilled and experienced and is dedicated to capturing every special moment of your big day. Whether you're looking for traditional posed shots or candid, natural moments, our photographers will work with you to create a custom photography package that suits your needs and budget. We understand that your wedding day is one of the most important days of your life, and we are committed to providing you with beautiful, high-quality photographs that you can treasure for a lifetime.",
      "heading3": "Candid And Cinematographers",
      "desc3": "Wedding Photo Planet offers a curated list of the best candid photographers and cinematographers in the industry. These professionals specialize in capturing natural, unposed moments that truly capture the essence of your special day. Whether you're looking for a candid photographer to document your wedding ceremony, or a cinematographer to create a beautiful film of your reception, our team has the expertise and experience to deliver stunning results. With an eye for detail and a passion for storytelling, our candid photographers and cinematographers will create lasting memories that you'll treasure for a lifetime.",
      "banner2": "/admin_image/wid/banner114697151921675418870SHUB7013.JPG"
    }
  },
  {
    "id": "86",
    "slug": "wedding-photos-shradha-subham",
    "category": "WEDDING",
    "name": "Shradha & Subham",
    "metadata": {
      "title": "Shradha & Subham",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image11791332241675420233DSC04541.JPG",
      "/admin_image/wid/hero_image13272593541675420234DSC04452.JPG",
      "/admin_image/wid/hero_image16536570901675420234DSC04168.JPG"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/5199224031675420231DSC04435.JPG",
        "alt": "Wedding Photography Packages"
      },
      {
        "src": "/admin_image/wid/21055069991675420231DSC04399.JPG",
        "alt": "Wedding Photographer Price"
      },
      {
        "src": "/admin_image/wid/20039657501675420231DSC04026.JPG",
        "alt": "Pre-Wedding Shoot Price"
      },
      {
        "src": "/admin_image/wid/5040731031675420232DSC03849.JPG",
        "alt": "Budget Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/6715589401675420232DSC03875.JPG",
        "alt": "Affordable Wedding Photographer"
      },
      {
        "src": "/admin_image/wid/4336503401675420232DSC03685.JPG",
        "alt": "Wedding Photography Under 50K"
      },
      {
        "src": "/admin_image/wid/2150030291675420232DSC03716.JPG",
        "alt": "Wedding Video And Photography Cost"
      },
      {
        "src": "/admin_image/wid/20763310731675420233DSC03439.JPG",
        "alt": "Photo And Video Team For Wedding"
      },
      {
        "src": "/admin_image/wid/20749424361675420233DSC03472.JPG",
        "alt": "Engagement Shoot Photography"
      },
      {
        "src": "/admin_image/wid/3821220451675420233DSC03408.JPG",
        "alt": "Couple Video Shoot Ideas"
      }
    ],
    "content": {
      "desc4": "Shradha and Subham’s wedding photoshoot by Wedding Photo Planet was nothing short of spectacular. The team of the best wedding photographers in Delhi captured the beauty and joy of the couple’s special day with their amazing skills. From candid moments to posed frames, they managed to capture every moment beautifully.",
      "heading1": "Destination Wedding in Jodhpur",
      "desc1": "Jodhpur was the best location from these couple’s point of view. And why not? The beauty and regal aesthetics of this destination are pleasing to couples. The wedding was organized in a grand venue. The venue for their wedding was Idana Palace in Jodhpur. As the name suggests, the venue was grand and the architecture was regal and royal. The couple itself was looking very cool and pretty. The groom was wearing a traditional sherwani for the wedding while the bride was dressed in a beautiful red lehenga. The team of Wedding Photo Planet was able to capture all the exciting and happy moments from the forum. The primary thing was marriage went well and friends and family gave the couple their blessings and best wishes for their future.",
      "banner1": "/admin_image/wid/banner16814921251675420230DSC05217.JPG",
      "heading2": "Best Candid Wedding Photographers in Delhi.",
      "desc2": "Candid Photos are the most beautiful part of the whole album. Candid photos and videos deliver the most beautiful and pure form of emotions. But only if the photographers and the cameramen have good skills. The team of Wedding Photo Planet provides you with the team of the most excellent and creative cameramen who can capture pure emotions with their cameras.",
      "heading3": "Best Wedding Cinematographers in Delhi",
      "desc3": "Pictures are not the only thing that makes your wedding album complete. Your album will remain incomplete without the videos. Therefore, Wedding Photo Planet is the go-to destination for finding the best wedding cinematographers in Delhi. Our team of experienced professionals will help you capture the most beautiful moments of your special day. We understand that your wedding is one of the most important days of your life and we strive to make it memorable by providing you with stunning visuals that will last a lifetime.",
      "banner2": "/admin_image/wid/banner112646958001675420231DSC05084.JPG"
    }
  },
  {
    "id": "87",
    "slug": "wedding-photos-geetika-mayank",
    "category": "WEDDING",
    "name": "Geetika & Mayank",
    "metadata": {
      "title": "Geetika & Mayank",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image540315391675424618DSC08371.JPG",
      "/admin_image/wid/hero_image3356692401675424618DSC08478.JPG",
      "/admin_image/wid/hero_image20719129991675424618DSC08403.JPG"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/133991831516754246151N3A0094.JPG",
        "alt": "Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/43858055816754246151N3A0317.JPG",
        "alt": "Best Wedding Photographers"
      },
      {
        "src": "/admin_image/wid/214335097516754246161N3A0512.JPG",
        "alt": "Candid Photographer"
      },
      {
        "src": "/admin_image/wid/4325215316754246161N3A0845.JPG",
        "alt": "Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/79108112516754246161N3A0933.JPG",
        "alt": "Best Wedding Photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/211119228616754246161N3A1026.JPG",
        "alt": "Best Photographer in Delhi"
      },
      {
        "src": "/admin_image/wid/138401137916754246171N3A1088.JPG",
        "alt": "Candid Photographers in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/203451896316754246171N3A9339.JPG",
        "alt": "Pre Wedding Photography Price"
      },
      {
        "src": "/admin_image/wid/14262928291675424617DSC08442.JPG",
        "alt": "Top Wedding Photographers in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/18865098531675424617DSC08849.JPG",
        "alt": "drone wedding photography"
      }
    ],
    "content": {
      "desc4": "Geetika and Mayank tied the knot for the most important bond of their life. The wedding photoshoot of Geetika and Mayank at Wedding Photo Planet was nothing short of magical. The bride and groom were glowing with love and joy and the photo that was taken truly captured this sentiment. The backdrop of the photo was carefully chosen to complement the couple, featuring cascading mountains, lush green trees, and a breathtaking sky. The photo portrayed the couple in their finest moments, and the combination of the beautiful scenery and the couple's smiles was truly unforgettable. The picture was a true testament to the couple's love and to the Wedding Photo Planet's ability to create breathtaking wedding photos. Geetika and Mayank's wedding photo will surely be remembered for years to come and serves as a reminder of their special day.",
      "heading1": "Wedding Photoshoot at Drive Inn 24 Hotel & Resort",
      "desc1": "The wedding photoshoot of Geetika and Mayank at the Drive Inn 24 Hotel & Resort was an incredible masterpiece. The picturesque backdrop of the hotel and resort was the perfect setting for the couple's special day. The hotel and resort provided the perfect backdrop for the wedding photo, as the couple was surrounded by lush greenery and a breathtaking view. The photo also captured the couple in their finest moments, as they were almost glowing with joy. The wedding photo taken at the Drive Inn 24 Hotel & Resort was truly one of a kind and will be cherished by Geetika and Mayank for years to come. The beautiful scenery and the couple's smiles in the photo make it a true testament to their love and the ability of the Wedding Photo Planet to create beautiful and meaningful wedding photos.",
      "banner1": "/admin_image/wid/banner189739225216754246151N3A1316.JPG",
      "heading2": "Best Candid Wedding Photographers in Delhi.",
      "desc2": "Candid Photos are the most beautiful part of the whole album. Candid photos and videos deliver the most beautiful and pure form of emotions. But only if the photographers and the cameramen have good skills. The team of Wedding Photo Planet provides you with the team of the most excellent and creative cameramen who can capture pure emotions with their cameras.",
      "heading3": "Best Wedding Cinematographers in Delhi",
      "desc3": "Pictures are not the only thing that makes your wedding album complete. Your album will remain incomplete without the videos. Therefore, Wedding Photo Planet is the go-to destination for finding the best wedding cinematographers in Delhi. Our team of experienced professionals will help you capture the most beautiful moments of your special day. We understand that your wedding is one of the most important days of your life and we strive to make it memorable by providing you with stunning visuals that will last a lifetime.",
      "banner2": "/admin_image/wid/banner127241159416754246151N3A1369.JPG"
    }
  },
  {
    "id": "88",
    "slug": "pre-wedding-photos-bhavneet-gurneet",
    "category": "PRE WEDDING",
    "name": "Bhavneet & Gurneet",
    "metadata": {
      "title": "Bhavneet & Gurneet",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image8436760921675513456DSC02051.JPG",
      "/admin_image/wid/hero_image4155407691675513456DSC01831.JPG",
      "/admin_image/wid/hero_image13393235821675513457DSC01607.JPG"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/2018918851675513454DSC02681.JPG",
        "alt": "Outdoor Pre Wedding Shoot Ideas"
      },
      {
        "src": "/admin_image/wid/5618114331675513454DSC02519.JPG",
        "alt": "Traditional Pre Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/7661606021675513454DSC02593.JPG",
        "alt": "Pre Wedding Shoot Price"
      },
      {
        "src": "/admin_image/wid/6891063191675513454DSC02494.JPG",
        "alt": "Pre Wedding Shoot Cost In Delhi"
      },
      {
        "src": "/admin_image/wid/868643271675513455DSC02393.JPG",
        "alt": "Affordable Pre Wedding Shoot Near Me"
      },
      {
        "src": "/admin_image/wid/11495992901675513455DSC02221.JPG",
        "alt": "Candid Pre Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/13099021661675513455DSC02373.JPG",
        "alt": "Cinematic Pre Wedding Video"
      },
      {
        "src": "/admin_image/wid/17946463101675513455DSC02066.JPG",
        "alt": "Drone Pre Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/7411481601675513455DSC01845.JPG",
        "alt": "Indoor Pre Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/21270328811675513456DSC01776.JPG",
        "alt": "Royal Themed Pre Wedding Shoot"
      }
    ],
    "content": {
      "desc4": "Pre-Wedding photoshoot of Bhavneet and Gurneet was an eventful and emotional experience. Our experience with this couple was magical, and the couple and our team were working close to give the perfect result. The cute couple had a bright and big smile throughout the shoot day. So, let us tell you about the experience of their pre-wedding photoshoot.",
      "heading1": "Pre-Wedding Photoshoot in Studio Future Forward",
      "desc1": "Pre-wedding photoshoot of Bhavneet and Gurneet was done at Studio Future Forward. The studio is located in Faridabad - Gurgaon Rd, Haryana. The studio was spread over a large area. It offered various beautiful and gorgeous prompts and sets for their photoshoot. The shoot was done on multiple indoor and outdoor locations. The outfits were great and matched according to the background.",
      "banner1": "/admin_image/wid/banner16557636331675513453DSC02818.JPG",
      "heading2": "Best candid pre-wedding photographers in Delhi",
      "desc2": "Wedding Photo Planet offers you a team of great and talented pre-wedding candid photographers. Candids are the best part in an album. It shows the true emotions and the love flashing through the eyes. The intimacy and the love of the couple for each other reflects in their eyes. But, only a talented photographer can capture those moments in their camera. Wedding Photo Planet provides you with the most talented team of candid photographers from Delhi NCR who can capture some memorable candid images and clips from your pre-wedding shoot.",
      "heading3": "Best cinematographers in Delhi NCR",
      "desc3": "We have a team of excellent pre-wedding cinematographers to capture stunning video clips from the entire shoot. Those can be either some random sweet candid moments or posed moments. A great cinematographers knows how to capture a moment in the most beautiful way that adds up to your album and make it look as good as the pictures. The cinematographers at Wedding Photo Planet are highly experienced and are expert in their field. We assure you that it will be the best decision to hire us and avail our services for your pre-wedding shoot.",
      "banner2": "/admin_image/wid/banner16684935421675513453DSC02456.JPG"
    }
  },
  {
    "id": "89",
    "slug": "pre-wedding-photos-preksha-chetan",
    "category": "PRE WEDDING",
    "name": "Preksha & Chetan",
    "metadata": {
      "title": "Preksha & Chetan",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image8021893411675576679DSC02259-Edit.JPG",
      "/admin_image/wid/hero_image20608066441675576679DSC02947-Edit.JPG",
      "/admin_image/wid/hero_image2569450481675576679DSC03334-Edit.JPG"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/16880353611675576676DSC01252-Edit.JPG",
        "alt": "Pre Wedding Shoot Locations In India"
      },
      {
        "src": "/admin_image/wid/20928866691675576676DSC01397-Edit.JPG",
        "alt": "Pre Wedding Shoot Price"
      },
      {
        "src": "/admin_image/wid/5381416301675576677DSC02167-Edit.JPG",
        "alt": "Pre Wedding Shoot Charges"
      },
      {
        "src": "/admin_image/wid/12666647121675576677DSC02245-Edit.JPG",
        "alt": "Adventure Pre Wedding Packages Rishikesh"
      },
      {
        "src": "/admin_image/wid/17394915391675576677DSC02944-Edit.JPG",
        "alt": "Cinematic Pre Wedding Video Cost"
      },
      {
        "src": "/admin_image/wid/425008241675576677DSC03110-Edit.JPG",
        "alt": "Affordable Pre Wedding Shoot"
      },
      {
        "src": "/admin_image/wid/9844846251675576678DSC03232a-Edit.JPG",
        "alt": "Best Pre Wedding Shoot Prices Near Me"
      },
      {
        "src": "/admin_image/wid/12263272231675576678DSC03579-Edit.JPG",
        "alt": "Budget Pre Wedding Shoot In Rishikesh"
      },
      {
        "src": "/admin_image/wid/20334179751675576678DSC03704-Edit.JPG",
        "alt": "Cinematic Pre Wedding Video Cost"
      },
      {
        "src": "/admin_image/wid/5314515691675576678DSC03753-Edit.JPG",
        "alt": "Pre Wedding Shoot Poses"
      }
    ],
    "content": {
      "desc4": "Preksha and Chetan, like others, are a really cute couple. Both the groom and the bride were so into each other. Preksha and Chetan were a truly beautiful couple. They were deeply in love, and their relationship radiated a special warmth and closeness that made everyone around them feel content and happy. The two were inseparable, always finding new ways to show their profound love and appreciation for one another. Preksha and Chetan had a special relationship that inspired happiness and admiration in everyone who witnessed it.",
      "heading1": "Pre-Wedding photoshoot at The Perfect Valley",
      "desc1": "The Perfect Valley is one of the most beautiful photography studios in Delhi. The Perfect Valley offers you a wide range of gorgeous sets and prompts for your Photoshoot. That is why a lot of couples like to get their photoshoot done at The Perfect Valley. The studio has got various beautiful and romantic sets. The couple Preksha and Chetan had their shoots with multiple prompts. The couple was dressed in various outfits and the shoot was done both under the sun as well as under the starlight.",
      "banner1": "/admin_image/wid/banner11731490761675576676Prekesha Banner 01.JPG",
      "heading2": "Best candid pre-wedding photographers in Delhi",
      "desc2": "Wedding Photo Planet is dedicated to providing you with the best candid pre-wedding photography in Delhi. Our team of expert photographers are skilled in capturing the candid moments and emotions of your special day in an unobtrusive and natural way. They understand how to capture the real emotions, reactions and feelings of your big day, creating a collection of images that truly reflect the essence of your wedding. Candid photography allows for a more natural and authentic representation of your wedding day compared to traditional photography and our photographers are known for their ability to capture those real moments that are often missed by the traditional photographers.",
      "heading3": "pre-Wedding photography packages in delhi",
      "desc3": "Wedding Photo Planet offers a wide range of pre-wedding photography packages in Delhi to suit your needs and budget. Our team of experts has carefully curated a variety of packages that include everything from traditional and candid photography to pre-wedding shoots and videography. Whether you're looking for full-day coverage or just a few hours, we have a package that will fit your requirements.",
      "banner2": "/admin_image/wid/banner112943534941675576676Prekesha Banner 02.JPG"
    }
  },
  {
    "id": "90",
    "slug": "pre-wedding-photos-karan-and-swati",
    "category": "PRE WEDDING",
    "name": "Karan & Swati",
    "metadata": {
      "title": "Karan & Swati",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image3877378621675683219DSC07296.jpg",
      "/admin_image/wid/hero_image16886080141675683221DSC06965.jpg",
      "/admin_image/wid/hero_image17423889191675683222DSC08174.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/6744463161675683205DSC07181.jpg",
        "alt": "Pre Wedding Shoot Packages With Price"
      },
      {
        "src": "/admin_image/wid/16526757781675683206DSC07207.jpg",
        "alt": "Pre Wedding Shoot Price List"
      },
      {
        "src": "/admin_image/wid/21403421941675683207DSC07227.jpg",
        "alt": "Full Pre Wedding Shoot Package Cost"
      },
      {
        "src": "/admin_image/wid/13217823421675683209DSC07290.jpg",
        "alt": "Indoor and outdoor Pre Wedding Shoot Package Price"
      },
      {
        "src": "/admin_image/wid/17102455291675683211DSC07353.jpg",
        "alt": "Luxury Pre Wedding Photography Packages"
      },
      {
        "src": "/admin_image/wid/18421014551675683213DSC07429.jpg",
        "alt": "Custom Pre Wedding Shoot Packages"
      },
      {
        "src": "/admin_image/wid/9017540461675683215DSC07464.jpg",
        "alt": "Pre Wedding Shoot Packages Under 20k"
      },
      {
        "src": "/admin_image/wid/7756423341675683216DSC08050.jpg",
        "alt": "Pre Wedding Shoot Price For Destination Locations"
      },
      {
        "src": "/admin_image/wid/19031451951675683217DSC08068.jpg",
        "alt": "Royal themed pre wedding shoot"
      },
      {
        "src": "/admin_image/wid/12273969981675683218DSC08786.jpg",
        "alt": "Couple photoshoot before wedding"
      }
    ],
    "content": {
      "desc4": "Karan and Swati are a young and majestic couple. Both of them are highly in love with each other and their passion for each other reflects in their eyes. Our team was blessed and it was a fascinating experience to work with them. The pre-wedding shoot of this couple went really great and the photos and videos from the shoot came out just perfect.",
      "heading1": "Pre-wedding photoshoot at Photo Paradise",
      "desc1": "The pre-wedding shoot of Karan and Swati was done at studio Photo Paradise. The studio provides various beautiful sets and prompts with gorgeous architecture that gives a stunning backdrop to the images and clips. The team of Wedding Photo Planet worked really closely with the couple so that the pictures of the couple stand out amazingly. The couple was also very cooperative with the team. Overall, we enjoyed the event with them. The couple was beautifully dressed and both the bride and the groom were looking fabulous together.",
      "banner1": "/admin_image/wid/banner11310482731675683203DSC06865.jpg",
      "heading2": "Best Cinematographers in Delhi",
      "desc2": "Wedding Photo Planet has plenty of work experience in event photography or cinematography. A cinematographer is able to take the moments with a lovely and elegant touch. Our cinematographers capture all the gorgeous and cherishable moments from the event with their cameras. We use top-of-quality gadgets and equipment that help us in capturing the most splendid and cherishable moments.",
      "heading3": "Prices and Packages in Delhi",
      "desc3": "We understand that wedding preparations can sometimes be a burden on your bank account. That is why we have multiple packages and prices for you so you can avail our top-notch quality of services without even compromising anything from the preparations. We respect everyone’s pocket and that is why we introduce more than one price to you. For more information, you can contact us through any social media app or call us on the phone numbers given below",
      "banner2": "/admin_image/wid/banner11730222921675683204DSC07165.jpg"
    }
  },
  {
    "id": "97",
    "slug": "wedding-photos-himanshu-bhawna",
    "category": "WEDDING",
    "name": "Himanshu & Bhawna's Grand Wedding Captured by Wedding Photo Planet",
    "metadata": {
      "title": "Himanshu & Bhawna's Grand Wedding Captured by Wedding Photo Planet",
      "description": ""
    },
    "heroSlides": [
      "/admin_image/wid/hero_image159092241753536148Candid Photogrpaher Near Me.jpg",
      "/admin_image/wid/hero_image7947866011753536149Candid Photogrpaher In delhi.jpg",
      "/admin_image/wid/hero_image11735034941753536149Candid Photogrpaher.jpg"
    ],
    "gallery": [
      {
        "src": "/admin_image/wid/38647021217535361444U0A2339.jpg",
        "alt": "Candid wedding photography Delhi NCR"
      },
      {
        "src": "/admin_image/wid/78755777417535361444U0A2340.jpg",
        "alt": "Pre wedding shoot Jaipur couple pose"
      },
      {
        "src": "/admin_image/wid/78518313517535361454U0A2384.jpg",
        "alt": "Rishikesh pre wedding cinematic shoot"
      },
      {
        "src": "/admin_image/wid/94922624017535361464U0A2413.jpg",
        "alt": "Delhi pre shoot wedding by experts"
      },
      {
        "src": "/admin_image/wid/125505448217535361464U0A2425.jpg",
        "alt": "Traditional Indian wedding photo Delhi"
      },
      {
        "src": "/admin_image/wid/88793711117535361464U0A2441.jpg",
        "alt": "Phera candid shot wedding photographer"
      },
      {
        "src": "/admin_image/wid/27454436617535361474U0A2446.jpg",
        "alt": "Bridal portrait by Delhi photographer"
      },
      {
        "src": "/admin_image/wid/194204857417535361474U0A2453.jpg",
        "alt": "Luxury pre wedding shoot Delhi NCR"
      },
      {
        "src": "/admin_image/wid/211590972117535361474U0A2464.jpg",
        "alt": "Couple shoot Jaipur palace location"
      },
      {
        "src": "/admin_image/wid/155233394817535365394U0A2534.jpg",
        "alt": "Engagement shoot candid Delhi NCR"
      },
      {
        "src": "/admin_image/wid/114063152817535365394U0A2539.jpg",
        "alt": "Bridal look by top photographer Delhi"
      },
      {
        "src": "/admin_image/wid/178003099517535365404U0A2466.jpg",
        "alt": "Outdoor shoot Rishikesh pre wedding"
      },
      {
        "src": "/admin_image/wid/95933852617535365414U0A2497.jpg",
        "alt": "Haldi candid photo Delhi wedding"
      },
      {
        "src": "/admin_image/wid/125008085517535365414U0A2502.jpg",
        "alt": "Ring ceremony close-up wedding shot"
      },
      {
        "src": "/admin_image/wid/76935194317535365414U0A2515.jpg",
        "alt": "Golden hour couple shoot Delhi NCR"
      },
      {
        "src": "/admin_image/wid/171186495917535365424U0A2521.jpg",
        "alt": "Cinematic videography Delhi wedding"
      },
      {
        "src": "/admin_image/wid/100320091117535365434U0A2523.jpg",
        "alt": "Candid wedding rituals photography"
      },
      {
        "src": "/admin_image/wid/64364186217535365434U0A2525.jpg",
        "alt": "Groom entry wedding photo Delhi"
      },
      {
        "src": "/admin_image/wid/91407885617535366884U0A2543.jpg",
        "alt": "Pre wedding shoot price Delhi NCR"
      },
      {
        "src": "/admin_image/wid/139959773217535366884U0A2556.jpg",
        "alt": "Romantic shoot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/1143809317535366894U0A2559.jpg",
        "alt": "Candid wedding photography"
      },
      {
        "src": "/admin_image/wid/125159981717535366904U0A2563.jpg",
        "alt": "Candid wedding photographers"
      },
      {
        "src": "/admin_image/wid/14675296417535366904U0A2567.jpg",
        "alt": "Wedding candid photography"
      },
      {
        "src": "/admin_image/wid/12015325317535366914U0A2583.jpg",
        "alt": "Candid wedding photos"
      },
      {
        "src": "/admin_image/wid/121693736917535366924U0A2657.jpg",
        "alt": "Best candid wedding photos"
      },
      {
        "src": "/admin_image/wid/36588844917535366934U0A2659.jpg",
        "alt": "Candid wedding photo ideas"
      },
      {
        "src": "/admin_image/wid/68725466417535366934U0A2667.jpg",
        "alt": "Wedding candid shots"
      },
      {
        "src": "/admin_image/wid/54370264817535366944U0A2678.jpg",
        "alt": "Candid wedding images HD"
      },
      {
        "src": "/admin_image/wid/92015107117535367264U0A2680.jpg",
        "alt": "Candid photography wedding"
      },
      {
        "src": "/admin_image/wid/77689237717535367274U0A2686.jpg",
        "alt": "Candid photography for weddings"
      },
      {
        "src": "/admin_image/wid/93231636717535367284U0A2722.jpg",
        "alt": "Candid wedding photography Delhi"
      },
      {
        "src": "/admin_image/wid/3544172017535367294U0A2726.jpg",
        "alt": "Candid wedding photographers in Delhi"
      },
      {
        "src": "/admin_image/wid/99972201617535367304U0A2774.jpg",
        "alt": "Delhi wedding photography candid style"
      },
      {
        "src": "/admin_image/wid/118151700417535367304U0A2778.jpg",
        "alt": "Candid bridal shoot Delhi NCR"
      },
      {
        "src": "/admin_image/wid/181924093817535367314U0A2784.jpg",
        "alt": "Best candid photographers in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/98566485817535367324U0A2790.jpg",
        "alt": "Wedding candid photo shoot in Delhi"
      },
      {
        "src": "/admin_image/wid/56912385917535367324U0A2791.jpg",
        "alt": "Bridal candid photography"
      },
      {
        "src": "/admin_image/wid/157264205417535367334U0A2794.jpg",
        "alt": "Desi wedding photography"
      },
      {
        "src": "/admin_image/wid/196373346217535373194U0A2801.jpg",
        "alt": "Cinematic candid wedding shoot"
      },
      {
        "src": "/admin_image/wid/193994564217535373194U0A2851.jpg",
        "alt": "Royal candid wedding photos"
      },
      {
        "src": "/admin_image/wid/73113851617535373204U0A2938.jpg",
        "alt": "Natural light candid wedding photography"
      },
      {
        "src": "/admin_image/wid/160482704617535373214U0A2943.jpg",
        "alt": "Emotional candid moments in wedding"
      },
      {
        "src": "/admin_image/wid/83374152917535373214U0A2954.jpg",
        "alt": "Artistic candid wedding shots"
      },
      {
        "src": "/admin_image/wid/155508653417535373224U0A2958.jpg",
        "alt": "Traditional wedding candid images"
      },
      {
        "src": "/admin_image/wid/79590130017535373224U0A2959.jpg",
        "alt": "Candid photography Instagram"
      },
      {
        "src": "/admin_image/wid/124912514717535373234U0A2962.jpg",
        "alt": "Trending candid wedding reels"
      },
      {
        "src": "/admin_image/wid/175395083517535373244U0A2965.jpg",
        "alt": "Viral candid bride moments"
      },
      {
        "src": "/admin_image/wid/70451970817535373254U0A2975.jpg",
        "alt": "Wedding candid photo for Instagram"
      },
      {
        "src": "/admin_image/wid/2566851217535373254U0A2978.jpg",
        "alt": "Candid wedding shots for reels"
      },
      {
        "src": "/admin_image/wid/94129318317535373254U0A2984.jpg",
        "alt": "Instagrammable wedding candids"
      },
      {
        "src": "/admin_image/wid/118044921217536878804U0A2993.jpg",
        "alt": "Candid wedding photography ideas 2025"
      },
      {
        "src": "/admin_image/wid/199917726217536878814U0A3000.jpg",
        "alt": "Haldi candid photography"
      },
      {
        "src": "/admin_image/wid/214264333217536878824U0A3018.jpg",
        "alt": "Mehndi candid wedding photos"
      },
      {
        "src": "/admin_image/wid/32872946017536878834U0A3020.jpg",
        "alt": "Candid shots during pheras"
      },
      {
        "src": "/admin_image/wid/208051760317536878844U0A3022.jpg",
        "alt": "Emotional wedding bidaai candid"
      },
      {
        "src": "/admin_image/wid/209220951317536878844U0A3025.jpg",
        "alt": "Couple candid pre-wedding shoot"
      },
      {
        "src": "/admin_image/wid/111406212217536878854U0A3032.jpg",
        "alt": "Candid marriage photoshoot"
      },
      {
        "src": "/admin_image/wid/193972853917536878864U0A3035.jpg",
        "alt": "Candid ring ceremony photography"
      },
      {
        "src": "/admin_image/wid/142355432717536878874U0A3042.jpg",
        "alt": "Bride and groom candid wedding moment"
      },
      {
        "src": "/admin_image/wid/191327315317536878884U0A3045.jpg",
        "alt": "Natural candid photo at Indian wedding"
      },
      {
        "src": "/admin_image/wid/34108396417536879484U0A3080.jpg",
        "alt": "Traditional candid wedding ceremony"
      },
      {
        "src": "/admin_image/wid/188585197817536879494U0A3085.jpg",
        "alt": "Bride candid entry moment photo"
      },
      {
        "src": "/admin_image/wid/114933843217536879504U0A3092.jpg",
        "alt": "Best candid wedding images Delhi"
      },
      {
        "src": "/admin_image/wid/40935337117536879514U0A3097.jpg",
        "alt": "Phera candid wedding photography"
      },
      {
        "src": "/admin_image/wid/127444062817536879514U0A3115.jpg",
        "alt": "Bride smiling candid wedding photo"
      },
      {
        "src": "/admin_image/wid/181154070917536879524U0A3053.jpg",
        "alt": "Romantic pre wedding shoot in Jaipur"
      },
      {
        "src": "/admin_image/wid/85049429317536879534U0A3062.jpg",
        "alt": "Pre wedding couple shoot Delhi NCR"
      },
      {
        "src": "/admin_image/wid/105270059817536879544U0A3064.jpg",
        "alt": "Scenic outdoor pre wedding photo"
      },
      {
        "src": "/admin_image/wid/151041688317536879554U0A3069.jpg",
        "alt": "Modern pre wedding photography idea"
      },
      {
        "src": "/admin_image/wid/170831138017536879554U0A3071.jpg",
        "alt": "Cinematic pre wedding shoot India"
      },
      {
        "src": "/admin_image/wid/64805477117536880474U0A3129.jpg",
        "alt": "Best pre wedding shoot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/15166568317536880484U0A3132.jpg",
        "alt": "Posing couple pre wedding image"
      },
      {
        "src": "/admin_image/wid/87174012917536880494U0A3160.jpg",
        "alt": "Elegant pre wedding shoot Rishikesh"
      },
      {
        "src": "/admin_image/wid/77342409517536880504U0A3175.jpg",
        "alt": "Pre wedding shoot with royal theme"
      },
      {
        "src": "/admin_image/wid/111937666017536880504U0A3197.jpg",
        "alt": "Couple holding hands pre wedding pic"
      },
      {
        "src": "/admin_image/wid/103185024717536880514U0A3202.jpg",
        "alt": "Cinematic wedding video moment"
      },
      {
        "src": "/admin_image/wid/159076028217536880524U0A3221.jpg",
        "alt": "Bride walking cinematic wedding scene"
      },
      {
        "src": "/admin_image/wid/203025840517536880524U0A3226.jpg",
        "alt": "Film-style wedding videography Delhi"
      },
      {
        "src": "/admin_image/wid/43428536317536880534U0A3231.jpg",
        "alt": "Wedding cinematic trailer still"
      },
      {
        "src": "/admin_image/wid/170100043017536880544U0A3236.jpg",
        "alt": "Emotional cinematic wedding photo"
      },
      {
        "src": "/admin_image/wid/9772218817536881334U0A3321.jpg",
        "alt": "Creative cinematic videography shot"
      },
      {
        "src": "/admin_image/wid/104585838417536881344U0A3338.jpg",
        "alt": "Drone cinematic wedding video still"
      },
      {
        "src": "/admin_image/wid/67801233617536881354U0A3343.jpg",
        "alt": "Couple cinematic entry wedding"
      },
      {
        "src": "/admin_image/wid/132790744717536881364U0A3242.jpg",
        "alt": "Cinematic slow-motion wedding moment"
      },
      {
        "src": "/admin_image/wid/95968352617536881364U0A3248.jpg",
        "alt": "Romantic cinematic wedding clip frame"
      },
      {
        "src": "/admin_image/wid/22517467017536881374U0A3250.jpg",
        "alt": "Destination wedding in Udaipur shot"
      },
      {
        "src": "/admin_image/wid/158625835817536881384U0A3258.jpg",
        "alt": "Rishikesh destination wedding moment"
      },
      {
        "src": "/admin_image/wid/11821489217536881384U0A3264.jpg",
        "alt": "Couple at destination wedding shoot"
      },
      {
        "src": "/admin_image/wid/185233870917536881394U0A3278.jpg",
        "alt": "Scenic background destination wedding"
      },
      {
        "src": "/admin_image/wid/66845975017536881404U0A3306.jpg",
        "alt": "Jaipur fort destination wedding shoot"
      },
      {
        "src": "/admin_image/wid/88439814417536881914U0A3386.jpg",
        "alt": "Royal destination wedding photo"
      },
      {
        "src": "/admin_image/wid/54772007817536881924U0A3396.jpg",
        "alt": "Pre wedding destination photography"
      },
      {
        "src": "/admin_image/wid/166105386117536881934U0A3402.jpg",
        "alt": "Couple dancing destination wedding"
      },
      {
        "src": "/admin_image/wid/94796052817536881934U0A3348.jpg",
        "alt": "Mountain view destination wedding shot"
      },
      {
        "src": "/admin_image/wid/40506911417536881944U0A3351.jpg",
        "alt": "Lake-side destination wedding photo"
      },
      {
        "src": "/admin_image/wid/108718066717536881954U0A3368.jpg",
        "alt": "Traditional wedding photography India"
      },
      {
        "src": "/admin_image/wid/141205919117536881954U0A3371.jpg",
        "alt": "Bride in red lehenga traditional photo"
      },
      {
        "src": "/admin_image/wid/93127212417536881964U0A3376.jpg",
        "alt": "Ritual moment traditional wedding shot"
      },
      {
        "src": "/admin_image/wid/204457591917536881974U0A3382.jpg",
        "alt": "Traditional Indian groom portrait"
      },
      {
        "src": "/admin_image/wid/44568619117536881974U0A3385.jpg",
        "alt": "Sindoor ritual traditional photo"
      },
      {
        "src": "/admin_image/wid/200052256117536882634U0A3490.jpg",
        "alt": "Family moment traditional photography"
      },
      {
        "src": "/admin_image/wid/70850548617536882634U0A3515.jpg",
        "alt": "Haldi ceremony traditional picture"
      },
      {
        "src": "/admin_image/wid/139378206817536882644U0A3516.jpg",
        "alt": "Mangalsutra ritual traditional capture"
      },
      {
        "src": "/admin_image/wid/66290052017536882654U0A3408.jpg",
        "alt": "Blessings at traditional wedding photo"
      },
      {
        "src": "/admin_image/wid/127066730517536882664U0A3416.jpg",
        "alt": "Wedding stage traditional photography"
      },
      {
        "src": "/admin_image/wid/157288654817536882664U0A3417.jpg",
        "alt": "Indian bridal portrait close-up"
      },
      {
        "src": "/admin_image/wid/73906190317536882674U0A3425.jpg",
        "alt": "Bride getting ready portrait photo"
      },
      {
        "src": "/admin_image/wid/196798596417536882684U0A3430.jpg",
        "alt": "Bridal jewelry focus shot"
      },
      {
        "src": "/admin_image/wid/50624427917536882694U0A3432.jpg",
        "alt": "Traditional bridal portrait Delhi"
      },
      {
        "src": "/admin_image/wid/15626752017536882694U0A3448.jpg",
        "alt": "Elegant bride posing solo"
      },
      {
        "src": "/admin_image/wid/120126492817536883324U0A3555.jpg",
        "alt": "Candid bridal portrait with veil"
      },
      {
        "src": "/admin_image/wid/206095064817536883334U0A3557.jpg",
        "alt": "Dramatic bridal look photography"
      },
      {
        "src": "/admin_image/wid/45283469517536883344U0A3517.jpg",
        "alt": "Natural light bridal photo shoot"
      },
      {
        "src": "/admin_image/wid/66906164117536883344U0A3518.jpg",
        "alt": "Beautiful bridal face portrait"
      },
      {
        "src": "/admin_image/wid/170074822917536883354U0A3527.jpg",
        "alt": "Bridal mehndi portrait close-up"
      },
      {
        "src": "/admin_image/wid/42634670517536883374U0A3543.jpg",
        "alt": "Aerial drone shot of wedding venue"
      },
      {
        "src": "/admin_image/wid/185481350917536883374U0A3549.jpg",
        "alt": "Couple entry drone photo wedding"
      },
      {
        "src": "/admin_image/wid/57333751617536883384U0A3550.jpg",
        "alt": "Mandap drone wedding photography"
      },
      {
        "src": "/admin_image/wid/176464206517536883394U0A3552.jpg",
        "alt": "Haldi function drone aerial shot"
      },
      {
        "src": "/admin_image/wid/139553936317536883394U0A3553.jpg",
        "alt": "Drone view of wedding crowd"
      },
      {
        "src": "/admin_image/wid/78023379617536883904U0A3609.jpg",
        "alt": "Wide angle drone wedding capture"
      },
      {
        "src": "/admin_image/wid/138921952717536883904U0A3611.jpg",
        "alt": "Drone photo of couple from above"
      },
      {
        "src": "/admin_image/wid/155742743717536883904U0A3619.jpg",
        "alt": "Cinematic drone wedding shot"
      },
      {
        "src": "/admin_image/wid/18761268617536883914U0A3637.jpg",
        "alt": "Palace drone wedding photography"
      },
      {
        "src": "/admin_image/wid/202629877017536883924U0A3560.jpg",
        "alt": "Grand wedding drone overview shot"
      },
      {
        "src": "/admin_image/wid/80995668617536883924U0A3563.jpg",
        "alt": "Luxury wedding photography Delhi"
      },
      {
        "src": "/admin_image/wid/16304749117536883934U0A3574.jpg",
        "alt": "Bride in designer lehenga luxury shoot"
      },
      {
        "src": "/admin_image/wid/100575676917536883944U0A3580.jpg",
        "alt": "High-end wedding celebration image"
      },
      {
        "src": "/admin_image/wid/55716812717536883954U0A3593.jpg",
        "alt": "Royal theme luxury wedding photo"
      },
      {
        "src": "/admin_image/wid/67453333317536883954U0A3598.jpg",
        "alt": "Designer stage luxury wedding shot"
      },
      {
        "src": "/admin_image/wid/51739083917536884344U0A3675.jpg",
        "alt": "Luxury couple pose wedding photo"
      },
      {
        "src": "/admin_image/wid/766644117536884344U0A3677.jpg",
        "alt": "Wedding decor luxury setup image"
      },
      {
        "src": "/admin_image/wid/173274685917536884344U0A3682.jpg",
        "alt": "Premium wedding photoshoot moment"
      },
      {
        "src": "/admin_image/wid/2339238917536884354U0A3705.jpg",
        "alt": "Groom in sherwani luxury portrait"
      },
      {
        "src": "/admin_image/wid/144552183417536884354U0A3643.jpg",
        "alt": "Luxury destination wedding photo"
      },
      {
        "src": "/admin_image/wid/160952157317536884364U0A3644.jpg",
        "alt": "Themed wedding shoot royal concept"
      },
      {
        "src": "/admin_image/wid/191283106217536884364U0A3650.jpg",
        "alt": "Styled bride photoshoot idea"
      },
      {
        "src": "/admin_image/wid/91346041417536884374U0A3654.jpg",
        "alt": "Fairy tale wedding styled photo"
      },
      {
        "src": "/admin_image/wid/40602573417536884384U0A3670.jpg",
        "alt": "Creative wedding theme setup shot"
      },
      {
        "src": "/admin_image/wid/209322852017536884384U0A3673.jpg",
        "alt": "Boho style wedding photography"
      },
      {
        "src": "/admin_image/wid/197279305117536884774U0A3750.jpg",
        "alt": "Colorful props wedding theme shoot"
      },
      {
        "src": "/admin_image/wid/105498412217536884784U0A3753.jpg",
        "alt": "Pre wedding styled shoot outdoors"
      },
      {
        "src": "/admin_image/wid/7580162817536884794U0A3757.jpg",
        "alt": "Bollywood-inspired wedding shoot"
      },
      {
        "src": "/admin_image/wid/102324300417536884804U0A3760.jpg",
        "alt": "Conceptual couple photography shoot"
      },
      {
        "src": "/admin_image/wid/7956830017536884804U0A3713.jpg",
        "alt": "Thematic floral wedding shoot"
      },
      {
        "src": "/admin_image/wid/24868691417536884814U0A3714.jpg",
        "alt": "Candid haldi ceremony photo"
      },
      {
        "src": "/admin_image/wid/185156634617536884814U0A3719.jpg",
        "alt": "Mehndi event bride portrait"
      },
      {
        "src": "/admin_image/wid/195451989417536884814U0A3720.jpg",
        "alt": "Yellow outfit haldi celebration shot"
      },
      {
        "src": "/admin_image/wid/196050270217536884824U0A3740.jpg",
        "alt": "Groom in haldi splash moment"
      },
      {
        "src": "/admin_image/wid/47435964117536884824U0A3743.jpg",
        "alt": "Friends applying haldi candid photo"
      },
      {
        "src": "/admin_image/wid/178961828617536885264U0A3860.jpg",
        "alt": "Mehndi function candid photography"
      },
      {
        "src": "/admin_image/wid/134602318817536885274U0A3877.jpg",
        "alt": "Bride laughing haldi function shot"
      },
      {
        "src": "/admin_image/wid/202653917617536885284U0A3911.jpg",
        "alt": "Mehndi design close-up photography"
      },
      {
        "src": "/admin_image/wid/59281236017536885294U0A3920.jpg",
        "alt": "Haldi decor vibrant photo"
      },
      {
        "src": "/admin_image/wid/172331741117536885304U0A3765.jpg",
        "alt": "Emotional moment haldi shoot"
      },
      {
        "src": "/admin_image/wid/167891276717536885314U0A3777.jpg",
        "alt": "North Indian wedding cultural photo"
      },
      {
        "src": "/admin_image/wid/119804558017536885324U0A3790.jpg",
        "alt": "Sikh wedding traditional moment"
      },
      {
        "src": "/admin_image/wid/43746943717536885334U0A3800.jpg",
        "alt": "Punjabi wedding celebration photo"
      },
      {
        "src": "/admin_image/wid/49729059317536885344U0A3814.jpg",
        "alt": "Ethnic groom entry candid photo"
      },
      {
        "src": "/admin_image/wid/69339806417536885344U0A3835.jpg",
        "alt": "Regional cultural wedding capture"
      },
      {
        "src": "/admin_image/wid/75079392017536886214U0A4013.jpg",
        "alt": "Indian cultural wedding photography"
      },
      {
        "src": "/admin_image/wid/31961235617536886224U0A4018.jpg",
        "alt": "Candid wedding moments by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/90233817617536886224U0A4024.jpg",
        "alt": "Natural wedding emotions captured by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/99608244917536886234U0A4031.jpg",
        "alt": "Real candid photography Delhi by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/135481412417536886244U0A4037.jpg",
        "alt": "Unscripted wedding shots by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/140920410617536886254U0A3948.jpg",
        "alt": "Top candid wedding clicks – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/190414991317536886264U0A3965.jpg",
        "alt": "Romantic pre wedding shoot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/85027361917536886274U0A3989.jpg",
        "alt": "Pre wedding poses Delhi – Wedding Photo Planet style"
      },
      {
        "src": "/admin_image/wid/12013757117536886284U0A4000.jpg",
        "alt": "Jaipur pre wedding photography by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/204068008317536886284U0A4002.jpg",
        "alt": "Pre wedding ideas with Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/117164572917536887584U0A4018.jpg",
        "alt": "Stylish couple shoot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/129920553817536887594U0A4024.jpg",
        "alt": "Cinematic wedding video by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/76979371517536887604U0A4031.jpg",
        "alt": "Film-style wedding memories – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/76480935817536887614U0A4037.jpg",
        "alt": "Wedding story in motion by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/144099804017536887624U0A3948.jpg",
        "alt": "Wedding reels by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/10075956317536887634U0A3965.jpg",
        "alt": "Dramatic cinematic clips by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/207699522017536887644U0A3989.jpg",
        "alt": "Destination wedding in Udaipur by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/122000039017536887644U0A4000.jpg",
        "alt": "Rishikesh wedding shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/203441549617536887654U0A4002.jpg",
        "alt": "Destination couple photography by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/96791601017536887664U0A4013.jpg",
        "alt": "Royal venue wedding shots – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/122092074617536888754U0A4102.jpg",
        "alt": "Scenic pre wedding location – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/64223083417536888764U0A4104.jpg",
        "alt": "Classic Indian wedding photo by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/136407654017536888774U0A4118.jpg",
        "alt": "Traditional rituals shoot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/157428202017536888774U0A4128.jpg",
        "alt": "Sindoor moment captured by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/157836134217536888784U0A4039.jpg",
        "alt": "Timeless wedding memories – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/208946699817536888794U0A4056.jpg",
        "alt": "Wedding ceremony details – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/10369592317536888804U0A4069.jpg",
        "alt": "Elegant bridal portrait by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/111149060417536888814U0A4073.jpg",
        "alt": "Close-up bridal shot – Wedding Photo Planet style"
      },
      {
        "src": "/admin_image/wid/84800543917536888824U0A4075.jpg",
        "alt": "Bride in lehenga by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/6446757417536888834U0A4078.jpg",
        "alt": "Fashion-style bridal photography – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/33477154317536889814U0A5713.jpg",
        "alt": "Radiant bridal look by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/75130165417536889814U0A5727.jpg",
        "alt": "Aerial wedding shot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/125851768517536889814U0A5728.jpg",
        "alt": "Drone entry moment – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/56273821017536889824U0A5791.jpg",
        "alt": "Bird's-eye wedding photo by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/83103006917536889824U0A4176.jpg",
        "alt": "Drone ceremony shoot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/104376148217536889834U0A4186.jpg",
        "alt": "Cinematic sky shot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/167398795117536889834U0A4198.jpg",
        "alt": "Luxury wedding photography by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/131861880617536889844U0A4207.jpg",
        "alt": "Premium couple shoot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/129582876217536889854U0A4215.jpg",
        "alt": "Royal wedding coverage by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/167274508717536889864U0A4224.jpg",
        "alt": "Designer decor captured by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/80314179417536890464U0A5884.jpg",
        "alt": "High-end bridal photo – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/49235785217536890484U0A5898.jpg",
        "alt": "Styled wedding photoshoot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/38717897117536890494U0A5951.jpg",
        "alt": "Boho wedding concept by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/78040369417536890504U0A5958.jpg",
        "alt": "Thematic pre wedding look – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/202441419717536890504U0A5823.jpg",
        "alt": "Creative wedding ideas by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/209522845317536890514U0A5829.jpg",
        "alt": "Fairytale wedding theme – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/123224361817536890524U0A5843.jpg",
        "alt": "Haldi function moments – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/51502810017536890524U0A5867.jpg",
        "alt": "Mehndi candid photography by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/194781028817536890534U0A5879.jpg",
        "alt": "Vibrant haldi colors captured by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/163452428317536890534U0A5882.jpg",
        "alt": "Bride’s mehndi smile – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/121515746917536891464U0A6104.jpg",
        "alt": "Yellow theme haldi shoot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/70393416117536891474U0A6107.jpg",
        "alt": "Sikh wedding ceremony – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/137030954717536891474U0A6155.jpg",
        "alt": "Bride getting ready – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/122592518117536891484U0A5970.jpg",
        "alt": "Bridal makeup photo – traditional style"
      },
      {
        "src": "/admin_image/wid/46826144817536891494U0A5972.jpg",
        "alt": "Solo bridal entry – cinematic videography"
      },
      {
        "src": "/admin_image/wid/113974849317536891494U0A6027.jpg",
        "alt": "Bride with dupatta – bridal portrait"
      },
      {
        "src": "/admin_image/wid/205691972617536891504U0A6033.jpg",
        "alt": "Bridal mirror shot – candid photo Delhi"
      },
      {
        "src": "/admin_image/wid/172633551917536891514U0A6049.jpg",
        "alt": "Mangalsutra moment – cultural wedding"
      },
      {
        "src": "/admin_image/wid/71337821017536891514U0A6072.jpg",
        "alt": "Sindoor ceremony photo – traditional style"
      },
      {
        "src": "/admin_image/wid/155761832517536891524U0A6088.jpg",
        "alt": "Emotional bidaai – candid moment"
      },
      {
        "src": "/admin_image/wid/123603975817536891964U0A6510.jpg",
        "alt": "Haldi bride laughing – candid shot"
      },
      {
        "src": "/admin_image/wid/68977855617536891964U0A6597.jpg",
        "alt": "Mehndi design close-up – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/140021231617536891974U0A6630.jpg",
        "alt": "Bridal dance solo – cinematic style"
      },
      {
        "src": "/admin_image/wid/184464031017536891984U0A6170.jpg",
        "alt": "Bride on stage – luxury portrait shoot"
      },
      {
        "src": "/admin_image/wid/64506773117536891984U0A6218.jpg",
        "alt": "Bridal close-up – high-end photography"
      },
      {
        "src": "/admin_image/wid/29674780017536891994U0A6266.jpg",
        "alt": "Bride with bridesmaids – pre wedding shoot"
      },
      {
        "src": "/admin_image/wid/129011787317536892004U0A6290.jpg",
        "alt": "Black"
      },
      {
        "src": "/admin_image/wid/208544330417536892014U0A6368.jpg",
        "alt": "Bride back pose – candid lehenga shot"
      },
      {
        "src": "/admin_image/wid/124761656317536892024U0A6409.jpg",
        "alt": "Bride on stairs – cinematic videography"
      },
      {
        "src": "/admin_image/wid/44147032017536892024U0A6488.jpg",
        "alt": "Bride looking down – traditional portrait"
      },
      {
        "src": "/admin_image/wid/6060645317536892414U0A6751.jpg",
        "alt": "Smiling bride – candid photo India"
      },
      {
        "src": "/admin_image/wid/124898370817536892424U0A6775.jpg",
        "alt": "Bridal jewelry shot – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/75288857617536892424U0A6794.jpg",
        "alt": "Bride twirling in lehenga – pre wedding idea"
      },
      {
        "src": "/admin_image/wid/197482880117536892434U0A6846.jpg",
        "alt": "Crying bride – emotional farewell photo"
      },
      {
        "src": "/admin_image/wid/10453956817536892434U0A6653.jpg",
        "alt": "Bride at window – cinematic portrait"
      },
      {
        "src": "/admin_image/wid/17456307617536892444U0A6672.jpg",
        "alt": "Bride holding kaleere – candid close-up"
      },
      {
        "src": "/admin_image/wid/203479883817536892454U0A6682.jpg",
        "alt": "Bridal lehenga flare – twirl moment"
      },
      {
        "src": "/admin_image/wid/77413424417536892464U0A6706.jpg",
        "alt": "Bride in car – wedding exit shot"
      },
      {
        "src": "/admin_image/wid/25254353417536892464U0A6717.jpg",
        "alt": "Dupatta flying shot – cinematic bridal pose"
      },
      {
        "src": "/admin_image/wid/202155629517536892474U0A6736.jpg",
        "alt": "Bride applying perfume – getting ready"
      },
      {
        "src": "/admin_image/wid/156902912117536892824U0A7077.jpg",
        "alt": "Bride with sindoor box – cultural capture"
      },
      {
        "src": "/admin_image/wid/163728964117536892834U0A7105.jpg",
        "alt": "Bride fixing bangles – detail shot"
      },
      {
        "src": "/admin_image/wid/120918178117536892834U0A7115.jpg",
        "alt": "Bridal chooda close-up – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/18284349017536892844U0A7145.jpg",
        "alt": "Nose ring shot – traditional bridal detail"
      },
      {
        "src": "/admin_image/wid/138449785617536892844U0A6851.jpg",
        "alt": "Red bridal lehenga – full look photo"
      },
      {
        "src": "/admin_image/wid/133424845017536892854U0A6859.jpg",
        "alt": "Kid with flower shower – haldi moment"
      },
      {
        "src": "/admin_image/wid/179991357017536892854U0A6882.jpg",
        "alt": "kid dance on stage moments - wedding photo planet"
      },
      {
        "src": "/admin_image/wid/136755709517536892864U0A7014.jpg",
        "alt": "Bride in golden light – cinematic glow"
      },
      {
        "src": "/admin_image/wid/79813184317536892864U0A7020.jpg",
        "alt": "Bride sitting with dupatta over face"
      },
      {
        "src": "/admin_image/wid/158290003617536892874U0A7034.jpg",
        "alt": "Bride walking toward mandap – back shot"
      },
      {
        "src": "/admin_image/wid/157505381817536893294U0A7406.jpg",
        "alt": "Bride with parents – emotional moment"
      },
      {
        "src": "/admin_image/wid/89394158817536893304U0A7469.jpg",
        "alt": "Jewelry close-up – Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/66861810017536893314U0A7555.jpg",
        "alt": "candid wedding moment by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/200481464617536893334U0A7566.jpg",
        "alt": "natural bridal smile captured candidly"
      },
      {
        "src": "/admin_image/wid/182756621417536893344U0A7584.jpg",
        "alt": "groom candid shot during wedding rituals"
      },
      {
        "src": "/admin_image/wid/162328522017536893354U0A7153.jpg",
        "alt": "candid emotional moment during bidaai"
      },
      {
        "src": "/admin_image/wid/152931667917536893354U0A7198.jpg",
        "alt": "laughing bride candid haldi shot"
      },
      {
        "src": "/admin_image/wid/107924908217536893364U0A7233.jpg",
        "alt": "couple pre wedding shoot in Delhi"
      },
      {
        "src": "/admin_image/wid/103890043817536893374U0A7346.jpg",
        "alt": "romantic pre wedding shoot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/65848946317536893374U0A7388.jpg",
        "alt": "pre wedding photoshoot with props"
      },
      {
        "src": "/admin_image/wid/187256908617536893704U0A7844.jpg",
        "alt": "candid pre wedding photography outdoor"
      },
      {
        "src": "/admin_image/wid/26351263117536893714U0A7853.jpg",
        "alt": "couple pose ideas for pre wedding shoot"
      },
      {
        "src": "/admin_image/wid/131653253717536893724U0A7855.jpg",
        "alt": "cinematic wedding entry shot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/59995845117536893724U0A7886.jpg",
        "alt": "bride groom cinematic ring exchange moment"
      },
      {
        "src": "/admin_image/wid/128473486217536893734U0A7601.jpg",
        "alt": "slow motion wedding dance capture"
      },
      {
        "src": "/admin_image/wid/40331402117536893734U0A7809.jpg",
        "alt": "cinematic bridal walk in sunset light"
      },
      {
        "src": "/admin_image/wid/20263408517536893744U0A7828.jpg",
        "alt": "drone cinematic wedding video frame"
      },
      {
        "src": "/admin_image/wid/90865198117536893744U0A7829.jpg",
        "alt": "Jaipur destination wedding shoot"
      },
      {
        "src": "/admin_image/wid/210275100217536893754U0A7832.jpg",
        "alt": "Rishikesh wedding photography by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/153679554817536893764U0A7833.jpg",
        "alt": "Udaipur palace wedding photo shoot"
      },
      {
        "src": "/admin_image/wid/29316748617536894314U0A7987.jpg",
        "alt": "Goa beach wedding candid click"
      },
      {
        "src": "/admin_image/wid/42261166617536894314U0A8098.jpg",
        "alt": "destination pre wedding pose idea"
      },
      {
        "src": "/admin_image/wid/211816221517536894324U0A8100.jpg",
        "alt": "sindoor moment traditional photo"
      },
      {
        "src": "/admin_image/wid/47420803017536894334U0A8124.jpg",
        "alt": "mangalsutra ceremony close-up shot"
      },
      {
        "src": "/admin_image/wid/36322691317536894334U0A7887.jpg",
        "alt": "bridal pooja candid traditional style"
      },
      {
        "src": "/admin_image/wid/201312571817536894344U0A7908.jpg",
        "alt": "drone shot of wedding mandap"
      },
      {
        "src": "/admin_image/wid/161903054317536894354U0A7910.jpg",
        "alt": "aerial view of couple in garden shoot"
      },
      {
        "src": "/admin_image/wid/55206597617536894354U0A7913.jpg",
        "alt": "drone capture of bridal entry"
      },
      {
        "src": "/admin_image/wid/84923557917536894364U0A7952.jpg",
        "alt": "drone cinematic shot of wedding venue"
      },
      {
        "src": "/admin_image/wid/71979198717536894374U0A7962.jpg",
        "alt": "luxury wedding decor photography"
      },
      {
        "src": "/admin_image/wid/190487034617536895034U0A8175.jpg",
        "alt": "Candid wedding moments captured naturally"
      },
      {
        "src": "/admin_image/wid/81994912317536895045B4A0005.jpg",
        "alt": "Real expressions and emotions in candid style"
      },
      {
        "src": "/admin_image/wid/152624624117536895045B4A0019.jpg",
        "alt": "Candid bridal and groom shots during rituals"
      },
      {
        "src": "/admin_image/wid/8785219517536895055B4A0047.jpg",
        "alt": "Documentary-style candid photography for weddings"
      },
      {
        "src": "/admin_image/wid/119303432917536895064U0A8138.jpg",
        "alt": "Romantic pre-wedding shoot ideas for couples"
      },
      {
        "src": "/admin_image/wid/113595894117536895074U0A8143.jpg",
        "alt": "Outdoor pre-wedding poses with natural light"
      },
      {
        "src": "/admin_image/wid/152374692317536895074U0A8154.jpg",
        "alt": "Creative couple portraits before the big day"
      },
      {
        "src": "/admin_image/wid/129432110317536895084U0A8164.jpg",
        "alt": "Fun and emotional pre-wedding photoshoots"
      },
      {
        "src": "/admin_image/wid/152980007417536895084U0A8166.jpg",
        "alt": "Film-style wedding highlight videos"
      },
      {
        "src": "/admin_image/wid/193634371017536895094U0A8172.jpg",
        "alt": "Slow-motion romantic shots for weddings"
      },
      {
        "src": "/admin_image/wid/181924116917536895605B4A8144.jpg",
        "alt": "Storytelling cinematic wedding trailers"
      },
      {
        "src": "/admin_image/wid/137742308417536895605B4A8226.jpg",
        "alt": "Cinematic wedding films with drone   close-up fusion"
      },
      {
        "src": "/admin_image/wid/194273857617536895615B4A8248.jpg",
        "alt": "Pre-wedding couple shoot at exotic locations"
      },
      {
        "src": "/admin_image/wid/131722843117536895615B4A8268.jpg",
        "alt": "Luxury destination wedding photography in India"
      },
      {
        "src": "/admin_image/wid/143178988417536895625B4A8269.jpg",
        "alt": "Romantic shots in hills, beaches, and heritage palaces"
      },
      {
        "src": "/admin_image/wid/125647419917536895625B4A0055.jpg",
        "alt": "Jaipur, Udaipur, Goa, Rishikesh destination couple photos"
      },
      {
        "src": "/admin_image/wid/101129307417536895635B4A0099.jpg",
        "alt": "Ritual-rich traditional wedding photography"
      },
      {
        "src": "/admin_image/wid/80332135117536895645B4A7904.jpg",
        "alt": "Classic Indian wedding couple portraits"
      },
      {
        "src": "/admin_image/wid/26959001517536895645B4A7920.jpg",
        "alt": "Groom tying mangalsutra traditional photo"
      },
      {
        "src": "/admin_image/wid/203586589817536895645B4A8073.jpg",
        "alt": "Cultural wedding moments in traditional attire"
      },
      {
        "src": "/admin_image/wid/142345264917536896395B4A8401.jpg",
        "alt": "candid wedding photography India"
      },
      {
        "src": "/admin_image/wid/88506799917536896405B4A8404.jpg",
        "alt": "natural wedding moments captured"
      },
      {
        "src": "/admin_image/wid/157411906317536896405B4A8406.jpg",
        "alt": "mandap shot with floral decor"
      },
      {
        "src": "/admin_image/wid/117603588617536896415B4A8273.jpg",
        "alt": "romantic pre-wedding shoot poses"
      },
      {
        "src": "/admin_image/wid/206547011917536896425B4A8300.jpg",
        "alt": "couple pre-wedding photography India"
      },
      {
        "src": "/admin_image/wid/639672617536896435B4A8306.jpg",
        "alt": "pre-wedding shoot with drone"
      },
      {
        "src": "/admin_image/wid/2782156217536896435B4A8364.jpg",
        "alt": "outdoor couple shoot ideas"
      },
      {
        "src": "/admin_image/wid/33494885217536896445B4A8389.jpg",
        "alt": "pre-wedding photoshoot Delhi NCR"
      },
      {
        "src": "/admin_image/wid/5979247317536896455B4A8396.jpg",
        "alt": "cinematic wedding videography services"
      },
      {
        "src": "/admin_image/wid/34075831617536896465B4A8400.jpg",
        "alt": "cinematic mandap wedding video"
      },
      {
        "src": "/admin_image/wid/106157193817536897015B4A8451.jpg",
        "alt": "slow-motion wedding film ideas"
      },
      {
        "src": "/admin_image/wid/171587295117536897015B4A8456.jpg",
        "alt": "cinematic bridal entry video"
      },
      {
        "src": "/admin_image/wid/184827567617536897025B4A8460.jpg",
        "alt": "wedding teaser video production"
      },
      {
        "src": "/admin_image/wid/71914313117536897025B4A8464.jpg",
        "alt": "destination wedding photography in Jaipur"
      },
      {
        "src": "/admin_image/wid/190544769917536897035B4A8467.jpg",
        "alt": "exotic wedding shoot locations India"
      },
      {
        "src": "/admin_image/wid/78128416917536897045B4A8414.jpg",
        "alt": "pre-wedding destination shoot Goa"
      },
      {
        "src": "/admin_image/wid/74146656917536897055B4A8419.jpg",
        "alt": "wedding photo shoot in Udaipur palace"
      },
      {
        "src": "/admin_image/wid/82698029517536897065B4A8445.jpg",
        "alt": "solo bridal portrait photography"
      },
      {
        "src": "/admin_image/wid/141290389417536897065B4A8446.jpg",
        "alt": "bridal lehenga and jewelry close-up"
      },
      {
        "src": "/admin_image/wid/24847452517536897065B4A8449.jpg",
        "alt": "elegant bride posing ideas"
      },
      {
        "src": "/admin_image/wid/46605385317536897835B4A8495.jpg",
        "alt": "emotional bridal close-up shot"
      },
      {
        "src": "/admin_image/wid/118089792317536897845B4A8496.jpg",
        "alt": "creative bridal photo ideas"
      },
      {
        "src": "/admin_image/wid/52095061517536897845B4A8499.jpg",
        "alt": "traditional bridal portrait with dupatta"
      },
      {
        "src": "/admin_image/wid/199427921417536897855B4A8504.jpg",
        "alt": "soft smile bridal close-up photo"
      },
      {
        "src": "/admin_image/wid/162836410717536897855B4A8507.jpg",
        "alt": "timeless bridal look captured on camera"
      },
      {
        "src": "/admin_image/wid/87644200017536897865B4A8468.jpg",
        "alt": "bridal side profile photography"
      },
      {
        "src": "/admin_image/wid/181032401317536897885B4A8474.jpg",
        "alt": "bridal necklace close-up portrait"
      },
      {
        "src": "/admin_image/wid/134113331717536897885B4A8480.jpg",
        "alt": "lehenga twirl bridal portrait shoot"
      },
      {
        "src": "/admin_image/wid/23699456517536897895B4A8485.jpg",
        "alt": "bride flaunting earrings and maang tikka"
      },
      {
        "src": "/admin_image/wid/171420988917536897895B4A8493.jpg",
        "alt": "top view mandap drone footage"
      },
      {
        "src": "/admin_image/wid/18940825017536898295B4A8542.jpg",
        "alt": "dreamy bride photoshoot ideas"
      },
      {
        "src": "/admin_image/wid/86628541917536898305B4A8547.jpg",
        "alt": "elegant bridal portrait pre-wedding"
      },
      {
        "src": "/admin_image/wid/173125394117536898305B4A8550.jpg",
        "alt": "candid bride pose pre-wedding"
      },
      {
        "src": "/admin_image/wid/98240230417536898315B4A8555.jpg",
        "alt": "bridal lehenga twirl shot"
      },
      {
        "src": "/admin_image/wid/142366231917536898315B4A8512.jpg",
        "alt": "bride looking over shoulder pose"
      },
      {
        "src": "/admin_image/wid/21156066117536898325B4A8513.jpg",
        "alt": "sitting bride pose with dupatta flow"
      },
      {
        "src": "/admin_image/wid/127263077217536898335B4A8517.jpg",
        "alt": "traditional bride pose pre-wedding"
      },
      {
        "src": "/admin_image/wid/208706008417536898335B4A8518.jpg",
        "alt": "veil-covered bride soft pose"
      },
      {
        "src": "/admin_image/wid/105982546717536898335B4A8524.jpg",
        "alt": "modern bride fashion shoot"
      },
      {
        "src": "/admin_image/wid/147387526017536898345B4A8538.jpg",
        "alt": "golden hour bride close-up"
      },
      {
        "src": "/admin_image/wid/201470224117536898715B4A8574.jpg",
        "alt": "artistic bride silhouette shot"
      },
      {
        "src": "/admin_image/wid/72634758117536898725B4A8585.jpg",
        "alt": "bridal pose with floral backdrop"
      },
      {
        "src": "/admin_image/wid/131460877417536898725B4A8587.jpg",
        "alt": "romantic bride by the window"
      },
      {
        "src": "/admin_image/wid/71851549717536898735B4A8595.jpg",
        "alt": "bride with flying dupatta drone shot"
      },
      {
        "src": "/admin_image/wid/19732587917536898735B4A8599.jpg",
        "alt": "side profile bride pose pre-wedding"
      },
      {
        "src": "/admin_image/wid/180637949117536898745B4A8600.jpg",
        "alt": "princess-style bride standing pose"
      },
      {
        "src": "/admin_image/wid/162043085717536898745B4A8558 (2).jpg",
        "alt": "bride on stairs cinematic shot"
      },
      {
        "src": "/admin_image/wid/207419063917536898745B4A8558.jpg",
        "alt": "outdoor bridal fashion shoot"
      },
      {
        "src": "/admin_image/wid/98398109517536898755B4A8564.jpg",
        "alt": "vintage look bride pre-wedding photo"
      },
      {
        "src": "/admin_image/wid/194491560417536898755B4A8572.jpg",
        "alt": "nature interaction pre-wedding photo"
      },
      {
        "src": "/admin_image/wid/19280503817536899115B4A8616.jpg",
        "alt": "bridal pose with flowing gown"
      },
      {
        "src": "/admin_image/wid/101530135217536899125B4A8618.jpg",
        "alt": "close-up bridal makeup highlight"
      },
      {
        "src": "/admin_image/wid/92272001817536899125B4A8623.jpg",
        "alt": "bride holding bouquet portrait"
      },
      {
        "src": "/admin_image/wid/64780444017536899135B4A8628.jpg",
        "alt": "twirling bride aerial shot"
      },
      {
        "src": "/admin_image/wid/84354849017536899145B4A8556.jpg",
        "alt": "emotional bride side-glance"
      },
      {
        "src": "/admin_image/wid/68819365017536899155B4A8601.jpg",
        "alt": "barefoot bride in nature shot"
      },
      {
        "src": "/admin_image/wid/207236941317536899155B4A8603.jpg",
        "alt": "bride walking through fields"
      },
      {
        "src": "/admin_image/wid/91184078017536899155B4A8608.jpg",
        "alt": "cinematic bride with flying dupatta"
      },
      {
        "src": "/admin_image/wid/145872633617536899165B4A8611.jpg",
        "alt": "bride under floral canopy"
      },
      {
        "src": "/admin_image/wid/64570624617536899165B4A8614.jpg",
        "alt": "bride with long trail lehenga"
      },
      {
        "src": "/admin_image/wid/152396490117536899705B4A8647 (2).jpg",
        "alt": "royal bride palace shoot"
      },
      {
        "src": "/admin_image/wid/154849595517536899715B4A8647.jpg",
        "alt": "bride leaning on railing pose"
      },
      {
        "src": "/admin_image/wid/187756592217536899715B4A8657.jpg",
        "alt": "soft smile bride close-up"
      },
      {
        "src": "/admin_image/wid/3725295417536899715B4A8665.jpg",
        "alt": "bride pose with fairy lights"
      },
      {
        "src": "/admin_image/wid/39053639217536899725B4A8667.jpg",
        "alt": "bride on swing boho style"
      },
      {
        "src": "/admin_image/wid/183273639917536899735B4A8631.jpg",
        "alt": "back pose of bride holding dupatta"
      },
      {
        "src": "/admin_image/wid/13871291417536899735B4A8633.jpg",
        "alt": "classic bride with temple backdrop"
      },
      {
        "src": "/admin_image/wid/97544477117536899735B4A8639.jpg",
        "alt": "dramatic lighting bride portrait"
      },
      {
        "src": "/admin_image/wid/209311357617536899735B4A8641.jpg",
        "alt": "bride with wind-blown hair shot"
      },
      {
        "src": "/admin_image/wid/97469682117536899745B4A8646.jpg",
        "alt": "bridal pose near water reflection"
      },
      {
        "src": "/admin_image/wid/205606077317536900295B4A8712.jpg",
        "alt": "candid couple wedding moments"
      },
      {
        "src": "/admin_image/wid/139323220417536900305B4A8721.jpg",
        "alt": "emotional wedding candid shot"
      },
      {
        "src": "/admin_image/wid/24807611417536900305B4A8722.jpg",
        "alt": "groom candid reaction photo"
      },
      {
        "src": "/admin_image/wid/10797352617536900305B4A8738.jpg",
        "alt": "bride laughing candid capture"
      },
      {
        "src": "/admin_image/wid/14710165517536900315B4A8678.jpg",
        "alt": "natural light candid photography"
      },
      {
        "src": "/admin_image/wid/103243150417536900315B4A8680.jpg",
        "alt": "romantic pre-wedding shoot ideas"
      },
      {
        "src": "/admin_image/wid/70581401617536900325B4A8683.jpg",
        "alt": "couple holding hands pre-wedding pose"
      },
      {
        "src": "/admin_image/wid/135988436917536900335B4A8693.jpg",
        "alt": "cinematic pre-wedding location shoot"
      },
      {
        "src": "/admin_image/wid/184057800317536900335B4A8696.jpg",
        "alt": "pre-wedding shoot in garden/fort"
      },
      {
        "src": "/admin_image/wid/113355500117536900345B4A8702.jpg",
        "alt": "pre-wedding shoot with props"
      },
      {
        "src": "/admin_image/wid/131852276217536900685B4A8758 (2).jpg",
        "alt": "cinematic wedding video highlights"
      },
      {
        "src": "/admin_image/wid/210920675817536900695B4A8758.jpg",
        "alt": "drone cinematic couple shots"
      },
      {
        "src": "/admin_image/wid/108026230617536900695B4A8759.jpg",
        "alt": "slow motion wedding entry video"
      },
      {
        "src": "/admin_image/wid/160218514617536900705B4A8760.jpg",
        "alt": "high frame rate wedding film"
      },
      {
        "src": "/admin_image/wid/121263819317536900705B4A8768.jpg",
        "alt": "wedding teaser cinematic trailer"
      },
      {
        "src": "/admin_image/wid/15156996217536900705B4A8742.jpg",
        "alt": "beach destination wedding photography"
      },
      {
        "src": "/admin_image/wid/59810475317536900715B4A8743.jpg",
        "alt": "palace wedding photography in Jaipur"
      },
      {
        "src": "/admin_image/wid/105639614617536900715B4A8746.jpg",
        "alt": "mountain wedding shoot ideas"
      },
      {
        "src": "/admin_image/wid/193871105117536900725B4A8747.jpg",
        "alt": "sunset destination wedding couple"
      },
      {
        "src": "/admin_image/wid/9993158517536900725B4A8753.jpg",
        "alt": "travel wedding story highlights"
      },
      {
        "src": "/admin_image/wid/188937212317536901265B4A8823.jpg",
        "alt": "traditional bride and groom pose"
      },
      {
        "src": "/admin_image/wid/91909249617536901275B4A8829.jpg",
        "alt": "Indian wedding ritual photography"
      },
      {
        "src": "/admin_image/wid/167580278917536901275B4A8834.jpg",
        "alt": "wedding mandap traditional shots"
      },
      {
        "src": "/admin_image/wid/190865207517536901285B4A8844.jpg",
        "alt": "classic family wedding portrait"
      },
      {
        "src": "/admin_image/wid/23481800017536901295B4A8863.jpg",
        "alt": "traditional wedding decor focus"
      },
      {
        "src": "/admin_image/wid/173230286017536901305B4A8794.jpg",
        "alt": "solo bridal close-up shot"
      },
      {
        "src": "/admin_image/wid/28734845617536901305B4A8797.jpg",
        "alt": "bride sitting pose with lehenga"
      },
      {
        "src": "/admin_image/wid/45645964517536901305B4A8801.jpg",
        "alt": "bridal makeup and jewelry focus"
      },
      {
        "src": "/admin_image/wid/207605497617536901315B4A8804.jpg",
        "alt": "royal bridal portrait pose"
      },
      {
        "src": "/admin_image/wid/79074642817536901315B4A8805.jpg",
        "alt": "artistic bridal back pose"
      },
      {
        "src": "/admin_image/wid/19444760017536901665B4A8895.jpg",
        "alt": "aerial wedding venue photo"
      },
      {
        "src": "/admin_image/wid/113689162917536901675B4A8898.jpg",
        "alt": "top-down bride and groom shot"
      },
      {
        "src": "/admin_image/wid/34438384817536901675B4A8901.jpg",
        "alt": "drone baraat procession view"
      },
      {
        "src": "/admin_image/wid/179065592917536901685B4A8904.jpg",
        "alt": "drone capture of fireworks"
      },
      {
        "src": "/admin_image/wid/149783698417536901685B4A8905.jpg",
        "alt": "group formation drone photography"
      },
      {
        "src": "/admin_image/wid/43883549117536901695B4A8872.jpg",
        "alt": "luxury wedding decor close-up"
      },
      {
        "src": "/admin_image/wid/13571883217536901705B4A8891.jpg",
        "alt": "bride in designer lehenga shoot"
      },
      {
        "src": "/admin_image/wid/208140340517536901705B4A8892.jpg",
        "alt": "high-end wedding invitation shoot"
      },
      {
        "src": "/admin_image/wid/108094453217536901705B4A8893 (2).jpg",
        "alt": "premium wedding lighting photos"
      },
      {
        "src": "/admin_image/wid/159993552817536901715B4A8893.jpg",
        "alt": "elegant wedding couple entry"
      },
      {
        "src": "/admin_image/wid/152544070517536902185B4A8926.jpg",
        "alt": "vintage wedding themed shoot"
      },
      {
        "src": "/admin_image/wid/120550267017536902195B4A8980.jpg",
        "alt": "floral decor styled couple shoot"
      },
      {
        "src": "/admin_image/wid/7114379517536902195B4A8984.jpg",
        "alt": "royal theme pre-wedding photography"
      },
      {
        "src": "/admin_image/wid/51671246617536902205B4A8992.jpg",
        "alt": "bohemian wedding shoot setup"
      },
      {
        "src": "/admin_image/wid/4160163517536902205B4A9041.jpg",
        "alt": "styled wedding flatlay shots"
      },
      {
        "src": "/admin_image/wid/60059116617536902215B4A8907.jpg",
        "alt": "candid haldi splash moment"
      },
      {
        "src": "/admin_image/wid/33831769317536902215B4A8909.jpg",
        "alt": "mehndi application close-up"
      },
      {
        "src": "/admin_image/wid/46347891717536902215B4A8912.jpg",
        "alt": "bride with floral haldi jewelry"
      },
      {
        "src": "/admin_image/wid/62595998917536902225B4A8914.jpg",
        "alt": "group dance shot haldi ceremony"
      },
      {
        "src": "/admin_image/wid/43977213517536902235B4A8924.jpg",
        "alt": "colorful haldi decor photography"
      },
      {
        "src": "/admin_image/wid/51627685917536902785B4A9075.jpg",
        "alt": "North Indian wedding rituals photography"
      },
      {
        "src": "/admin_image/wid/54849725617536902795B4A9093.jpg",
        "alt": "Sikh wedding Anand Karaj shots"
      },
      {
        "src": "/admin_image/wid/128078770817536902795B4A9104.jpg",
        "alt": "cultural bridal attire portrait"
      },
      {
        "src": "/admin_image/wid/63551570317536902805B4A9105.jpg",
        "alt": "groom baraat horse/dhol shot"
      },
      {
        "src": "/admin_image/wid/109187216817536902815B4A9106.jpg",
        "alt": "bride entry with phoolon ki chadar"
      },
      {
        "src": "/admin_image/wid/109969200117536902825B4A9042.jpg",
        "alt": "jaimala moment photography"
      },
      {
        "src": "/admin_image/wid/155593290517536902825B4A9045.jpg",
        "alt": "golden hour couple pose"
      },
      {
        "src": "/admin_image/wid/139596930917536902835B4A9047.jpg",
        "alt": "sunset silhouette bride and groom"
      },
      {
        "src": "/admin_image/wid/25431772417536902845B4A9049.jpg",
        "alt": "warm light bridal solo portrait"
      },
      {
        "src": "/admin_image/wid/184918688117536902855B4A9055.jpg",
        "alt": "solo bridal lehenga portrait"
      },
      {
        "src": "/admin_image/wid/44598376417536903285B4A9146.jpg",
        "alt": "bridal close-up with jewelry"
      },
      {
        "src": "/admin_image/wid/208958692917536903295B4A9148.jpg",
        "alt": "side profile bride pose"
      },
      {
        "src": "/admin_image/wid/197913764917536903295B4A9157.jpg",
        "alt": "bride looking through veil"
      },
      {
        "src": "/admin_image/wid/102699520217536903305B4A9109.jpg",
        "alt": "traditional bridal portrait shot"
      },
      {
        "src": "/admin_image/wid/135136985117536903315B4A9113.jpg",
        "alt": "emotional bride getting ready"
      },
      {
        "src": "/admin_image/wid/166350478517536903325B4A9117 (2).jpg",
        "alt": "bridal dupatta flying pose"
      },
      {
        "src": "/admin_image/wid/209442741717536903335B4A9117.jpg",
        "alt": "makeup highlight bridal photo"
      },
      {
        "src": "/admin_image/wid/65994155017536903335B4A9125.jpg",
        "alt": "royal bridal portrait"
      },
      {
        "src": "/admin_image/wid/190135142117536903345B4A9130.jpg",
        "alt": "bride with mirror reflection"
      },
      {
        "src": "/admin_image/wid/128200371117536903355B4A9143.jpg",
        "alt": "premium wedding couple portrait"
      },
      {
        "src": "/admin_image/wid/203055709617536903725B4A9179.jpg",
        "alt": "luxury bridal lehenga shoot"
      },
      {
        "src": "/admin_image/wid/36085451017536903725B4A9189.jpg",
        "alt": "designer wedding decor close-up"
      },
      {
        "src": "/admin_image/wid/40230956217536903735B4A9194.jpg",
        "alt": "cinematic couple entry at luxury venue"
      },
      {
        "src": "/admin_image/wid/120992533817536903745B4A9195.jpg",
        "alt": "luxury floral mandap shot"
      },
      {
        "src": "/admin_image/wid/66793355317536903745B4A9201.jpg",
        "alt": "high-end wedding reception photo"
      },
      {
        "src": "/admin_image/wid/60770891717536903755B4A9162.jpg",
        "alt": "chandelier and lighting wedding detail"
      },
      {
        "src": "/admin_image/wid/29012861717536903765B4A9166.jpg",
        "alt": "palace wedding photography"
      },
      {
        "src": "/admin_image/wid/103138458817536903765B4A9168.jpg",
        "alt": "bride in couture outfit"
      },
      {
        "src": "/admin_image/wid/6055488417536903775B4A9171.jpg",
        "alt": "groom in sherwani royal portrait"
      },
      {
        "src": "/admin_image/wid/7439286617536903775B4A9176.jpg",
        "alt": "golden hour pre-wedding pose"
      },
      {
        "src": "/admin_image/wid/16034400317536904225B4A9238.jpg",
        "alt": "sunset silhouette of couple"
      },
      {
        "src": "/admin_image/wid/93415839517536904225B4A9239.jpg",
        "alt": "bride and groom holding hands at dusk"
      },
      {
        "src": "/admin_image/wid/69658465817536904235B4A9241.jpg",
        "alt": "dreamy golden light portrait"
      },
      {
        "src": "/admin_image/wid/190578496417536904235B4A9251.jpg",
        "alt": "golden hour twirl bridal shot"
      },
      {
        "src": "/admin_image/wid/91734768617536904245B4A9259.jpg",
        "alt": "romantic sunset shoot location"
      },
      {
        "src": "/admin_image/wid/5638169917536904255B4A9204.jpg",
        "alt": "bride in soft sunlight"
      },
      {
        "src": "/admin_image/wid/113853953217536904255B4A9207.jpg",
        "alt": "golden hour with flying dupatta"
      },
      {
        "src": "/admin_image/wid/48887173617536904265B4A9210.jpg",
        "alt": "couple walking into sunset shot"
      },
      {
        "src": "/admin_image/wid/199087381417536904265B4A9216.jpg",
        "alt": "Indian wedding rituals photography"
      },
      {
        "src": "/admin_image/wid/125782108317536904275B4A9237.jpg",
        "alt": "mandap ceremony close-up"
      },
      {
        "src": "/admin_image/wid/150221337617536904945B4A9289.jpg",
        "alt": "groom with sehra traditional pose"
      },
      {
        "src": "/admin_image/wid/108739355217536904945B4A9290.jpg",
        "alt": "candid couple wedding moment"
      },
      {
        "src": "/admin_image/wid/134913282417536904955B4A9291.jpg",
        "alt": "bride and groom laughing naturally"
      },
      {
        "src": "/admin_image/wid/7709515617536904965B4A9293.jpg",
        "alt": "emotional candid bridal shot"
      },
      {
        "src": "/admin_image/wid/118082680517536904975B4A9298.jpg",
        "alt": "groom reaction candid capture"
      },
      {
        "src": "/admin_image/wid/100685714817536904975B4A9260.jpg",
        "alt": "real wedding emotions photography"
      },
      {
        "src": "/admin_image/wid/117989217917536904985B4A9264.jpg",
        "alt": "romantic pre-wedding couple pose"
      },
      {
        "src": "/admin_image/wid/147354743517536904985B4A9274.jpg",
        "alt": "pre-wedding shoot in nature"
      },
      {
        "src": "/admin_image/wid/102938791417536904995B4A9283.jpg",
        "alt": "cinematic pre-wedding photo session"
      },
      {
        "src": "/admin_image/wid/1656912917536905005B4A9289 (2).jpg",
        "alt": "traditional outfit pre-wedding portrait"
      },
      {
        "src": "/admin_image/wid/97545789617536905535B4A9316.jpg",
        "alt": "sunset pre-wedding couple photo"
      },
      {
        "src": "/admin_image/wid/67910999417536905545B4A9319.jpg",
        "alt": "cinematic wedding video frame"
      },
      {
        "src": "/admin_image/wid/103721529317536905545B4A9329.jpg",
        "alt": "dramatic lighting wedding scene"
      },
      {
        "src": "/admin_image/wid/127131352217536905555B4A9330.jpg",
        "alt": "slow-motion wedding videography still"
      },
      {
        "src": "/admin_image/wid/194023785217536905565B4A9336.jpg",
        "alt": "cinematic couple entry frame"
      },
      {
        "src": "/admin_image/wid/27702716017536905575B4A9299.jpg",
        "alt": "high-end cinematic wedding moment"
      },
      {
        "src": "/admin_image/wid/182880552217536905575B4A9312.jpg",
        "alt": "Indian wedding rituals photo"
      },
      {
        "src": "/admin_image/wid/184036284117536905585B4A9313.jpg",
        "alt": "bride with kalire traditional portrait"
      },
      {
        "src": "/admin_image/wid/190652821517536905595B4A9314.jpg",
        "alt": "groom tilak ceremony picture"
      },
      {
        "src": "/admin_image/wid/57915028517536905595B4A9315.jpg",
        "alt": "mandap ceremony with family"
      },
      {
        "src": "/admin_image/wid/45668944717536905925B4A9367 (2).jpg",
        "alt": "phera ritual traditional wedding capture"
      },
      {
        "src": "/admin_image/wid/185037932917536905925B4A9367.jpg",
        "alt": "solo bridal lehenga pose"
      },
      {
        "src": "/admin_image/wid/11519030817536905935B4A9373.jpg",
        "alt": "bride close-up with jewelry focus"
      },
      {
        "src": "/admin_image/wid/126851278817536905935B4A9381.jpg",
        "alt": "bridal makeup and dupatta portrait"
      },
      {
        "src": "/admin_image/wid/166441106117536905945B4A9398.jpg",
        "alt": "royal bridal profile shot"
      },
      {
        "src": "/admin_image/wid/165731439917536905945B4A9338.jpg",
        "alt": "traditional bridal look with background"
      },
      {
        "src": "/admin_image/wid/112470998217536905955B4A9341.jpg",
        "alt": "top-down wedding mandap view"
      },
      {
        "src": "/admin_image/wid/126967684417536905965B4A9343.jpg",
        "alt": "drone shot of baraat procession"
      },
      {
        "src": "/admin_image/wid/212060881517536905965B4A9353.jpg",
        "alt": "aerial couple portrait at venue"
      },
      {
        "src": "/admin_image/wid/210464324617536905975B4A9359.jpg",
        "alt": "group formation drone wedding photo"
      },
      {
        "src": "/admin_image/wid/51998271517536906365B4A9412.jpg",
        "alt": "drone capture of fireworks ceremony"
      },
      {
        "src": "/admin_image/wid/174823158817536906365B4A9415.jpg",
        "alt": "luxury wedding stage decor"
      },
      {
        "src": "/admin_image/wid/87836111117536906375B4A9416.jpg",
        "alt": "bride in designer lehenga portrait"
      },
      {
        "src": "/admin_image/wid/132017525817536906385B4A9424.jpg",
        "alt": "high-end floral mandap setup"
      },
      {
        "src": "/admin_image/wid/37863877117536906395B4A9431.jpg",
        "alt": "premium wedding lighting and ambience"
      },
      {
        "src": "/admin_image/wid/186944000417536906395B4A9402.jpg",
        "alt": "couture bridal portrait in luxury venue"
      },
      {
        "src": "/admin_image/wid/62763117217536906395B4A9403.jpg",
        "alt": "vintage theme wedding setup"
      },
      {
        "src": "/admin_image/wid/32041016617536906405B4A9404.jpg",
        "alt": "styled bridal shoot with props"
      },
      {
        "src": "/admin_image/wid/76148769717536906415B4A9407.jpg",
        "alt": "Wedding Photo Planet pre-wedding shoots"
      },
      {
        "src": "/admin_image/wid/127707652217536906415B4A9412 (2).jpg",
        "alt": "cinematic weddings by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/111011278817536906775B4A9491.jpg",
        "alt": "drone wedding shoot Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/211937111617536906785B4A9527.jpg",
        "alt": "luxury wedding photography by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/197090125117536906795B4A9530.jpg",
        "alt": "candid moments by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/25163708217536906795B4A9534.jpg",
        "alt": "Wedding Photo Planet Delhi wedding photographer"
      },
      {
        "src": "/admin_image/wid/4353015117536906805B4A9536.jpg",
        "alt": "creative wedding storytelling Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/161779313017536906815B4A9436.jpg",
        "alt": "best wedding photographer Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/66169771617536906815B4A9442.jpg",
        "alt": "wedding photography services in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/158472314317536906825B4A9443.jpg",
        "alt": "best pre-wedding shoots in India"
      },
      {
        "src": "/admin_image/wid/45827053917536906825B4A9451.jpg",
        "alt": "destination wedding photographer in Jaipur"
      },
      {
        "src": "/admin_image/wid/90395058117536906835B4A9465.jpg",
        "alt": "candid wedding photography in Delhi"
      },
      {
        "src": "/admin_image/wid/38341738317536907335B4A9580.jpg",
        "alt": "cinematic videography wedding India"
      },
      {
        "src": "/admin_image/wid/10523264417536907345B4A9585.jpg",
        "alt": "bridal portrait photographer in North India"
      },
      {
        "src": "/admin_image/wid/137482304617536907355B4A9610.jpg",
        "alt": "traditional wedding photography Delhi NCR"
      },
      {
        "src": "/admin_image/wid/52570965617536907365B4A9613.jpg",
        "alt": "candid wedding shots by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/206301669217536907365B4A9626.jpg",
        "alt": "pre-wedding storytelling shoot by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/84703926717536907375B4A9540.jpg",
        "alt": "bridal portraits Wedding Photo Planet portfolio"
      },
      {
        "src": "/admin_image/wid/21313736317536907385B4A9556.jpg",
        "alt": "golden hour couple shots by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/154543289817536907395B4A9570.jpg",
        "alt": "drone coverage wedding by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/22208000817536907395B4A9574.jpg",
        "alt": "haldi and mehndi photography Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/189619341817536907405B4A9578.jpg",
        "alt": "elegant wedding decor photos Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/186120168017536907975B4A9661.jpg",
        "alt": "wedding cinematic highlights by Wedding Photo Planet"
      },
      {
        "src": "/admin_image/wid/47983548417536907985B4A9672.jpg",
        "alt": "professional wedding photographers India"
      },
      {
        "src": "/admin_image/wid/73112145017536907985B4A9676.jpg",
        "alt": "award-winning wedding photography team"
      },
      {
        "src": "/admin_image/wid/123505704717536907995B4A9680.jpg",
        "alt": "top-rated wedding photography company"
      },
      {
        "src": "/admin_image/wid/194122727817536908005B4A9686.jpg",
        "alt": "wedding photo ideas and inspiration"
      },
      {
        "src": "/admin_image/wid/195737430117536908005B4A9630.jpg",
        "alt": "wedding shoot packages in Delhi NCR"
      },
      {
        "src": "/admin_image/wid/168345212417536908015B4A9632.jpg",
        "alt": "full wedding event coverage photography"
      },
      {
        "src": "/admin_image/wid/127540551917536908025B4A9639.jpg",
        "alt": "luxury wedding moments captured perfectly"
      },
      {
        "src": "/admin_image/wid/90074951917536908025B4A9651.jpg",
        "alt": "best candid wedding photographer near me"
      },
      {
        "src": "/admin_image/wid/159663095717536908035B4A9657.jpg",
        "alt": "candid wedding photography ideas"
      },
      {
        "src": "/admin_image/wid/201804422517536908525B4A9720.jpg",
        "alt": "top candid wedding shots India"
      },
      {
        "src": "/admin_image/wid/183500973817536908525B4A9723.jpg",
        "alt": "candid moments wedding shoot"
      },
      {
        "src": "/admin_image/wid/178901108417536908535B4A9726.jpg",
        "alt": "affordable candid wedding photography packages"
      },
      {
        "src": "/admin_image/wid/214524233917536908545B4A9735.jpg",
        "alt": "pre-wedding shoot photographers near me"
      },
      {
        "src": "/admin_image/wid/211521664017536908555B4A9741.jpg",
        "alt": "unique pre-wedding shoot concepts"
      },
      {
        "src": "/admin_image/wid/72270176517536908565B4A9693.jpg",
        "alt": "romantic pre-wedding shoot locations India"
      },
      {
        "src": "/admin_image/wid/31070324017536908565B4A9702.jpg",
        "alt": "best pre-wedding photographer in Delhi"
      },
      {
        "src": "/admin_image/wid/120581171817536908575B4A9703.jpg",
        "alt": "cinematic pre-wedding photoshoot ideas"
      },
      {
        "src": "/admin_image/wid/209039991017536908585B4A9712.jpg",
        "alt": "cinematic wedding videography near me"
      },
      {
        "src": "/admin_image/wid/30259908117536908595B4A9713.jpg",
        "alt": "wedding highlight video makers"
      },
      {
        "src": "/admin_image/wid/62566085517536909115B4A9767.jpg",
        "alt": "cinematic wedding video packages India"
      },
      {
        "src": "/admin_image/wid/201105937217536909125B4A9778.jpg",
        "alt": "cinematic wedding teaser ideas"
      },
      {
        "src": "/admin_image/wid/141622588217536909125B4A9781.jpg",
        "alt": "storytelling wedding videography"
      },
      {
        "src": "/admin_image/wid/167123506117536909135B4A9784.jpg",
        "alt": "traditional wedding photographer India"
      },
      {
        "src": "/admin_image/wid/66897376617536909145B4A9793.jpg",
        "alt": "Hindu wedding photography poses"
      },
      {
        "src": "/admin_image/wid/48491681517536909155B4A9743.jpg",
        "alt": "traditional ceremony photo coverage"
      },
      {
        "src": "/admin_image/wid/71932275317536909165B4A9745.jpg",
        "alt": "Indian cultural wedding photography"
      },
      {
        "src": "/admin_image/wid/66401203517536909165B4A9756.jpg",
        "alt": "best traditional wedding photographers"
      },
      {
        "src": "/admin_image/wid/81454754017536909175B4A9763 (2).jpg",
        "alt": "solo bridal photoshoot ideas"
      },
      {
        "src": "/admin_image/wid/98043541117536909185B4A9763.jpg",
        "alt": "bridal makeup and jewelry photography"
      },
      {
        "src": "/admin_image/wid/72307679317536910045B4A9828.jpg",
        "alt": "bridal lehenga photoshoot poses"
      },
      {
        "src": "/admin_image/wid/5253562917536910055B4A9845.jpg",
        "alt": "royal bridal portraits in palace"
      },
      {
        "src": "/admin_image/wid/186946429117536910055B4A9854.jpg",
        "alt": "close-up bridal shoot ideas"
      },
      {
        "src": "/admin_image/wid/11741495917536910065B4A9871.jpg",
        "alt": "drone wedding photography packages"
      },
      {
        "src": "/admin_image/wid/11836089517536910075B4A9899.jpg",
        "alt": "drone shots for weddings India"
      },
      {
        "src": "/admin_image/wid/96760472517536910075B4A9797.jpg",
        "alt": "aerial wedding photography services"
      },
      {
        "src": "/admin_image/wid/21385649617536910085B4A9801.jpg",
        "alt": "top-down drone couple photo"
      },
      {
        "src": "/admin_image/wid/31621139717536910095B4A9807.jpg",
        "alt": "drone wedding videography ideas"
      },
      {
        "src": "/admin_image/wid/154351829717536910105B4A9812.jpg",
        "alt": "luxury wedding photography services"
      },
      {
        "src": "/admin_image/wid/44979773417536910105B4A9817.jpg",
        "alt": "premium wedding photographer India"
      },
      {
        "src": "/admin_image/wid/141118227217536910815B4A9931.jpg",
        "alt": "high-end bridal shoot"
      },
      {
        "src": "/admin_image/wid/116249632917536910815B4A9936.jpg",
        "alt": "luxury wedding album photography"
      },
      {
        "src": "/admin_image/wid/114299092117536910825B4A9943.jpg",
        "alt": "elite wedding photographers for big fat weddings"
      },
      {
        "src": "/admin_image/wid/146222747917536910835B4A9948.jpg",
        "alt": "themed wedding photography ideas"
      },
      {
        "src": "/admin_image/wid/113610770217536910835B4A9900.jpg",
        "alt": "styled bridal shoots inspiration"
      },
      {
        "src": "/admin_image/wid/139580361817536910845B4A9905.jpg",
        "alt": "vintage wedding shoot photographer"
      },
      {
        "src": "/admin_image/wid/95038146717536910845B4A9906.jpg",
        "alt": "creative wedding photography concepts"
      },
      {
        "src": "/admin_image/wid/19429780317536910855B4A9909.jpg",
        "alt": "boho-style wedding photos"
      },
      {
        "src": "/admin_image/wid/65712716517536910855B4A9925.jpg",
        "alt": "haldi function photography near me"
      },
      {
        "src": "/admin_image/wid/33352820517536910865B4A9931 (2).jpg",
        "alt": "mehndi ceremony photographer"
      },
      {
        "src": "/admin_image/wid/20172665361753691141DSC05233.jpg",
        "alt": "colorful haldi event photography"
      },
      {
        "src": "/admin_image/wid/11138953491753691142DSC05248.jpg",
        "alt": "mehndi night photo ideas"
      },
      {
        "src": "/admin_image/wid/3446232481753691143DSC06984.jpg",
        "alt": "candid haldi photoshoot for bride"
      },
      {
        "src": "/admin_image/wid/14078869471753691144DSC06986.jpg",
        "alt": "wedding reception photography"
      },
      {
        "src": "/admin_image/wid/8537962711753691145DSC07053.jpg",
        "alt": "engagement photo shoot packages"
      },
      {
        "src": "/admin_image/wid/173187779517536911465B4A9965.jpg",
        "alt": "sangeet event photography ideas"
      },
      {
        "src": "/admin_image/wid/148083277217536911465B4A9969.jpg",
        "alt": "bride and groom entry shoot"
      },
      {
        "src": "/admin_image/wid/10440543421753691147DSC05194.jpg",
        "alt": "wedding doli and bidaai photos"
      },
      {
        "src": "/admin_image/wid/7323481711753691147DSC05197.jpg",
        "alt": "golden hour wedding photography"
      },
      {
        "src": "/admin_image/wid/6750050371753691148DSC05203.jpg",
        "alt": "sunset couple pre-wedding photoshoot"
      },
      {
        "src": "/admin_image/wid/10942230641753691228DSC08283.jpg",
        "alt": "dreamy golden light wedding shots"
      },
      {
        "src": "/admin_image/wid/11172550741753691228DSC08286.jpg",
        "alt": "sunset silhouette bride and groom"
      },
      {
        "src": "/admin_image/wid/36677691753691229DSC08309.jpg",
        "alt": "golden hour bridal solo pose"
      },
      {
        "src": "/admin_image/wid/8403383211753691230DSC08313.jpg",
        "alt": "Indian traditional wedding photos"
      },
      {
        "src": "/admin_image/wid/15902288861753691231DSC07055.jpg",
        "alt": "cultural rituals wedding shoot"
      },
      {
        "src": "/admin_image/wid/19865684361753691232DSC07076.jpg",
        "alt": "bride in traditional attire photos"
      },
      {
        "src": "/admin_image/wid/1519519571753691233DSC07085.jpg",
        "alt": "family blessing wedding moments"
      },
      {
        "src": "/admin_image/wid/20105909861753691234DSC07315.jpg",
        "alt": "religious wedding ceremony pictures"
      },
      {
        "src": "/admin_image/wid/6692673561753691234DSC07326.jpg",
        "alt": "red lehenga bridal portrait"
      },
      {
        "src": "/admin_image/wid/7090254871753691235DSC08280.jpg",
        "alt": "bridal jewelry close-up"
      },
      {
        "src": "/admin_image/wid/1557966801753691386DSC08749.jpg",
        "alt": "traditional bride sitting pose"
      },
      {
        "src": "/admin_image/wid/2790746561753691387DSC08763.jpg",
        "alt": "soft light bridal shoot"
      },
      {
        "src": "/admin_image/wid/20747237951753691387DSC08776.jpg",
        "alt": "mirror bridal solo shot"
      },
      {
        "src": "/admin_image/wid/8410325321753691388DSC08798.jpg",
        "alt": "luxury wedding stage decor"
      },
      {
        "src": "/admin_image/wid/13147076901753691389DSC08320.jpg",
        "alt": "royal couple luxury shoot"
      },
      {
        "src": "/admin_image/wid/9418779651753691390DSC08323.jpg",
        "alt": "bridal entry with fireworks"
      },
      {
        "src": "/admin_image/wid/7564964451753691391DSC08326.jpg",
        "alt": "high-end wedding photography"
      },
      {
        "src": "/admin_image/wid/10771297231753691392DSC08328.jpg",
        "alt": "designer lehenga portrait"
      },
      {
        "src": "/admin_image/wid/18531089871753691392DSC08331.jpg",
        "alt": "golden hour couple walk"
      },
      {
        "src": "/admin_image/wid/816262631753691393DSC08740.jpg",
        "alt": "sunset silhouette pre-wedding"
      },
      {
        "src": "/admin_image/wid/17857052321753691474DSC09063.jpg",
        "alt": "romantic nature couple shoot"
      },
      {
        "src": "/admin_image/wid/11788054301753691475DSC09070.jpg",
        "alt": "cinematic dupatta pre-wedding"
      },
      {
        "src": "/admin_image/wid/6117744061753691475DSC08841.jpg",
        "alt": "candid couple fort shoot"
      },
      {
        "src": "/admin_image/wid/15673192931753691476DSC08843.jpg",
        "alt": "sunset pre-wedding portrait"
      },
      {
        "src": "/admin_image/wid/2482106251753691477DSC08861.jpg",
        "alt": "artistic lighting pre-wedding"
      },
      {
        "src": "/admin_image/wid/9741086891753691478DSC09061.jpg",
        "alt": "floral canopy bridal entry"
      }
    ],
    "content": {
      "desc4": "Himanshu & Bhawna’s wedding journey was nothing short of a fairytale, beautifully captured by Wedding Photo Planet, one of the best wedding photographers in Delhi NCR. Their engagement took place at the elegant POLO Luxurious Destination – Brijwasan, where our candid photographers in Delhi NCR artistically captured every emotion and moment with depth and detail. The wedding festivities continued at the stunning Ambria Pushpanjali by GYV – Sector 21, Dwarka, where our team of top wedding photographers in Delhi NCR and cinematic videographers documented the rituals, laughter, and love in breathtaking visuals. As a team of best candid photographers and pre wedding photographers in Delhi, we pride ourselves on offering premium candid photography and cinematic storytelling for couples looking for a photographer for wedding or searching for a photographer wedding near me. From romantic frames to traditional rituals, every image captured reflects the joy and elegance of Himanshu & Bhawna’s celebration. If you’re looking for the best photographer in Delhi, your search ends at Wedding Photo Planet.",
      "heading1": "Wedding Photo Planet – Crafting Your Love Story Frame by Frame",
      "desc1": "At Wedding Photo Planet, we believe your wedding isn’t just an event — it’s a story that deserves to be told beautifully. As top wedding photographers in Delhi NCR, we specialize in: Candid wedding photography   Cinematic wedding videography   Creative pre-wedding shoots   Bridal photoshoots   Couple portraits   Drone photography and cinematic films   Whether you're looking for the best wedding photographers in Delhi, or a cinematic videographer to craft a film-like memory of your day, our team is equipped with top-of-the-line technology and a creative eye to deliver excellence. We are proud to be recognized among the: Best Indian wedding photographers   Top candid photographers in Delhi NCR   Best pre-wedding photographers in Delhi   Best bridal photographers in Delhi   Affordable yet premium wedding photography teams in India   Our goal is to provide you with a customizable marriage photography package that fits your budget without compromising on quality. From bridal portraits, mehendi & haldi moments, to candid couple shots, every frame reflects the heart of your celebration.",
      "banner1": "/admin_image/wid/banner141964081753536230Best-Wedding-Photoghraphy.jpg",
      "heading2": "Why Couples Choose Wedding Photo Planet",
      "desc2": "Personalized Wedding Coverage: Every love story is different — and we capture yours in the most authentic way. As leading wedding photographers in Delhi, we tailor each shoot to match your style, emotions, and traditions.Expert Candid Photographers in Delhi NCR: Our team of candid photographers is skilled at freezing real, unscripted moments — the tears, laughter, and every heartfelt glance that makes your day special. Top-Rated Wedding Photographers in Delhi NCR: Recognized among the best wedding photographers in Delhi, our consistent quality and creativity have earned us love from couples across India.",
      "heading3": "Planning Your Wedding? Let's Make It Unforgettable.",
      "desc3": "",
      "banner2": "/admin_image/wid/banner111442993551753536143Wedding-Photoghraphy.jpg"
    }
  }
] satisfies DetailPageRecord[];
