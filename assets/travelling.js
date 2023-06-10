function travelling() {
  let urls = [];
  const https = "https://";
  const reg = new RegExp("^" + https);
  const empty = null;
  const suffix = "/?utm_source=travellings";

  urls[0] = "https://github.com/travellings-link/travellings";
  urls[1] = "www.volf.club";
  urls[2] = "sonic.volf.club";
  urls[3] = "yltang.cn";
  urls[4] = "barku.re/blog";
  urls[5] = empty;
  urls[6] = "www.yamdr.cn";
  urls[7] = "www.kanofans.com";
  urls[8] = empty;
  urls[9] = empty;
  urls[10] = "blog.uniartisan.com";
  urls[11] = "jinqimu.github.io";
  urls[12] = empty;
  urls[13] = empty;
  urls[14] = empty;
  urls[15] = "jinjis.cn";
  urls[16] = "blog.tigerxly.com";
  urls[17] = empty;
  urls[18] = "cak.moe";
  urls[19] = "blog.moej.cn";
  urls[20] = "mmyyll.ml";
  urls[21] = empty;
  urls[22] = "grimoire.cn";
  urls[23] = "www.naraku.cn";
  urls[24] = "www.xiyo8.cn";
  urls[25] = "www.wangkai88.com";
  urls[26] = "blog.zeruns.tech";
  urls[27] = "guqing.xyz";
  urls[28] = empty;
  urls[29] = "feiliwuyan.com";
  urls[30] = "blog.m78.co";
  urls[31] = empty;
  urls[32] = "www.sitstars.com";
  urls[33] = "ionssource.cn";
  urls[34] = empty;
  urls[35] = empty;
  urls[36] = "www.yunyoujun.cn";
  urls[37] = empty;
  urls[38] = empty;
  urls[39] = empty;
  urls[40] = empty;
  urls[41] = "krau.top";
  urls[42] = "wfblog.net";
  urls[43] = empty;
  urls[44] = empty;
  urls[45] = "blog.yegetables.cn";
  urls[46] = "www.freejishu.com";
  urls[47] = "baka.fun";
  urls[48] = "dreamo.ink";
  urls[49] = "dpii.club";
  urls[50] = empty;
  urls[51] = empty;
  urls[52] = "spinaround.tk";
  urls[53] = "www.lin03.cn";
  urls[54] = empty;
  urls[55] = empty;
  urls[56] = empty;
  urls[57] = empty;
  urls[58] = empty;
  urls[59] = empty;
  urls[60] = empty;
  urls[61] = empty;
  urls[62] = empty;
  urls[63] = empty;
  urls[64] = "blog.ojhdt.com";
  urls[65] = "moechu.cn";
  urls[66] = "www.zqcnc.cn";
  urls[67] = empty;
  urls[68] = "wznmickey.com";
  urls[69] = empty;
  urls[70] = "www.jsxlo.com";
  urls[71] = empty;
  urls[72] = empty;
  urls[73] = empty;
  urls[74] = empty;
  urls[75] = empty;
  urls[76] = "moshanghua.net";
  urls[77] = "blog.imyan.ren";
  urls[78] = empty;
  urls[79] = empty;
  urls[80] = empty;
  urls[81] = empty;
  urls[82] = "www.lipk.org";
  urls[83] = empty;
  urls[84] = empty;
  urls[85] = "takuron.top";
  urls[86] = "musenxi.com";
  urls[87] = "www.wasabi.fun";
  urls[88] = "blog.luvying.com";
  urls[89] = "www.fzxx.xyz";
  urls[90] = empty;
  urls[91] = "www.addesp.com";
  urls[92] = "blog.devyi.com";
  urls[93] = "blog.mhuig.top";
  urls[94] = empty;
  urls[95] = "blog.6yfz.cn";
  urls[96] = "www.geekera.cn";
  urls[97] = empty;
  urls[98] = "kissbaofish.cn";
  urls[99] = "blog.fkun.tech";
  urls[100] = empty;
  urls[101] = "blog.chrxw.com";
  urls[102] = empty;
  urls[103] = "www.tabirstrees.top";
  urls[104] = empty;
  urls[105] = empty;
  urls[106] = "www.ishells.cn";
  urls[107] = empty;
  urls[108] = "zkpeace.com";
  urls[109] = empty;
  urls[110] = "ilovey.live";
  urls[111] = empty;
  urls[112] = "jimmyqin.cn";
  urls[113] = empty;
  urls[114] = empty;
  urls[115] = empty;
  urls[116] = empty;
  urls[117] = "www.chirmyram.top";
  urls[118] = empty;
  urls[119] = empty;
  urls[120] = empty;
  urls[121] = empty;
  urls[122] = "fx7.top";
  urls[123] = "blog.butanediol.me";
  urls[124] = empty;
  urls[125] = empty;
  urls[126] = empty;
  urls[127] = empty;
  urls[128] = "handsonic.top";
  urls[129] = empty;
  urls[130] = "fushaolei.github.io";
  urls[131] = "iktao.cn";
  urls[132] = "innei.ren";
  urls[133] = "dusays.com";
  urls[134] = empty;
  urls[135] = empty;
  urls[136] = "blog.tengfei.website";
  urls[137] = empty;
  urls[138] = empty;
  urls[139] = "colsrch.cn";
  urls[140] = "azusemisa.top";
  urls[141] = empty;
  urls[142] = "www.yilantingfeng.site";
  urls[143] = empty;
  urls[144] = "shoka.lostyu.me";
  urls[145] = "www.mrskye.cn";
  urls[146] = "zigzagk.top";
  urls[147] = "jsongx.com";
  urls[148] = "www.kiritoghy.cn";
  urls[149] = "www.cnblogs.com/borber";
  urls[150] = empty;
  urls[151] = "loafing.cn";
  urls[152] = empty;
  urls[153] = empty;
  urls[154] = empty;
  urls[155] = "xd.sh.cn";
  urls[156] = empty;
  urls[157] = "www.timochan.cn";
  urls[158] = "www.coolku.cc";
  urls[159] = "www.summerpond.cn";
  urls[160] = "blog.fivezha.cn";
  urls[161] = empty;
  urls[162] = "wnag.com.cn";
  urls[163] = empty;
  urls[164] = empty;
  urls[165] = empty;
  urls[166] = empty;
  urls[167] = "blog.pppane.com";
  urls[168] = empty;
  urls[169] = empty;
  urls[170] = empty;
  urls[171] = empty;
  urls[172] = "funix.cn";
  urls[173] = "www.codinglink.tech";
  urls[174] = "www.bluesdawn.top";
  urls[175] = "www.libertystore.one";
  urls[176] = "blog.cyfan.top";
  urls[177] = empty;
  urls[178] = "blog.luzy.top";
  urls[179] = "senorui.top";
  urls[180] = empty;
  urls[181] = "blog.lihaojin.cn";
  urls[182] = empty;
  urls[183] = "zhenwu99.gitee.io";
  urls[184] = empty;
  urls[185] = empty;
  urls[186] = empty;
  urls[187] = empty;
  urls[188] = empty;
  urls[189] = empty;
  urls[190] = "blog.yunshu.site";
  urls[191] = empty;
  urls[192] = "xiaokang.me";
  urls[193] = "megatontech.github.io";
  urls[194] = empty;
  urls[195] = "huiris.com";
  urls[196] = empty;
  urls[197] = "ishya.top";
  urls[198] = "www.mbrjun.cn";
  urls[199] = empty;
  urls[200] = "youdef.com";
  urls[201] = "www.heson10.com";
  urls[202] = "yf-ch.com";
  urls[203] = empty;
  urls[204] = "www.feidaoboke.com";
  urls[205] = empty;
  urls[206] = empty;
  urls[207] = empty;
  urls[208] = "www.vmert.com";
  urls[209] = empty;
  urls[210] = "fiammanda.github.io";
  urls[211] = "www.xiangshu233.cn";
  urls[212] = "7bxing.com";
  urls[213] = "www.overme.cn";
  urls[214] = "vinking.top";
  urls[215] = empty;
  urls[216] = empty;
  urls[217] = "fang.blog.miri.site";
  urls[218] = "hiwannz.com";
  urls[219] = empty;
  urls[220] = "rhythmlian.cn";
  urls[221] = empty;
  urls[222] = empty;
  urls[223] = "qikaile.tk";
  urls[224] = empty;
  urls[225] = "www.tdrme.cn";
  urls[226] = empty;
  urls[227] = empty;
  urls[228] = empty;
  urls[229] = "blog.tomys.top";
  urls[230] = "www.yidiankuaile.com";
  urls[231] = "blog.angustar.com";
  urls[232] = "blog.licaoz.com";
  urls[233] = empty;
  urls[234] = "www.yotroy.cool";
  urls[235] = empty;
  urls[236] = "imszz.com";
  urls[237] = empty;
  urls[238] = empty;
  urls[239] = empty;
  urls[240] = "www.liuzhimin.vip";
  urls[241] = "hin.cool";
  urls[242] = "hilzl.cn";
  urls[243] = "www.ganto.cn";
  urls[244] = "weidows.github.io";
  urls[245] = "magma.ink";
  urls[246] = "yzyyz.top";
  urls[247] = empty;
  urls[248] = "blog.xecades.xyz";
  urls[249] = "blog.amoswu.cn";
  urls[250] = empty;
  urls[251] = "www.extlight.com";
  urls[252] = "666wxy666.github.io";
  urls[253] = "err0r.top";
  urls[254] = empty;
  urls[255] = "www.roaing.com";
  urls[256] = "loliloli.moe";
  urls[257] = empty;
  urls[258] = "blog.7wate.com";
  urls[259] = empty;
  urls[260] = empty;
  urls[261] = empty;
  urls[262] = empty;
  urls[263] = "lib.sci-adv.cc";
  urls[264] = "misakamoe.com";
  urls[265] = empty;
  urls[266] = "blog.fwder.cn";
  urls[267] = empty;
  urls[268] = "ghostsf.com";
  urls[269] = "www.aiyo99.com";
  urls[270] = "www.moleft.cn";
  urls[271] = empty;
  urls[272] = "blog.moeworld.tech";
  urls[273] = "blog.lzlz.site";
  urls[274] = empty;
  urls[275] = "beelake.github.io";
  urls[276] = empty;
  urls[277] = empty;
  urls[278] = "irr.ink";
  urls[279] = "blog.ljcbaby.top";
  urls[280] = empty;
  urls[281] = "www.aigeek.top";
  urls[282] = "foolishfox.cn";
  urls[283] = "jin-yuhan.github.io";
  urls[284] = "goopher.tk";
  urls[285] = "www.zouht.com";
  urls[286] = "www.shuiao.top";
  urls[287] = empty;
  urls[288] = "syjun.vip";
  urls[289] = "www.rsnocsi.cn";
  urls[290] = "blog.bugcola.com/note";
  urls[291] = "www.debuginn.cn";
  urls[292] = "linzeyin.github.io";
  urls[293] = empty;
  urls[294] = empty;
  urls[295] = "bangkaixin.com";
  urls[296] = "hacbox.me";
  urls[297] = "www.limina.top";
  urls[298] = empty;
  urls[299] = "blog.southfox.me";
  urls[300] = "imfurry.com";
  urls[301] = "imcys.com";
  urls[302] = "www.xiwangly.top";
  urls[303] = "blog.itsse.cn";
  urls[304] = "blog.noxsk.com";
  urls[305] = "www.hzq.life";
  urls[306] = "www.cayzlh.com";
  urls[307] = "blog.garryde.com";
  urls[308] = "blog.thiefship.com";
  urls[309] = "eritque-arcus.tech";
  urls[310] = "www.kirito41dd.cn";
  urls[311] = "blog.imzy.ink";
  urls[312] = empty;
  urls[313] = "blog.emoao.com";
  urls[314] = empty;
  urls[315] = "www.nfxwblog.com";
  urls[316] = "muspace.top";
  urls[317] = "wangdabao.js.cool";
  urls[318] = "xeblog.cn";
  urls[319] = "blog.wangtwothree.com";
  urls[320] = "uyoahz.cn";
  urls[321] = "iamazing.cn";
  urls[322] = "zisu.dev";
  urls[323] = "blog.revincx.icu";
  urls[324] = "blog.badapple.pro";
  urls[325] = empty;
  urls[326] = empty;
  urls[327] = "www.ariels.xyz";
  urls[328] = "www.amazingk.cn";
  urls[329] = empty;
  urls[330] = empty;
  urls[331] = "blog.gztime.cc";
  urls[332] = empty;
  urls[333] = "blog.sakurasep.club";
  urls[334] = "ihkk.net";
  urls[335] = empty;
  urls[336] = "imcbc.cn";
  urls[337] = "lewky.cn";
  urls[338] = empty;
  urls[339] = empty;
  urls[340] = "www.cxl2020mc.top";
  urls[341] = "bkryofu.xyz";
  urls[342] = empty;
  urls[343] = empty;
  urls[344] = "www.996workers.icu";
  urls[345] = "blog.integer.top";
  urls[346] = empty;
  urls[347] = empty;
  urls[348] = empty;
  urls[349] = "iloli.moe";
  urls[350] = empty;
  urls[351] = empty;
  urls[352] = "jokerdig.com";
  urls[353] = "www.morcat.cn";
  urls[354] = "ldo.one";
  urls[355] = "katcloud.cn";
  urls[356] = "wangquanguo.life";
  urls[357] = "blog.jjdxb.top";
  urls[358] = empty;
  urls[359] = "blog.y7n05h.dev";
  urls[360] = "www.chenmx.net";
  urls[361] = empty;
  urls[362] = empty;
  urls[363] = "www.cbxg.icu";
  urls[364] = "wiki.eryajf.net";
  urls[365] = "back2me.cn";
  urls[366] = "totoro.site";
  urls[367] = "blog.hzchu.top";
  urls[368] = "blog.skihome.xyz";
  urls[369] = "cairbin.top";
  urls[370] = "blog.lxscloud.top";
  urls[371] = empty;
  urls[372] = "www.lemonx.cn";
  urls[373] = "cry33.com";
  urls[374] = "rssblog.cn";
  urls[375] = "bamboomc.cn";
  urls[376] = "blog.ltya.top";
  urls[377] = "www.utopiaxc.cn";
  urls[378] = "www.owwee.cn";
  urls[379] = "www.xiaozonglin.cn";
  urls[380] = "chenhe.me";
  urls[381] = empty;
  urls[382] = "moe.tips";
  urls[383] = "www.chenxublog.com";
  urls[384] = empty;
  urls[385] = empty;
  urls[386] = "longtao.fun";
  urls[387] = "blog.dlya.top";
  urls[388] = "yleave.top";
  urls[389] = "www.nongyanxia.cn";
  urls[390] = empty;
  urls[391] = empty;
  urls[392] = "blog.moe233.net";
  urls[393] = "www.throwx.cn";
  urls[394] = "scottyeung.top";
  urls[395] = "kk.hackerjk.top";
  urls[396] = "www.mishi23.com";
  urls[397] = empty;
  urls[398] = "www.ohyee.cc";
  urls[399] = "szx.life";
  urls[400] = "lifeni.life";
  urls[401] = "pzwd.net";
  urls[402] = empty;
  urls[403] = empty;
  urls[404] = "travellings.link/assets/Zephyr.jpg";
  urls[405] = "wrans.top";
  urls[406] = empty;
  urls[407] = "chukogals.top";
  urls[408] = "www.thyuu.com";
  urls[409] = "baipin.pw";
  urls[410] = "cat.dorcandy.cn";
  urls[411] = empty;
  urls[412] = "blog.pai233.top";
  urls[413] = "xding.top";
  urls[414] = "iooo.top";
  urls[415] = "www.manshaoco.com";
  urls[416] = "www.elliot98.top";
  urls[417] = "aloner.ink";
  urls[418] = "blog.lfhsheng.com";
  urls[419] = "nie.su";
  urls[420] = "imba97.cn";
  urls[421] = "fairysen.com";
  urls[422] = "www.frytea.com";
  urls[423] = "zinglix.xyz";
  urls[424] = "blog.sky390.cn";
  urls[425] = empty;
  urls[426] = "docs.shanyuhai.top";
  urls[427] = "blog.ypingcn.com";
  urls[428] = empty;
  urls[429] = "youngjuning.js.org";
  urls[430] = "icodeq.com";
  urls[431] = "javadocs.zkeq.xyz";
  urls[432] = "www.57blog.cn";
  urls[433] = "ll.sc.cn";
  urls[434] = "www.wanghanyue.com";
  urls[435] = "www.miaoer.xyz";
  urls[436] = "www.liaochenlanruo.fun";
  urls[437] = "blog.lking.icu";
  urls[438] = "masle.top";
  urls[439] = "www.sccens.net";
  urls[440] = "xn--e1t46na.xn--6qq986b3xl";
  urls[441] = "blog.dylanwu.space";
  urls[442] = "blog.sakurasep.site";
  urls[443] = "nickx.cn";
  urls[444] = "lanta.bangumi.cyou";
  urls[445] = "www.qystu.cc";
  urls[446] = empty;
  urls[447] = empty;
  urls[448] = "www.imcao.cn";
  urls[449] = "zhuye.sangxuesheng.com";
  urls[450] = empty;
  urls[451] = "zsd.name";
  urls[452] = "liu527.gitee.io";
  urls[453] = "blog.w03.cc";
  urls[454] = "blog.diz7.com";
  urls[455] = "kouki.ltd";
  urls[456] = empty;
  urls[457] = "dorakika.cn";
  urls[458] = empty;
  urls[459] = "dabigu.xyz";
  urls[460] = "hugo.bnblogs.cc";
  urls[461] = "www.hovthen.com";
  urls[462] = "www.wanglingyue.com";
  urls[463] = empty;
  urls[464] = "www.oplog.cn";
  urls[465] = empty;
  urls[466] = "weekdawn.github.io";
  urls[467] = empty;
  urls[468] = "blog.nofated.win";
  urls[469] = "zhekunren.github.io";
  urls[470] = "www.helywin.com";
  urls[471] = "blog.withkr.xyz";
  urls[472] = "blog.isww.cn";
  urls[473] = "blog.orangii.cn";
  urls[474] = "blog.sukiu.top";
  urls[475] = "rousongs.com";
  urls[476] = "blogs.stephen-zhang.cn";
  urls[477] = "226yzy.com";
  urls[478] = "f2h2h1.github.io";
  urls[479] = empty;
  urls[480] = empty;
  urls[481] = "sady0.com";
  urls[482] = "www.imcharon.com";
  urls[483] = "xyzbz.cn";
  urls[484] = empty;
  urls[485] = "aibofan.com";
  urls[486] = "fu1fan.cn";
  urls[487] = empty;
  urls[488] = empty;
  urls[489] = "v2hot.pipecraft.net";
  urls[490] = "dvel.me";
  urls[491] = "josephz.top";
  urls[492] = "zblogs.top";
  urls[493] = empty;
  urls[494] = empty;
  urls[495] = "yiqiangshiyia.cn";
  urls[496] = "blog.starysky.top";
  urls[497] = "jukebox.pipecraft.net";
  urls[498] = empty;
  urls[499] = "discuss-cn.bestxtools.com";
  urls[500] = "blog.wingszeng.top";
  urls[501] = empty;
  urls[502] = "lml023.top";
  urls[503] = "www.astrophel.top";
  urls[504] = empty;
  urls[505] = "weistuday.com";
  urls[506] = "stvue.com";
  urls[507] = "www.leyoubaloy.xyz";
  urls[508] = "www.moraex.com";
  urls[509] = "yujiale.blog";
  urls[510] = "blog.jerrywick.com";
  urls[511] = "lxnchan.cn";
  urls[512] = "www.xiaohuihui.net";
  urls[513] = "blog.dominoh.com";
  urls[514] = empty;
  urls[515] = empty;
  urls[516] = "qinzhi.cc";
  urls[517] = empty;
  urls[518] = empty;
  urls[519] = "blog.yidaozhan.top";
  urls[520] = "nanxing.ltd";
  urls[521] = empty;
  urls[522] = "lishizi.jushistudio.com";
  urls[523] = "moi-mo.github.io";
  urls[524] = empty;
  urls[525] = "www.ygxz.in";
  urls[526] = empty;
  urls[527] = "blog.sdgou.cc";
  urls[528] = "cacx.cc";
  urls[529] = empty;
  urls[530] = "blog.853lab.com";
  urls[531] = empty;
  urls[532] = empty;
  urls[533] = "www.shimmerl.top";
  urls[534] = "blog.liugezhou.online";
  urls[535] = "ggj.moe";
  urls[536] = "aotxland.com";
  urls[537] = "blog.qaiu.top";
  urls[538] = "nicejf.cn";
  urls[539] = "wyxogo.top";
  urls[540] = "hikki.site";
  urls[541] = "wiki.pwddd.com";
  urls[542] = "www.mrgod.cn";
  urls[543] = "www.ykuee.link";
  urls[544] = "blog.zhheo.com";
  urls[545] = "mm.yaomomo.com";
  urls[546] = "lymtics.top";
  urls[547] = "www.rsecc.cn";
  urls[548] = "www.writiger.cn";
  urls[549] = "blog.wututu.cn";
  urls[550] = empty;
  urls[551] = "liupj.top";
  urls[552] = "www.data-era.cn";
  urls[553] = empty;
  urls[554] = "blog.kifuan.me";
  urls[555] = "blog.lsilencej.top";
  urls[556] = "www.imut.xyz";
  urls[557] = empty;
  urls[558] = "blog.rick.icu";
  urls[559] = "zzzing.cn";
  urls[560] = "www.nonedata.com";
  urls[561] = empty;
  urls[562] = empty;
  urls[563] = "www.chenii.com";
  urls[564] = "www.feizhuqwq.com";
  urls[565] = "kuaikan.ink";
  urls[566] = "www.tiaobug.com";
  urls[567] = empty;
  urls[568] = "www.xdull.cn";
  urls[569] = "blog.davidweng.tk";
  urls[570] = "www.casecori.top";
  urls[571] = "blognas.hwb0307.com";
  urls[572] = "www.aohuiliu.fun";
  urls[573] = empty;
  urls[574] = "www.tyrantg.com";
  urls[575] = empty;
  urls[576] = "www.shibuyu.fun";
  urls[577] = "blog.kobin.cn";
  urls[578] = "panda995.xyz";
  urls[579] = "blog.foxcm.com";
  urls[580] = "www.bytecho.net";
  urls[581] = "blog.code520.com.cn";
  urls[582] = empty;
  urls[583] = "mojinxi.cn";
  urls[584] = "imum.me";
  urls[585] = "xiaoxinblog.xyz";
  urls[586] = "blog.meta-code.top";
  urls[587] = "icooper.cc";
  urls[588] = "xiangshu233.cn";
  urls[589] = "u.mr90.top";
  urls[590] = empty;
  urls[591] = "7gugu.com";
  urls[592] = "blog.leonus.cn";
  urls[593] = "champhoon.xyz";
  urls[594] = "moechun.fun";
  urls[595] = empty;
  urls[596] = "sxrekord.com";
  urls[597] = empty;
  urls[598] = "www.cubik65536.top";
  urls[599] = "myblog.wallleap.cn";
  urls[600] = "blog.xlenco.top";
  urls[601] = "baii.icu";
  urls[602] = "blog.bluemangoo.net";
  urls[603] = "www.ordchaos.com";
  urls[604] = "yuanzj.top";
  urls[605] = "www.hairy.blog";
  urls[606] = "blog.roccoshi.top";
  urls[607] = empty;
  urls[608] = "pkold.com";
  urls[609] = empty;
  urls[610] = "blog.xsnet.eu.org";
  urls[611] = "blog.kobal.cn";
  urls[612] = "blog.hijiajia.xyz";
  urls[613] = "xsunhua.cn";
  urls[614] = empty;
  urls[615] = "off.cx";
  urls[616] = "fffzlfk.github.io";
  urls[617] = "www.penginman.com";
  urls[618] = "tuerxuan.com";
  urls[619] = "yisous.xyz";
  urls[620] = "blog.panghai.top";
  urls[621] = "b.925i.cn";
  urls[622] = "wangyunzi.com";
  urls[623] = "yuano.cc";
  urls[624] = "www.bahuangshanren.tech";
  urls[625] = "blog.nosecurity.cn";
  urls[626] = "ameow.xyz";
  urls[627] = "anzhiy.cn";
  urls[628] = "shockerli.net";
  urls[629] = "www.dnxrzl.com";
  urls[630] = "blog.ohtoai.com";
  urls[631] = "www.x8xx.cn";
  urls[632] = "www.iftft.com";
  urls[633] = "blog.itciraos.cn";
  urls[634] = "www.shifeiti.com";
  urls[635] = "www.loquy.cn";
  urls[636] = "yingqing.cf";
  urls[637] = "bolg.wuenci.wang";
  urls[638] = "www.zh996.com";
  urls[639] = "cpen.top";
  urls[640] = "www.luodeb.top";
  urls[641] = "blog.mrzefr.cn";
  urls[642] = "kqh.me";
  urls[643] = "heroxin.xyz";
  urls[644] = "hu86.cc";
  urls[645] = "blog.jaspirit.cc";
  urls[646] = "kenshin2438.top";
  urls[647] = "www.tonyyin.top";
  urls[648] = "z555.icu";
  urls[649] = "www.bio-w.cn";
  urls[650] = "www.czfq99.cn";
  urls[651] = "www.zhengqiao.wang";
  urls[652] = "lihaoyu.cn";
  urls[653] = "xiamoqwq.com";
  urls[654] = "www.xiaoxiaosky.top";
  urls[655] = "acchw.top";
  urls[656] = "www.zhengwenfeng.com";
  urls[657] = "www.itbob.cn";
  urls[658] = "yoseya2410.github.io";
  urls[659] = "jiejie.uk/blog";
  urls[660] = "www.lizhichen.cn";
  urls[661] = empty;
  urls[662] = "blog.mariozzj.cn";
  urls[663] = "www.aurora.love";
  urls[664] = "www.xcshare.cn";
  urls[665] = "furryowo.top";
  urls[666] = "blog.moew.xyz";
  urls[667] = "www.yanghuaxing.com";
  urls[668] = empty;
  urls[669] = "fanyiming.life";
  urls[670] = "blog.linsnow.cn";
  urls[671] = "blog.ganxb2.com";
  urls[672] = "www.iots.vip";
  urls[673] = empty;
  urls[674] = "amiaaaz.github.io";
  urls[675] = "www.ling71.cn";
  urls[676] = "www.one21.cn";
  urls[677] = "diary.bid";
  urls[678] = "qvp.moe";
  urls[679] = "blog.goodboyboy.top";
  urls[680] = "www.yumus.cn";
  urls[681] = empty;
  urls[682] = "blog.levnli.cn";
  urls[683] = empty;
  urls[684] = "www.chwin.asia";
  urls[685] = "www.yuanning0818.tk";
  urls[686] = "www.ittongxue.cn";
  urls[687] = "blog.caiu.top";
  urls[688] = "blog.rickyxrc.cc";
  urls[689] = "tdeh.top";
  urls[690] = "www.rqdmap.top";
  urls[691] = "ymckc.cn";
  urls[692] = "muidar.com";
  urls[693] = "www.kaitaku.xyz";
  urls[694] = "amber6hua.github.io";
  urls[695] = "b.hui.ke";
  urls[696] = "blog.1id.top";
  urls[697] = "w.reol.ml";
  urls[698] = "www.iamdt.cn";
  urls[709] = "www.xiangming.site";
  urls[700] = "www.haoba.cc";
  urls[701] = "www.alpacabro.com";
  urls[702] = "echeverra.cn";
  urls[703] = "blog.wyblog1.tk";
  urls[704] = "www.yoliliyo.com";
  urls[705] = "easyf12.top";
  urls[706] = "www.hsuyeung.com";
  urls[707] = "his2nd.life";
  urls[708] = "taheta.ren";
  urls[709] = "veryjack.com";
  urls[710] = "anotherdayu.com";
  urls[711] = "www.nuyoahbk.com";
  urls[712] = "blog.outpost54.top";
  urls[713] = "blog.mocn.top";
  urls[714] = "blog.zzppjj.top";
  urls[715] = "shape.kloudy.cn";
  urls[716] = "www.zywvvd.com";
  urls[717] = "louisfiy.com";
  urls[718] = "moyu233.top";
  urls[719] = "blog.rabbitwebs.cn";
  urls[720] = "www.dong27th.cn";
  urls[721] = "blog.zhangda.xyz";
  urls[722] = "zyxin.xyz/blog";
  urls[723] = "bugcoder.gq";
  urls[724] = "9941y.top";
  urls[725] = "www.ccyh.xyz";
  urls[726] = "www.okace.cn";
  urls[727] = "blog.lvbyte.top";
  urls[728] = "202271.xyz";
  urls[729] = "cheapy.top";
  urls[730] = "ichika.cc";
  urls[731] = "www.skyre.cn";
  urls[732] = "blog.jerryz.com.cn";
  urls[733] = "suemor.com";
  urls[734] = "letanml.xyz";
  urls[735] = "lorre.top";
  urls[736] = "jiyu134.top";
  urls[737] = "rl1.cc";
  urls[738] = "wanyijizi.com";
  urls[739] = "blog.zekun.fun";
  urls[740] = "ley.best";
  urls[741] = "ayu.land";
  urls[742] = "blog.moyuql.top";
  urls[743] = "blog.shineyu.cn";
  urls[744] = "idealistyu.github.io";
  urls[745] = "www.wellobserve.com";
  urls[746] = "moyude.ren";
  urls[747] = "blog.chaunceychi.fun";
  urls[748] = "blog.1703.site";
  urls[749] = "xyhelper.top";
  urls[750] = "blog.chrison.cn";
  urls[751] = "www.fish9.cn";
  urls[752] = "leonis.cc"
  urls[753] = "blog.pylogmon.com"
  urls[754] = "ezgx.site"

  urls[urls.length] = "https://github.com/travellings-link/travellings";

  // 去除 null ，以及拼接 https://
  urls = urls
    .filter((url) => url)
    .map((url) => (reg.test(url) ? url : https + url + suffix));

  if (document.referrer) {
    const origin = new URL(document.referrer).origin;
    if (urls.includes(origin)) {
      urls.splice(urls.indexOf(origin), 1);
    }
  }

  const index = Math.floor(Math.random() * urls.length);
  window.location = urls[index];
}
