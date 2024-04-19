/**
 * Very simple plugin example of browsing music
 */
var popup = require("native/popup");

(function (plugin) {
  var movResource = [
    {
      name: "Sanganatha FM",
      url: "http://perseverance.shoutca.st:8494/;p",
      category: "DEVOTIONAL",
      logo: "https://drive.google.com/uc?id=1uzlh5R1Z5i-1sf71d0mUMPSrCfyqNTEU&export=&confirm=t",
    },
    {
      name: "Nesaganam (Karaikal)",
      url: "http://192.95.39.65:5206/;p",
      category: "POPULAR RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKtR4rFpJOfZBifFoSzD-xKyc9xW0mRosPT0cDp_4gK-94GKI&s",
    },
    {
      category: "LOCAL RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbLkfvgseJGNgfegsDGDbFy2dKQT3gAjZHxhJWF8UT1-8gclo&s",
      name: "Anbu FM",
      url: "https://sp.radiotamilonline.com/anbufm/;p",
      url1: "http://stream.zenolive.com/c2p4f1np4bruv",
    },
    {
      name: "Radio 008 FM",
      url: "https://sp14.instainternet.com/8092/stream",
      category: "POPULAR RADIOS",
      logo: "https://i.postimg.cc/fy8vgXny/image.jpg",
    },
    {
      name: "Nanban FM  - \u0ba8\u0ba3\u0bcd\u0baa\u0ba9\u0bcd  \u0bb5\u0bbe\u0ba9\u0bca\u0bb2\u0bbf",
      url: "https://nanbanfm-unicast2u.radioca.st/stream",
      category: "LOCAL RADIOS",
      logo: "https://liveradios.in/wp-content/uploads/nanbanfm.jpg",
    },
    {
      name: "ETR FM (European Tamil Radio)",
      url: "https://bud.streampanel.net:6257/stream",
      category: "POPULAR RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPgA3uMrpLrYVJ-uX10obtbyhTnVHKSW33eeGJVs8HaAnXVl6&s",
    },
    {
      category: "LOCAL RADIOS",
      logo: "https://drive.google.com/u/0/uc?id=1W1ZYghzSn3LtxOfGBHPZNgq_sUwhwNHG",
      name: "Anandham FM  - (Kodaikkanal)",
      url: "https://sp.radiotamilonline.com/8010/stream)",
      url2: "https://centova71.instainternet.com/proxy/anandhammedia?mp=/stream",
    },
    {
      name: "CMR Radio",
      url: "http://live.cmr24.net:8081/CMR/CMR-MQ/icecast.audio",
      category: "POPULAR RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhfvgScBlYhE5H5s8fTyEm2kgHsH8nGW1Ziws4rWDhAKoQO4&s",
    },
    {
      name: "CMR Radio HD",
      url: "http://live.cmr24.net:8081/CMR/TamilHD-MQ/icecast.audio",
      category: "POPULAR RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgH50_bXZZA8ncUbTjHKcQYiV4xIdgF1zeroyhAHw2g2uZgw&s",
    },
    {
      name: "Muthamil Radio  88.9 HD3",
      url: "https://ec2.yesstreaming.net:2540/stream",
      category: "POPULAR RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLC0kMa0SdQvmCjDsuBTPntxvhSqtQmUJ_-OFAvhV7SpljPYU&s",
    },
    {
      name: "Thaalam FM 88.9 HD3 radio",
      url: "https://ec4.yesstreaming.net:1990/stream",
      category: "POPULAR RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNijRoH61JWjUXPg32jvXhSD3-5c-k_gjO2HuAC80FfVuKt4FA&s",
    },
    {
      name: "Swiss Tamil FM",
      url: "https://usa19.fastcast4u.com/swiss",
      category: "WORLD RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSReniM7Zk8e-VUwPDZYU7Pe1SywC-KFL6wLQ5z6_x0gFtbc7Y&s",
    },
    {
      category: "LOCAL RADIOS",
      logo: "http://radiosindiaapp.com/images/itamilradio.jpg",
      name: "Eye Tamil Radio CA",
      url: "http://streams.radio.co/s937ac5492/listen",
    },
    {
      name: "Thendral - World",
      url: "http://sc1.sytes.net:9116/;stream.mp3",
      category: "WORLD RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxX6K6DGMTQeWJJteI5ccT9rhg3f14bSCalL5nheWnLMxmZJfy&s",
    },
    {
      name: "Capital  FM",
      url: "https://sp14.instainternet.com/8084/;",
      category: "WORLD RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7hJiZXSPbYYA1OdmbOmkwAcaPSpW28zQQpkbEpTDcfbXXztc&s",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/samugam-fm.jpg",
      name: "Samugam FM   \u0b9a\u0bae\u0bc2\u0b95\u0bae\u0bcd",
      url: "https://usa19.fastcast4u.com/eftphimk",
    },
    {
      name: "Sooriyan FM (LK2)",
      category: "WORLD RADIOS",
      url: "http://radio.lotustechnologieslk.net:8006/stream",
      url1: "https://radio.lotustechnologieslk.net:8006/;stream.mp3",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqhrc5P90Y0NxsLu9wjMCn6ZdHEx6Bs2y6mM99MdTXImT17zFN&s",
    },
    {
      name: "Shakthi FM (LK)",
      category: "WORLD RADIOS",
      url: "http://live.trusl.com:1160/;p",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxwwNrgqKly1DDvy_JwhZAOMS0aNcq87sh5bM2JmwAyaNNaR5y&s",
    },
    {
      name: "Kathiravan Fm",
      url: "https://kathiravanfm-prabak78.radioca.st/stream",
      category: "LOCAL RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOEqxtmuh3QjGEPgBHEFp6Fga2g6RN5YYJVeH1dpBlYQLGZ0Q&s",
    },
    {
      name: "Vijay FM",
      url: "http://136.243.44.41:8513/;p",
      category: "LOCAL RADIOS",
      logo: "https://i.postimg.cc/zDMNS0bH/image.webp",
    },
    {
      name: "Sirpi FM - \u0b9a\u0bbf\u0bb1\u0bcd\u0baa\u0bbf \u0bb5\u0bbe\u0ba9\u0bca\u0bb2\u0bbf",
      url: "http://comet.shoutca.st:8018/stream",
      category: "LOCAL RADIOS",
      logo: "https://i.postimg.cc/TYPKjwKw/image.jpg",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/tamilfm1.jpg",
      name: "Tamil FM",
      url: "http://shaincast.caster.fm:47814/listen.mp3",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/ctr24.jpg",
      name: "CTR 24 (Canada)",
      url: "http://198.27.66.225:8498/stream.mp3",
      url2: "http://net1.citrus3.com:8498/;p",
    },
    {
      category: "WORLD RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRE8DslDjgxrQWaMPP9b1_kTj9E6-cflX_GbsNdaK-3zA-V4w&s",
      name: "CTR Radio (Canada)",
      url: "http://87.98.219.178:8416/stream",
    },
    {
      name: "GTR  - German Tamil Radio",
      url: "https://gtr-unicast2u.radioca.st",
      category: "WORLD RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3R1CyayITeTi3lJD_sjUKq9Vq8eVLAsK6GQ6lw7TnDsLpBjAZ&s",
    },
    {
      name: "PUNNAGAI FM  -  \u0baa\u0bc1\u0ba9\u0bcd\u0ba9\u0b95\u0bc8 \u0bb5\u0bbe\u0ba9\u0bca\u0bb2\u0bbf  (\u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8)",
      url: "https://onair.punnagairadio.com/8146/stream",
      category: "WORLD RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCObvH0_Z9kFGTt5GZw5t-4oK1lbWZRaJP_BvKxHFfdLqAnQFb&s",
    },
    {
      name: "Maha FM HD",
      url: "https://sp.radiotamilonline.com/8016/stream",
      category: "LOCAL RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0T_PERZ-jd7yExS0hdaV1S-RkwKdRvuw1RxYkNvSwSak3BEk&s",
    },
    {
      category: "LOCAL RADIOS",
      logo: "http://radiosindiaapp.com/images/adraifm.jpg",
      name: "Adirai FM",
      url: "http://listen.radioking.com/radio/188161/stream/230320",
    },
    {
      name: "Pollachi FM  -   \u0baa\u0bca\u0bb3\u0bcd\u0bb3\u0bbe\u0b9a\u0bcd\u0b9a\u0bbf FM",
      url: "http://104.200.16.182:8000/;p",
      category: "LOCAL RADIOS",
      logo: "http://radiosindiaapp.com/images/pollachifm.jpg",
    },
    {
      name: "Ullasam  FM",
      category: "WORLD RADIOS",
      url: "http://eu10.fastcast4u.com:6740/stream",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTkvBmOqxpSBVWBnxxDG1Uhb66Q4L1YsgQJeMh3Fa6r9JTehDE&s",
    },
    {
      name: "Cakara FM",
      url: "http://perseverance.shoutca.st:8498/;p",
      category: "LOCAL RADIOS",
      logo: "https://drive.google.com/uc?id=1xQ9p3NjN_dDURCNPtAHPCvrpxW22uaql&export=&confirm=t",
    },
    {
      name: "Arni City FM - \u0b86\u0bb0\u0ba3\u0bbf \u0b9a\u0bbf\u0b9f\u0bcd\u0b9f\u0bbf",
      url: "http://192.95.39.65:5018/;p",
      url1: "https://usa9.fastcast4u.com:2199/tunein/arnifm.asx",
      category: "LOCAL RADIOS",
      logo: "http://radiosindiaapp.com/images/arnicityfm.jpg",
    },
    {
      name: "Thenaruvi  FM   (\u0ba4\u0bc7\u0ba9\u0bb0\u0bc1\u0bb5\u0bbf)",
      url: "https://thenaruvivaanoli.radioca.st/stream",
      category: "LOCAL RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGK1LO9HVrKBr3ji_YSYsIf9ajScwkI9qYXGG7dAcvF-8P62s&s",
    },
    {
      name: "Vanavil  -  ARR  Radio",
      url: "https://s7.yesstreaming.net:8038/stream",
      category: "LOCAL RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUkrKNOgMGVwSOgXyPfc_febnfbG_69ACyxrgCyAnjGlpqGUdn&s",
    },
    {
      name: "Athavan  Radio (\u0bb2\u0ba3\u0bcd\u0b9f\u0ba9\u0bcd)",
      category: "WORLD RADIOS",
      url: "http://38.96.148.18:6150/stream.mp3",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2Mrb-HFipPyrUVtyaU5A6oVqfvVyFjplHSvlVw358R7wk_I&s",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/ibctamil1.jpg",
      name: "IBC Tamil (Britain)",
      url: "http://fm.ibctamil.com:6176/stream",
    },
    {
      category: "WORLD RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTXAepj4jeFAVeDQmVii0R3pnFQon0go4OE9XoKCr9hbLk3WJ&s",
      name: "IBC Tamil (UK-2)",
      url: "http://fm.ibctamil.com/;stream",
    },
    {
      name: "Radio City (Love Guru)",
      url: "https://prclive4.listenon.in/Tamil",
      category: "POPULAR RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98roNC8pzcx4y1V5yWJ5sfUvP7V7m38MGhRZeOJJNmH5BJrdi&s",
    },
    {
      category: "WORLD RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9elUEQW3tbkBHlKHqbm9C0p_LIShw3eAHhqv_DPdu0AIg0QjB&s",
      name: "Tamil Kuyil \ud83d\udc25 Live",
      url: "http://live.tamilkuyilradio.com:8095/;stream/2",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/ttrfm.jpg",
      name: "Tamil  Thai  FM",
      url: "http://radio.massstream.net/8010/stream",
    },
    {
      name: "Radio Beat",
      url: "http://5.63.151.52:7142/stream",
      category: "WORLD RADIOS",
      logo: "https://i.postimg.cc/DfsjL7K2/image.png",
    },
    {
      name: "Vanavil FM",
      url: "https://s7.yesstreaming.net:9000/stream",
      category: "LOCAL RADIOS",
      logo: "https://i.postimg.cc/q7GYGjDg/image.jpg",
    },
    {
      name: "Vanavil Radio Maestro",
      url: "https://s7.yesstreaming.net:8092/stream",
      category: "LOCAL RADIOS",
      logo: "https://i.postimg.cc/YCFSxd46/image.jpg",
    },
    {
      name: "90s Hits - Vanavil FM",
      url: "https://s7.yesstreaming.net:8062/stream",
      category: "LOCAL RADIOS",
      logo: "https://i.postimg.cc/XYtgZ9Qz/image.jpg",
    },
    {
      name: "Lankasri FM - UK",
      category: "WORLD RADIOS",
      url: "http://5984.cloudrad.io:8032/;p",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3uC6vgVQyX06eindSYSE8h6u_w6En4a_selkTDsn54hBxs33G&s",
    },
    {
      category: "WORLD RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKj6Fo0vZFB2MquEKERihnAcZUZMchUqk-lqEMwXTLAYVzNbQ&s",
      name: "Jaffna News (\u0bb8\u0bcd\u0bb0\u0bc0\u0bb2\u0b99\u0bcd\u0b95\u0bbe)",
      url: "http://jtrfm.ddnss.de:8000/;stream.mp3",
    },
    {
      category: "WORLD RADIOS",
      logo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT0O6iMC4DdVgwM4Qf8NC8OS2dnC74tT_V3929JnYFecVPr4VESXdO-fYI",
      name: "Thayagam Tamil Oli FM",
      url: "http://s3.yesstreaming.net:17045/stream",
      url2: "http://s2.yesstreaming.net:7044/thayagam128K",
      url3: "http://s3.yesstreaming.net:7019/thayagam48K",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/yugamradio.jpg",
      name: "Yugam Radio",
      url: "http://s6.yesstreaming.net:19012/stream",
    },
    {
      name: "Then Tamil (\u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd)",
      category: "LOCAL RADIOS",
      url: "http://192.95.39.65:5187/;p",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM5CByIGfMqPvoFOnDQDBIokwu8XpGIzbFO3pOCZvLYtH7DD8&s",
    },
    {
      name: "Tamil Panpalai India ~128",
      url: "http://opportunity.shoutca.st:8140/ind",
      category: "WORLD RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwTACLlzPe3a0QUjUg-MuuODP1ED-d-QXepl85UePrbuSJdsw&s",
    },
    {
      name: "Tamil Panpalai New Zealand ~128",
      url: "http://opportunity.shoutca.st:8140/stream",
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/tamilpanpalainew.jpg",
    },
    {
      name: "Tamil Panpalai Africa ~128",
      url: "http://opportunity.shoutca.st:8140/afr",
      category: "WORLD RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqDl2NOQs6M63Yyqw0LvFZmGHUF1bs2oUQmryTrhmgO2BqnvNd&s",
    },
    {
      category: "LOCAL RADIOS",
      logo: "http://radiosindiaapp.com/images/thentamilfm.jpg",
      name: "Then Tamil Radio Tirupur",
      url: "http://192.95.39.65:5187/;p",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/timefm.jpg",
      name: "Time FM (Canada)",
      url: "http://neramfm.com:8000/stream",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/gtcfm.jpg",
      name: "GTC FM",
      url: "http://192.99.41.102:5419/stream",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/ctbcradio.jpg",
      name: "CTBC Radio (Canada)",
      url: "http://ctbcfmradio.primcast.com:4086/;p",
    },
    {
      name: "Kodai  Thendral",
      url: "http://192.99.17.12:4680/stream",
      category: "LOCAL RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY_gj-AcEN7tj5qlIDKeb3sZRKm0rWinCEtsqbq2lRI_NDjrAZ&s",
    },
    {
      name: "Tamil HD Radio",
      url: "http://live.cmr24.net:8081/CMR/TamilHD-LQ/icecast.audio",
      category: "LOCAL RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkcyUoAFXtEqYzOSaMM0zP1p2vzb3OTsV8CBVXyuqlZiEIvorU&s",
    },
    {
      name: "CMR HD",
      url: "http://live.cmr24.net:8081/CMR/CMR-HQ/icecast.audio",
      category: "WORLD RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4XtaeAIp7rTPPedg-W4kYs0jGs7VDWhTCzqDNXNgi3FMy2Y&s",
    },
    {
      name: "A9 Radio",
      url: "http://a9radio1-a9media.radioca.st/stream",
      category: "WORLD RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7fQuuQ1jvGP_ta5rzJeIaVlwNfslbh55aZihN3i24KG0k7ss&s",
    },
    {
      name: "A9 Radio (Old Hits)",
      url: "http://195.154.217.103:8398/;p",
      category: "WORLD RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiJ7BxARxJgLRS6HCaSWES5WkRgyKTaoislqG-VUlf0fpHOoM&s",
    },
    {
      name: "A9 Radio (Latest Hits)",
      url: "http://195.154.217.103:8343/stream",
      category: "WORLD RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqteAZZiYSBfshWI9rIqJFMjFETWyIoBqCINJOEcFIFrl9Es&s",
    },
    {
      name: "A9 Radio (Eelam Hits) 128bit",
      url: "http://195.154.217.103:8428/;p",
      category: "WORLD RADIOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEcEmjh80u9lWNl14DfeHKYblUrpp0CtLY6YuRdr_U1I99y_AR&s",
    },
    {
      name: "Iyalisai Vanoli",
      category: "WORLD RADIOS",
      url: "https://iyalisai.radioca.st/mp64?type=http&nocache=53314",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrM1Ss2qYU55ea2gafCMkkOfURWfmgPxCCKpc_mZxRXqYg3eTq&s",
    },
    {
      name: "US Tamil FM (US)",
      category: "WORLD RADIOS",
      url: "http://streaming.radio.co/s0cfc93915/listen",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQDSfQyHxpcx8SjfuWJnQ_k8awRIM53x2HS0OhBlWbFIejrc&s",
    },
    {
      name: "Athiradi Tamil (USA)",
      category: "WORLD RADIOS",
      url: "http://streamer.radio.co/s688f110d0/listen",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnMTKQOcpw8GCD2kE01JMW_Pn85AHjMw_lCRmB4jPlBY56Tw4&s",
    },
    {
      name: "Chennai FM Gold AIR (FM 100.1/102.3) 96'bit",
      category: "ALL INDIA RADIOS",
      url: "http://air.pc.cdn.bitgravity.com/air/live/pbaudio021/playlist.m3u8",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRJ7UVvbKRdv6qblpGGp1TXv97eUdgM9vlaKE69ZqYgipI-I&s",
    },
    {
      name: "Chennai FM Rainbow AIR (FM 101.4) 48'bit",
      category: "ALL INDIA RADIOS",
      url: "http://air.pc.cdn.bitgravity.com/air/live/pbaudio022/playlist.m3u8",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRJ7UVvbKRdv6qblpGGp1TXv97eUdgM9vlaKE69ZqYgipI-I&s",
    },
    {
      name: "Chennai VBS (100.5)",
      category: "ALL INDIA RADIOS",
      url: "http://air.pc.cdn.bitgravity.com/air/live/pbaudio024/playlist.m3u8",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRJ7UVvbKRdv6qblpGGp1TXv97eUdgM9vlaKE69ZqYgipI-I&s",
    },
    {
      name: "Vivid  Barathi",
      category: "ALL INDIA RADIOS",
      url: "http://air.pc.cdn.bitgravity.com/air/live/pbaudio025/playlist.m3u8",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRJ7UVvbKRdv6qblpGGp1TXv97eUdgM9vlaKE69ZqYgipI-I&s",
    },
    {
      name: "Puducherry PC AIR (AM~1215kHz) 96'bit",
      category: "ALL INDIA RADIOS",
      url: "http://air.pc.cdn.bitgravity.com/air/live/pbaudio097/playlist.m3u8",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcdYKYeStVP5_rtG847kgYfRD64W3g8fV5zNDuCT3KcgNqvJ4&s",
    },
    {
      name: "Puducherry Rainbow AIR (FM~102.8) 96'bit",
      category: "ALL INDIA RADIOS",
      url: "http://air.pc.cdn.bitgravity.com/air/live/pbaudio098/playlist.m3u8",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcdYKYeStVP5_rtG847kgYfRD64W3g8fV5zNDuCT3KcgNqvJ4&s",
    },
    {
      name: "Karaikal AIR (FM 100.3)",
      category: "ALL INDIA RADIOS",
      url: "http://air.pc.cdn.bitgravity.com/air/live/pbaudio050/playlist.m3u8",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcdYKYeStVP5_rtG847kgYfRD64W3g8fV5zNDuCT3KcgNqvJ4&s",
    },
    {
      name: "Kodaikanal AIR (FM 100.5)",
      category: "ALL INDIA RADIOS",
      url: "http://air.pc.cdn.bitgravity.com/air/live/pbaudio051/playlist.m3u8",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcdYKYeStVP5_rtG847kgYfRD64W3g8fV5zNDuCT3KcgNqvJ4&s",
    },
    {
      name: "Madurai  (FM Rainbow 103.3)",
      category: "ALL INDIA RADIOS",
      url: "http://air.pc.cdn.bitgravity.com/air/live/pbaudio126/playlist.m3u8",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_KeqlY-HAs0DFFPS8xN_gag4uWT6ZL2x_07vFgzNhnhBA6w&s",
    },
    {
      name: "Madurai PC AIR (AM~1269 kHz)",
      category: "ALL INDIA RADIOS",
      url: "http://air.pc.cdn.bitgravity.com/air/live/pbaudio127/playlist.m3u8",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_KeqlY-HAs0DFFPS8xN_gag4uWT6ZL2x_07vFgzNhnhBA6w&s",
    },
    {
      name: "Coimbatore AIR (AM~999kHz) 96'bit",
      category: "ALL INDIA RADIOS",
      url: "http://air.pc.cdn.bitgravity.com/air/live/pbaudio016/playlist.m3u8",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_KeqlY-HAs0DFFPS8xN_gag4uWT6ZL2x_07vFgzNhnhBA6w&s",
    },
    {
      name: "Coimbatore FM Rainbow AIR (FM~103) 96'bit",
      category: "ALL INDIA RADIOS",
      url: "http://air.pc.cdn.bitgravity.com/air/live/pbaudio017/playlist.m3u8",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_KeqlY-HAs0DFFPS8xN_gag4uWT6ZL2x_07vFgzNhnhBA6w&s",
    },
    {
      name: "Ooty AIR (FM 101.8) 96'bit",
      category: "ALL INDIA RADIOS",
      url: "http://air.pc.cdn.bitgravity.com/air/live/pbaudio207/playlist.m3u8",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrT-efJMv3Bdbox4o1lFJISdnnynJhySfG2NqH0sXj2t_6ZA&s",
    },
    {
      name: "Tiruchirappalli AIR (FM~102.1) Trichy 96'bit",
      category: "ALL INDIA RADIOS",
      url: "http://air.pc.cdn.bitgravity.com/air/live/pbaudio040/playlist.m3u8",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrT-efJMv3Bdbox4o1lFJISdnnynJhySfG2NqH0sXj2t_6ZA&s",
    },
    {
      name: "Tiruchirappalli AIR (AM~936'kHz) 56'bit",
      category: "ALL INDIA RADIOS",
      url: "http://air.pc.cdn.bitgravity.com/air/live/pbaudio041/playlist.m3u8",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrT-efJMv3Bdbox4o1lFJISdnnynJhySfG2NqH0sXj2t_6ZA&s",
    },
    {
      name: "Tirunelveli AIR (AM~1197'kHz) 96'bit",
      category: "ALL INDIA RADIOS",
      url: "http://air.pc.cdn.bitgravity.com/air/live/pbaudio061/playlist.m3u8",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrT-efJMv3Bdbox4o1lFJISdnnynJhySfG2NqH0sXj2t_6ZA&s",
    },
    {
      name: "Tirunelveli Rainbow AIR (FM~102.6) 96'bit",
      category: "ALL INDIA RADIOS",
      url: "http://air.pc.cdn.bitgravity.com/air/live/pbaudio062/playlist.m3u8",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm3dhlYwGzDsvYm0nyHK2wVrGZ-NrIul5osYoElqupVDh4-Q&s",
    },
    {
      name: "Dharmapuri AIR (FM~102.5) 56'bit",
      category: "ALL INDIA RADIOS",
      url: "http://air.pc.cdn.bitgravity.com/air/live/pbaudio078/playlist.m3u8",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm3dhlYwGzDsvYm0nyHK2wVrGZ-NrIul5osYoElqupVDh4-Q&s",
    },
    {
      name: "Kumari FM Nagercoil AIR (FM~101.0) 96'bit",
      category: "ALL INDIA RADIOS",
      url: "http://air.pc.cdn.bitgravity.com/air/live/pbaudio129/playlist.m3u8",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm3dhlYwGzDsvYm0nyHK2wVrGZ-NrIul5osYoElqupVDh4-Q&s",
    },
    {
      name: "Isaimurasu FM",
      url: "http://198.27.127.246:26004/;play",
      category: "DEVOTIONAL",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqOxHwDZul6GOn1xrlEXeZRgzSGZ0eigFybBisaKuBZy6UTOXZ&s",
    },
    {
      name: "Hudha FM",
      url: "https://ec3.yesstreaming.net:2615/stream",
      category: "DEVOTIONAL",
      logo: "https://i.postimg.cc/hv72hptQ/image.jpg",
    },
    {
      name: "Muslim Vanoli (Hadees)",
      category: "DEVOTIONAL",
      url: "https://ec3.yesstreaming.net:2475/stream",
      logo: "https://drive.google.com/uc?id=1_Cb1wYYsf2s3jVakG6rFP0OGrX1a8-w9&export=&confirm=t",
    },
    {
      name: "\u0baa\u0bbf\u0bb8\u0bcd\u0bae\u0bbf \u0bb0\u0bc7\u0b9f\u0bbf\u0baf\u0bcb Bisme Radio",
      url: "https://stream.rcs.revma.com/pcr8x50uty8uv",
      category: "DEVOTIONAL",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY_FLgXrKR5sKOpKJ68-jlJ9msSU68Fs1NntWF_6fAJBdXQM63&s",
    },
    {
      name: "\u0baa\u0bbf\u0bb8\u0bcd\u0bae\u0bbf \u0bb0\u0bc7\u0b9f\u0bbf\u0baf\u0bcb",
      url: "https://stream.rcs.revma.com/pcr8x50uty8uv",
      category: "DEVOTIONAL",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY_FLgXrKR5sKOpKJ68-jlJ9msSU68Fs1NntWF_6fAJBdXQM63&s",
    },
    {
      category: "DEVOTIONAL",
      logo: "http://radiosindiaapp.com/images/barakathradio1.jpg",
      name: "Barakath Radio",
      url: "http://stream.rcs.revma.com/cy0s94xf268uv",
    },
    {
      name: "Inbam FM (Christian)",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfLs7isTe5leHKfd0M26XnP_MFD_h_Kp4QxIgCWcLBypz11s&s",
      category: "DEVOTIONAL",
      url: "http://stream.radio.co/sf55ced545/listen",
    },
    {
      name: "Luminous Radio (TVR)",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ10OuPCr1WO8a-EpvUHNjf_Gjs1s_bZ81Y3D-agf9s9CIRrcI&s",
      category: "DEVOTIONAL",
      url: "http://patmos.cdnstream.com:8602/live",
    },
    {
      name: "Devaprasannam",
      category: "DEVOTIONAL",
      url: "http://195.154.217.103:8013/;p",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBECFOREQffZl1Y31c4w0kNw4OV5PiC-lEZNRidNarrSIj1e8&s",
    },
    {
      name: "Jesus Coming (Erode)",
      category: "DEVOTIONAL",
      url: "http://live.jesuscomingfm.com:8230/;p",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSralcEmWgbaAgu8TefUrEMqW3ew5IfB6tbO6a9Kr-EMt58DO9g&s",
    },
    {
      name: "Bakthi Radio  (Hindu)",
      url: "http://173.249.23.30:8010/stream",
      category: "DEVOTIONAL",
      logo: "http://radiosindiaapp.com/images/bakthiradio.jpg",
    },
    {
      name: "Sai Radio",
      url: "https://sairadio.net.in/radio/8000/radio.mp3",
      category: "DEVOTIONAL",
      logo: "http://radiosindiaapp.com/images/sairadio.jpg",
    },
    {
      name: "Radio Sai  (World FM)",
      url: "http://stream.radiosai.org:8002/",
      category: "DEVOTIONAL",
      logo: "http://radiosindiaapp.com/images/radiosai.jpg",
    },
    {
      name: "Iyalisai  Bakthi",
      category: "DEVOTIONAL",
      url: "http://curiosity.shoutca.st:9655/mp48",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCO3HwBGP2aYYq6rhFbE5YfZqfKK1Hizp6JRWcyLqIB0Yo7-M&s",
    },
    {
      name: "Vanavil Bakthi",
      category: "DEVOTIONAL",
      url: "https://ec1.yesstreaming.net:1810/stream",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhsjdGEviPczb0Bv7cum2jVAF36MwkK3UlhfAshwtQnvGya8&s",
    },
    {
      category: "LOCAL RADIOS",
      logo: "http://radiosindiaapp.com/images/radiogilli.png",
      name: "Radio Gilli",
      url: "http://live.rcast.net:8694/;stream.mp3",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/ttrfm.jpg",
      name: "Tamil Thai  FM",
      url: "http://radio.massstream.net/8010/stream",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/ustamilfm.jpg",
      name: "US Tamil FM",
      url: "http://streaming.radio.co/s0cfc93915/listen",
    },
    {
      category: "LOCAL RADIOS",
      logo: "http://radiosindiaapp.com/images/radiolime.jpg",
      name: "Radio Lime",
      url: "http://s5.radio.co/sa8b2e14b5/listen",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/tamilosaifm.jpg",
      name: "Tamil Osai FM",
      url: "http://usa15.fastcast4u.com:4566/stream",
    },
    {
      category: "LOCAL RADIOS",
      logo: "http://radiosindiaapp.com/images/instrumental.jpg",
      name: "Instrumental Music Radio",
      url: "http://azuracast.vibesounds.in:8030/radio.mp3",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/canadatamilradio.jpg",
      name: "Canada Tamil Radio CA",
      url: "http://87.98.219.178:8412/;stream/1",
    },
    {
      category: "LOCAL RADIOS",
      logo: "http://shortfilmsite.com/images/roobamfm.jpg",
      name: "Roobam FM",
      url: "http://s3.radio.co/sadfae7495/listen",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/swedentamilsfm.jpg",
      name: "Sweden Tamils FM",
      url: "http://listen.radioking.com/radio/355330/stream/404626",
    },
    {
      category: "LOCAL RADIOS",
      logo: "http://radiosindiaapp.com/images/eaglefm.jpg",
      name: "Eagle FM",
      url: "http://streaming.radio.co/sf833cd785/listen",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/mazhaifm2.jpg",
      name: "Mazhai FM",
      url: "http://pollux.shoutca.st:9999/;stream.mp3",
    },
    {
      category: "LOCAL RADIOS",
      logo: "http://radiosindiaapp.com/images/maduraimallifm.jpg",
      name: "Madurai Malli FM",
      url: "http://live.tamilkuyilradio.com:8030/maduramallifm",
    },
    {
      category: "LOCAL RADIOS",
      logo: "http://radiosindiaapp.com/images/friendstamilfm.jpg",
      name: "Friends Tamil FM",
      url: "http://149.56.157.81:8487/stream",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://shortfilmsite.com/images/radiobeatthaalam.jpg",
      name: "Radio Beat Thaalam",
      url: "http://live.exertion.in:8050/radio.mp3",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/radiobeatlove.jpg",
      name: "Radio Beat Love",
      url: "http://live.exertion.in:8020/radio.mp3",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/thozhafm.jpg",
      name: "Thozha FM",
      url: "http://103.215.168.169:8000/thozhafm",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/a1-vaanoli.jpg",
      name: "A1 Tamil Radio",
      url: "http://ec3.yesstreaming.net:1190/stream",
    },
    {
      category: "LOCAL RADIOS",
      logo: "http://radiosindiaapp.com/images/abctamil.jpg",
      name: "ABC Tamil FM@",
      url: "http://51.255.235.165:5745/stream",
    },
    {
      category: "LOCAL RADIOS",
      logo: "http://radiosindiaapp.com/images/magizhchifm.jpg",
      name: "Magizhchi FM",
      url: "http://149.56.157.81:20047/stream",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/vaanambadivaanoli.jpg",
      name: "Vaanambadi Vaanoli",
      url: "http://192.95.39.65:25189/stream",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/soupfm.jpg",
      name: "Soup FM Malaysia",
      url: "http://usa7.fastcast4u.com:8808/soupfm",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/kummalamradio.jpg",
      name: "Kummalam Radio",
      url: "http://kummalam.stream.laut.fm/kummalam",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/iyalisairadio.jpg",
      name: "Iyalisai Radio (Lanka)",
      url: "http://andromeda.shoutca.st:9350/stream",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/ctr24.jpg",
      name: "Beyond Roots",
      url: "http://87.98.219.178:8180/stream",
    },
    {
      category: "LOCAL RADIOS",
      logo: "http://radiosindiaapp.com/images/jeifm.jpg",
      name: "Jei FM",
      url: "http://167.114.131.90:8808/jeifm",
    },
    {
      category: "LOCAL RADIOS",
      logo: "http://radiosindiaapp.com/images/ftcfm.jpg",
      name: "Friends Tamil Chat FM FTC",
      url: "http://167.114.131.90:5750/;stream.mp3",
    },
    {
      name: "AIR Malayalam",
      url: "http://air.pc.cdn.bitgravity.com:80/air/live/pbaudio230/chunklist.m3u8",
      category: "MALAYALAM",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzcrHEH9utK82e1Sv-XaR8v1Wf_r2PLeRcooOJwgfpKOwuKA&s",
    },
    {
      name: "Radio Malayalam",
      url: "http://radiomalayalamfm.com/radio/8000/radio.mp3",
      category: "MALAYALAM",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkB5L1c5kZU8myBUgNEpirMvoPvibRiMjc22AV94O03A6CBDw&s",
    },
    {
      name: "Pesalam Vanga    -   \u0baa\u0bc7\u0b9a\u0bb2\u0bbe\u0bae\u0bcd \u0bb5\u0bbe\u0b99\u0bcd\u0b95  - \u0b87\u0bb2\u0b95\u0bcd\u0b95\u0bbf\u0baf \u0bb5\u0b9f\u0bcd\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b87\u0ba3\u0bc8\u0baf \u0bb5\u0bbe\u0ba9\u0bca\u0bb2\u0bbf (\u0b9a\u0bbf\u0bb5\u0b95\u0bbf\u0bb0\u0bbf , \u0b88\u0bb0\u0bcb\u0b9f\u0bc1)",
      url: "https://sp.radiotamilonline.com/8044/stream",
      url2: "http://stream.zeno.fm/rn6jdktnsdevv",
      category: "GPM RADIOS",
      logo: "https://drive.google.com/uc?id=1srqYmnjE32ckKvChs9yBE87Ke4Uegkty",
    },
    {
      category: "WORLD RADIOS",
      logo: "http://radiosindiaapp.com/images/geethavani1.jpg",
      name: "Geethavani FM",
      url: "http://149.56.234.138:8037/;p",
    },
    {
      name: "Radio Beat RETRO",
      url: "http://5.63.151.52:7142/stream",
      category: "WORLD RADIOS",
      logo: "https://i.pinimg.com/originals/bd/03/b1/bd03b1461719f0b3648af723857f4e0a.jpg",
    },
    {
      category: "LOCAL RADIOS",
      logo: "http://radiosindiaapp.com/images/suranjalifm.jpg",
      name: "Suranjali FM",
      url: "http://85.25.185.202:8381/stream",
    },
  ];
  var U = "example:music:";

  // Register a service (will appear on home page)
  plugin.createService("Music example", U, "other", true);

  // Add a responder to the registered URI
  plugin.addURI(U, function (page) {
    checkupdate(page);
    page.type = "directory";
    page.metadata.title = "Music examples";
    for (i = 0; i < movResource.length; i++) {
      page.appendItem(movResource[i].url, "audio", {
        title: movResource[i].name,
        artist: movResource[i].category,
        icon: movResource[i].logo,
      });
    }
    page.loading = false;
  });
})(this);

function checkupdate(page) {
  page.options.createAction("update", "Update TLL", function () {
    popup.notify(
      "Updating, please wait for 10 seconds and click back ...",
      0xa
    );
    page.redirect(
      "https://github.com/okmthiru04/movian_tamil_music/raw/main/music.zip"
    );
  });

  resp = http
    .request(
      "https://raw.githubusercontent.com/okmthiru04/movian_tamil_music/main/plugin.json"
    )
    .toString();
  console.log(resp);
  const latestVersion = JSON.parse(resp).version;
  // Compare the versions
  console.log("local " + localVersion + " new " + latestVersion);
  popup.notify("local " + localVersion + " new " + latestVersion, 0xa);
  if (compareVersions(latestVersion, localVersion) > 0) {
    popup.notify(
      "New version of TLL " +
        latestVersion +
        " is available. Press right arrow on Dpad and click update TLL",
      0x9
    );
  }
}

// Function to compare version numbers
function compareVersions(version1, version2) {
  const parts1 = version1.split(".");
  const parts2 = version2.split(".");
  for (var i = 0; i < 3; i++) {
    const part1 = parseInt(parts1[i], 10);
    const part2 = parseInt(parts2[i], 10);
    if (part1 > part2) {
      return 1;
    }
    if (part1 < part2) {
      return -1;
    }
  }
  return 0;
}
