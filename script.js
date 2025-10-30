// 配置
const CONFIG = {
    placeholderImage: 'https://pica.zhimg.com/80/v2-a80d940dc530e773c7db1da34f83b779_720w.webp?source=d16d100b',
    defaultImage: 'https://picx.zhimg.com/80/v2-05e3bd539ad673a26174010877b81a49_720w.webp?source=d16d100b',
    avatarCount: 0, // 头像图片数量（动态计算）
    wallpaperCount: 20, // 壁纸图片数量
    lazyLoadThreshold: 100, // 懒加载阈值（像素）
    
    // 页面头图配置
    headerImages: {
        avatars: 'https://gd-hbimg.huaban.com/0e538c9b4d6c07c3cefcc378e8c8e9272525871c7e6f1-tp28f8_fw1200', // 头像页面头图链接
        wallpapers: 'https://gd-hbimg.huaban.com/0e538c9b4d6c07c3cefcc378e8c8e9272525871c7e6f1-tp28f8_fw1200' // 壁纸页面头图链接
    },
    
    // 自定义头像图片链接数组（替换这里的链接）
    customAvatars: [
        // 在这里添加你的头像图片链接
        // 示例：'https://example.com/avatar1.jpg',
        'https://picx.zhimg.com/v2-da775ea6033973cbc4ae887baea29f41_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-7c65a5287c8a2a5942501ea8d7474937_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-84737694e781920c8390e20f99a06821_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-30dbaf1155b2ae73c6c63ecd8441e24d_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-c1a7441b4308d739b2fd2fd14c780409_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-83955c7a49a2b6fe780c1184fca117b3_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-d42dcaf84188791d30303d27ee41c672_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-67ee4beb2e290703b4e1f169b1b9b202_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-ce2a0e851dfcb18bd3683e732c086f4d_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-71bb92498d1266bce781df5bc982d731_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-ee5059cf40035b98f68119291c41e2f3_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-e4ee23c3173ac91c11c96018d90fa8f0_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-dc97f1a7723dc6f9e6c476fa447886bd_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-30fadbdb32758fc86863bccd205a9a93_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-aa91cb35b1b7a2ccddb6fdf12dcc4bec_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-49a181fde3e5dc08fb2ab5de26a7bc0b_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-7196bcbc81b12a90ea7be2fe8c646ec6_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-ff49e93be3ed507177f111f0b0650b90_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-8465bce99da17957a9c252b8a13f34d0_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-95ae68c9c1c4d9d8081655449669dcd9_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-bdf36e60f4a9c302bc638d18e3efbb32_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-28f7096643151ce77ea6ebcc09317a4e_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-4a065e55257cc4c51ebc498efcfcee58_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-62c44d6fdfa10632687b762c159d65ed_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-618eabc84d27c84d33f9c61beb9dff0c_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-36e1413bac6928640b270aaf455c49ae_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-e09628cdf4113dd822003d209c56a7ae_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-8deb1d56f8d5eaa1ab429bfc2c217557_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-bdfb5088fa0d5b8c686a558e7c8d0133_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-73c85de33a6456b48900e4f5141d820c_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-acdc33fffa26e5ad51b87336ebdceb0f_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-d41256e84dad7760af30a97d370ec2e1_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-039fd356b2f9dc4b4594d87d5c021646_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-12cec347407141e8a60c230f1cdd1a70_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-83c9ab450b192f6a7b7be96708cbcce1_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-e44ce78f40e89c3bc28180ee514a6d00_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-8ab364f336b3391bbed6f8f1e075b38a_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-c624dce2d3cc4054bb3d6285684b1cfa_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-03e081d38fd15a2fc2142b80ad6ab8d7_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-e27b22d6af417f3738c442edd0bd96e7_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-e1d387f7216baf128575f39290d00eca_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-4da722a7369b15f4666b15108dd93905_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-fb0a3b47971d89dfd2e2e840aff306f1_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-c0d36c37fe20084ee0f7d9d82027d58c_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-4473cd9058d4417ceccb718bfad7ddc7_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-04bf1689e0f291241caae8036677af87_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-473620a9402b0bd2241148ecf77ebc1e_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-97357a8724dc47d1b9897b595ca1c49f_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-9a26eae502897c990c25dda40939c32a_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-e80a5e6b1c65679b2dc866105d1ed568_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-a635286249757905a847c262f05ccc76_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-5fc5c7a660e912fba83f375d8c8ebc92_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-41810ff72074544276fa495205382f11_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-3ee54e17bc3582596606e163e32ada83_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-1ccbb4bc94e555cc28d904c01cdeb25d_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-a8429768b06619bad3503838b0d4d61e_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-acda81066c9369c904ea3354a8d2d2ea_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-295075030cfd3ee53f07be0e976ff28e_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-23d91f7d72ad415bc85311ef6ebdd3fd_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-88bc2959f4317a4ac0d3f0fa8c10d68f_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-7614f9697c1619a1bc44caba26788ee0_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-6f3f246b74a713460e3e1bea4824508c_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-32e7f1af428f58feb889c70c64272720_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-44f6f25f9debbfd9fc3c3c815190997d_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-b57559f1dee94ebec5ae0e71c500662d_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-7c34c511e6085b39fa94b5a779136faa_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-2b128ef092d576d130b99cd1c9a56d7f_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-f0c3069c61b8496cbb4e01a5fb32439f_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-ad871c87bca78aa14177bba2ab63f775_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-5425c266872a7350758a196867c95f28_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-91048d76e1eff51ec82139dfeebece2f_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-e0ac23083d1d7617d82d79bc14cc5ebc_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-2831ed4cbb92287a4a26be9b529dffc7_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-deaf82d50d01b6aed1b019aca7e8f5cf_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-f8577f3cdd08851c0955d09590153ee6_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-fb7cffd3c4ce205e0eb58ad33e840056_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-3326b225b8f8a7ca6ceab37da0326cb5_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-fe17d6e04bdaa2cea870916f2dcebe4b_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-219faa77bc0992ed312dea2bdeef6169_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-a483786171cf4785f12493299cf23a5c_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-2acb281c6b87c859b7aa30f53d983e87_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-297ef08470b9dbac7d9528abbc7635fc_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-181e83bfa9b405599ee7c82d13a27270_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-c82bec05a19e788fe1523fbe2c6fc14a_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-b31e0e507974c483a78f13be2c8a37bf_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-2d4ebf4a6d79666c7f8f5c6528c96743_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-0f623f94d4f2f6639f95cad1f48d5888_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-fe0c6be693b93270d8ddd1afaeb62208_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-442758eae1f5b9d0bb46680c3e728f86_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-57a91dd48efc695917874896c0480eab_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-422f0d10fcafe7913e5bb11eeb05deb8_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-fcedc5d34d90ec53ad6d15a533eac70f_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-9257de778681c05f5db308b87ec3e326_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-6b2fe35d77cd98d884ebfec5ae27ea91_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-efd7a65aba30ade91a69ed67a5b79219_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-5596b4b29d137835ab8cd18793e049bf_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-8d73bbb9a5cffdf6add057adfd9b3170_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-3bb81a8f9d0db4850294eeaafe86bfdc_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-3da05f8f2feb947fbd8d3cbb7841bbac_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-8711b409ba5ac0fcedd1e6d2acec29bc_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-00d6352b7aa16bea6c9c84a5ced9ab34_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-9e476847727b337f6d844e79d90dbeea_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-96a73d38bdc3e230b6093f876f2a6147_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-54a27870b40a0407b2e4b2583a90d7aa_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-362a73777217871b67ae379f77c27a2b_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-0d069ff022c186138d0b0fcb083adaee_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-35053da5ea3262195f59911e9fe3bc63_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-c5cb02b8dfdea67f0924d7782ba2d1db_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-83a11b54322aef81015554ca0d36f1e6_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-6d542c2e75b879850312032bcd4ec95d_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-b8469cb9e692d2b6333c73648bd91a6e_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-45e71a1ea781f2b5f58fa1720e741123_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-e2bcf11428249390ebf66cc174e56f3d_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-348dcb15b1f820850615eddae64bf11b_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-7ef0907f4f08026bcbb63c3399ce36b1_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-fd4d439585c7837cfc73c5178ca95a1b_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-759dda9ed9d4cea9711d318cbfacc664_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-628b1ee1e9b0bb1bda34ca5c71158d6a_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-7e3f7a4e88b9507ea6494d00bee6ce52_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-870cea0211f7e3c14f24ca7cfbf2b2e0_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-71329d1bca6a40b3d9b9c7761faa214a_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-f10bc14f9d212f412b2bc490d8aca8d9_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-514c876b315a806edb9f72957da9b09d_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-6a0004bb71c2caa5c8cf30bfcacf8bf0_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-2702198a3c08550c312af1c68ed5bd2d_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-a21bd25f459c0801da34a32c7d0b061e_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-38715d4ba812025c495c06c68ffe5443_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-3e6929389e2132042e18e3e52aec1653_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-138c9cd1ad92d41ab6dc777d3da68ed6_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-e8016c03cd0e6bd3d8b8d33f823f5b39_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-95422b6c47bbf041a98340f38556c5a2_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-3cb8c469a392ad2478fd8d97e0d9518c_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-7991db8697b0b2fe8250fad68a2870e6_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-1e633dc34fa43140950ac0b93d6e18d9_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-9459d010e84c8441f82974170415767d_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-6c00c05852ab6dd3781e974920299b0a_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-107d43681ca241dc3f0adca62bf144cf_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-4b3beec6f0ead9eb0cf91a9ee0b98db1_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-b211979cbc80af4a4654efc0e07719a3_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-f8545e320cfa9bc3511e8674a1fddc60_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-7f4c177dcff0d618e9409c719343db33_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-6a938c1c1f592a4161d008afb7b264f2_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-238b24eef92754f1bb0d92af7799ce8a_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-342e7f2ae54e993edfc0553da8d6201c_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-647d4d31818c4c06da3c633b84d48f0f_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-0f2513034e4ca468a42a60215a84f964_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-c9d4a769eafba300d327607e476617dc_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-489ed4d084416508b4dfd6e9982c6a15_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-38fe20491605df257d38b8b3101f0a0c_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-7f79f8b8b1cf7d70458a32a69eec3235_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-69d0d90c369b49373d37d6f4872fbab9_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-2d88e40496dfb6bf6e6c54d339109627_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-0b208d0f8981da193bae3910bb4a3f67_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-ef0762fd3c1bf6946e48a73c91d91e69_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-2578d30d1983ccd321ffb74c98769e2c_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-e4e96db10ba9edb92b14e16a9411427e_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-4d9c1fedcd0520d8e9f3940b9898e4a3_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-43bf0575d096a4eaaf5e40b408debde4_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-0c913b92b73d76dc65354e00f641ff31_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-78a5321a22a7687e53e28a4da4f96d60_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-78e4982ac6d33983a4a717432812f1df_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-7a2fba713f0a46cfebfb0f2f99effb7c_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-12f5961b7e1e4c5404331deef508f883_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-cf9dad01b766b2aaad3a140deffc5697_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-5f079090d63d76bb537a3590b318b496_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-653e3358cee95f616cfa9bceff0135c9_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-0efe08139608c8ece067a326af0fa121_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-d07317a8021d640bad7397ccbbe186b3_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-cc2bb35faaeb2ded76c920432d0001fc_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-04255bd8e41cb850bd9f32912229f3b0_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-007a17adc9c7e780c7e961f3d9858ee1_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-ed5d7d0428156f2f50a9c53998c3cc7a_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-7f0e714579b6d4431c8cb8a9c96256b7_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-50cf2a9541c0420ec242038bc713587a_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-1c8374b7a1289475c197ad9c1957fc48_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-9f1be81cbee8a52091f22997967cc51e_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-ee712b773d9c1f9bc362fffeb483535f_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-ff2204ece24903b3335caeaa390e6081_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-c76a3f757582b0924795c81ddb8a7eb1_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-2404cd7d9d96ace83bd6ff98a7471b3f_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-c604534b49dce4431a05b041e213a7b0_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-b2b826b2200586a42d2150d6544ece76_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-b782ef6de274e153d289894e0d6fdd1a_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-6c0bf4ba9871dac7572c73f982a0369c_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-bf775d623a3add98cd123d41d479ed62_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-21671e680b1ef9f133c1afa7da0370f9_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-ec0c918b57a8245cb83b416bc511d600_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-2d107642a7dc50b174a2ce838d5a3a9d_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-66915c843956b2d41102da82199e9451_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-5961b6a25280ea408430d0125f6be5c0_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-06e9bf9d4a7462e4cb702f69b73098df_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-fa54d644691f8cfa45c62e7036942742_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-77e22d2e5c22dc2db7f9e085269b4ee0_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-064d391aad7beea128fdda3de4a02515_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-894cb2fba439963c3420de3cb946a7da_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-347ca570ff8f69245f9c18618b2f28de_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-14c6137927d5d88978c42c3e1e8978bc_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-58cc0b26af9bb9bfd06fb85f291ea8da_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-0a71a4371381464e8e832c2a7b281bb0_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-98dd6979836e25851de9e208088be4f4_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-1fc3e738743d6c8f5803d341ef0408f9_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-7c7ca56cb6583d2a724737c8f6d079f0_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-9d0335ea3cef20ef090b2cfa9dc4b4e3_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-93f67ab85c127ebc9b8f45c4cbc58d42_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-7b7ab5f66082fc77c617a8c0b2ba8787_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-59fc93b2759f315e07e2dd16751422c4_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-255a5654af627d18b5f75a31adbd7f35_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-d6d2c796e9dd01e9b3f6ddf1f91e4316_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-977e05fd309a5c479976534981b484a4_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-05e0c0cc4fa7fd8ebb77d60943474af4_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-1771c672078e62b5c07d3eb4fa180c29_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-23f31391c24661a5db16e154807b055f_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-f929131838eefdc2207e23474b868537_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-2464ce8f5601d257f2839a663dc8b423_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-884d18edc988c5c9809736fdba562ca2_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-ce9f8678597c988bc94425a3bd3fb55f_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-c4780a093c294acd5b1e4db43c46aca7_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-e47cb533fb713e096d1a8d804010e92a_r.jpg?source=1def8aca',
'https://pica.zhimg.com/v2-c6e6fcd902b202fb8d339349a5211e35_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-dd9ffbc4e519691973c736d2a81c0b4c_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-5771cb86e9ce0541393a388ff8e4772c_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-41eb9c06b678fcfab3be343b9ed98cfc_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-f5b4be77b025c0438c2a5489d77fc807_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-6dc37ac9c3f0c0073a797ab59b679fd1_r.jpg?source=1def8aca',// 示例：'https://example.com/avatar2.jpg',
    ],
    
    // 自定义壁纸图片链接数组（替换这里的链接）
    customWallpapers: [
        // 在这里添加你的壁纸图片链接
        // 示例：'https://example.com/wallpaper1.jpg',
        // 示例：'https://example.com/wallpaper2.jpg',
    ]
};

// 页面状态
let currentPage = 'avatars-page';
let avatarImagesLoaded = false;
let wallpaperImagesLoaded = false;

// DOM 元素
const tabItems = document.querySelectorAll('.tab-item');
const pages = document.querySelectorAll('.page');
const avatarsContainer = document.getElementById('avatars-container');
const wallpapersContainer = document.getElementById('wallpapers-container');
const avatarCountElement = document.getElementById('avatar-count');
const wallpaperCountElement = document.getElementById('wallpaper-count');
const aboutLogo = document.getElementById('about-logo');
const aboutModal = document.getElementById('about-modal');
const closeModal = document.querySelector('.close-modal');
const currentPositionElement = document.getElementById('current-position');
const totalLengthElement = document.getElementById('total-length');
const overlapImage = document.getElementById('overlap-image');
const progressThumb = document.getElementById('progress-thumb');
const endThumb = document.querySelector('.end-thumb');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    initRouter();
    initProgressBar();
    initLazyLoad();
    initAboutModal();
    loadInitialImages();
    
    // 初始显示当前页面的标题或头图
    initHeaderDisplay();
    
    // 初始更新页面长度
    updatePageLength();
});

// 初始化进度条
function initProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const progressFill = document.getElementById('progress-fill');
    const progressThumb = document.getElementById('progress-thumb');
    
    let isDragging = false;
    
    // 更新进度条位置
function updateProgressBar() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    
    progressFill.style.width = progress + '%';
    progressThumb.style.left = progress + '%';
    
    // 更新页面长度
    updatePageLength();
}
    
    // 点击进度条跳转
    function handleProgressBarClick(e) {
        const rect = progressBar.getBoundingClientRect();
        const clickPosition = e.clientX - rect.left;
        const progress = (clickPosition / rect.width) * 100;
        
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const targetScroll = (progress / 100) * scrollHeight;
        
        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
    }
    
    // 拖拽进度条
    function startDrag(e) {
        isDragging = true;
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('touchmove', handleDrag);
        document.addEventListener('touchend', stopDrag);
        handleDrag(e);
    }
    
    function handleDrag(e) {
        if (!isDragging) return;
        
        const rect = progressBar.getBoundingClientRect();
        let dragPosition = e.clientX || (e.touches && e.touches[0].clientX) || 0;
        dragPosition = dragPosition - rect.left;
        dragPosition = Math.max(0, Math.min(rect.width, dragPosition));
        const progress = (dragPosition / rect.width) * 100;
        
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const targetScroll = (progress / 100) * scrollHeight;
        
        window.scrollTo({
            top: targetScroll,
            behavior: 'auto'
        });
    }
    
    function stopDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', handleDrag);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchmove', handleDrag);
        document.removeEventListener('touchend', stopDrag);
    }
    
    // 绑定事件
    progressBar.addEventListener('click', handleProgressBarClick);
    progressBar.addEventListener('touchstart', handleProgressBarClick, { passive: true });
    progressThumb.addEventListener('mousedown', startDrag);
    progressThumb.addEventListener('touchstart', startDrag, { passive: true });
    
    // 监听滚动事件
    window.addEventListener('scroll', updateProgressBar);
    
    // 初始更新
    updateProgressBar();
}

// SPA路由初始化
function initRouter() {
    // 监听hash变化（浏览器前进后退）
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.replace('#', '');
        if (hash && (hash === 'avatars-page' || hash === 'wallpapers-page')) {
            switchPage(hash);
        }
    });
    
    // 初始页面根据hash决定
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && (initialHash === 'avatars-page' || initialHash === 'wallpapers-page')) {
        // 如果URL有hash，切换到对应页面
        switchPage(initialHash);
    } else {
        // 默认显示头像页
        currentPage = 'avatars-page';
        // 更新URL
        window.location.hash = 'avatars-page';
    }
}

// 初始化标签页功能
function initTabs() {
    tabItems.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetPage = this.getAttribute('data-page');
            switchPage(targetPage);
        });
    });
}

// 初始化头图显示
function initHeaderDisplay() {
    const currentPage = document.querySelector('.page.active');
    if (!currentPage) return;
    
    const pageId = currentPage.id;
    const headerImageUrl = pageId === 'avatars-page' ? CONFIG.headerImages.avatars : CONFIG.headerImages.wallpapers;
    const headerImage = currentPage.querySelector('.page-header-image');
    const title = currentPage.querySelector('.page-header');
    
    if (headerImageUrl && headerImageUrl.trim() !== '') {
        // 如果有配置头图，显示头图，隐藏标题
        if (headerImage) {
            // 设置头图
            if (!headerImage.querySelector('img')) {
                const img = document.createElement('img');
                img.src = headerImageUrl;
                img.alt = pageId === 'avatars-page' ? '情侣头像分享头图' : '情侣壁纸分享头图';
                img.referrerPolicy = 'no-referrer';
                headerImage.appendChild(img);
            }
            headerImage.style.display = 'block';
            headerImage.style.opacity = '1';
            headerImage.style.transform = 'translateY(0)';
        }
        if (title) {
            title.style.display = 'none';
        }
    } else {
        // 如果没有配置头图，显示标题，隐藏头图
        if (title) {
            title.style.display = 'block';
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }
        if (headerImage) {
            headerImage.style.display = 'none';
        }
    }
}

// 重置图片加载状态
function resetImageLoading() {
    const allImages = document.querySelectorAll('img[data-src]');
    allImages.forEach(img => {
        // 如果图片还在加载状态，重置为占位图
        if (img.hasAttribute('data-src') && img.src !== CONFIG.placeholderImage) {
            img.src = CONFIG.placeholderImage;
            img.classList.add('loading');
        }
    });
}

// 页面切换函数
function switchPage(pageId) {
    // 如果已经是当前页面，不执行切换
    if (currentPage === pageId) return;
    
    // 保存当前页面的滚动位置
    if (currentPage) {
        sessionStorage.setItem(`scrollPos-${currentPage}`, window.scrollY);
    }
    
    // 更新URL hash（模拟路由）
    window.location.hash = pageId;
    
    // 更新标签栏激活状态
    tabItems.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-page') === pageId) {
            tab.classList.add('active');
        }
    });
    
    // 更新标签栏的data-active-page属性（控制共用指示条）
    const tabBar = document.querySelector('.tab-bar');
    tabBar.setAttribute('data-active-page', pageId);
    
    // 获取页面元素
    const currentActivePage = document.querySelector('.page.active');
    const targetPage = document.getElementById(pageId);
    
    // 获取标题和头图元素
    const currentTitle = document.querySelector('.page.active .page-header');
    const currentHeaderImage = document.querySelector('.page.active .page-header-image');
    const targetTitle = targetPage ? targetPage.querySelector('.page-header') : null;
    const targetHeaderImage = targetPage ? targetPage.querySelector('.page-header-image') : null;
    
    if (currentActivePage && targetPage) {
        // 先保存目标页面的滚动位置
        const savedScrollPos = sessionStorage.getItem(`scrollPos-${pageId}`);
        const targetScrollPos = savedScrollPos ? parseInt(savedScrollPos) : 0;
        
        // 开始切换动画
        currentActivePage.classList.remove('active');
        
        // 隐藏当前标题和头图（如果有）
        if (currentTitle) {
            currentTitle.style.opacity = '0';
            currentTitle.style.transform = 'translateY(-20px)';
        }
        if (currentHeaderImage) {
            currentHeaderImage.style.opacity = '0';
            currentHeaderImage.style.transform = 'translateY(-20px)';
        }
        
        // 等待动画完成后再显示新页面
        setTimeout(() => {
            // 显示新页面
            targetPage.classList.add('active');
            
            // 根据配置显示目标页面的标题或头图
            const headerImageUrl = pageId === 'avatars-page' ? CONFIG.headerImages.avatars : CONFIG.headerImages.wallpapers;
            
            if (headerImageUrl && headerImageUrl.trim() !== '') {
                // 如果有配置头图，显示头图，隐藏标题
                if (targetHeaderImage) {
                    // 设置头图
                    if (!targetHeaderImage.querySelector('img')) {
                    const img = document.createElement('img');
                    img.src = headerImageUrl;
                    img.alt = pageId === 'avatars-page' ? '情侣头像分享头图' : '情侣壁纸分享头图';
                    img.referrerPolicy = 'no-referrer';
                    targetHeaderImage.appendChild(img);
                }
                    targetHeaderImage.style.display = 'block';
                    targetHeaderImage.style.opacity = '1';
                    targetHeaderImage.style.transform = 'translateY(0)';
                }
                if (targetTitle) {
                    targetTitle.style.display = 'none';
                }
            } else {
                // 如果没有配置头图，显示标题，隐藏头图
                if (targetTitle) {
                    targetTitle.style.display = 'block';
                    targetTitle.style.opacity = '1';
                    targetTitle.style.transform = 'translateY(0)';
                }
                if (targetHeaderImage) {
                    targetHeaderImage.style.display = 'none';
                }
            }
            
            // 更新当前页面状态
            currentPage = pageId;
            
            // 重置当前页面的图片加载状态
            resetImageLoading();
            
            // 加载对应页面的图片
            if (pageId === 'avatars-page' && !avatarImagesLoaded) {
                loadAvatarImages();
            } else if (pageId === 'wallpapers-page' && !wallpaperImagesLoaded) {
                loadWallpaperImages();
            }
            
            // 等待页面渲染完成后再恢复滚动位置
            setTimeout(() => {
                // 强制恢复滚动位置
                window.scrollTo(0, targetScrollPos);
                
                // 再次确认滚动位置（防止浏览器自动重置）
                setTimeout(() => {
                    window.scrollTo(0, targetScrollPos);
                    
                    // 初始化懒加载
                    initLazyLoad();
                    
                    // 更新页面长度
                    updatePageLength();
                }, 50);
            }, 100);
        }, 1000); // 等待当前页面淡出动画完成（1秒）
    }
}

// 初始化懒加载
let lazyLoadObserver = null;

function initLazyLoad() {
    // 如果已经存在观察器，先断开所有观察
    if (lazyLoadObserver) {
        lazyLoadObserver.disconnect();
    }
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    lazyLoadObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // 确保图片还没有加载
                if (img.hasAttribute('data-src')) {
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    img.classList.remove('loading');
                    lazyLoadObserver.unobserve(img);
                }
            }
        });
    }, {
        rootMargin: `${CONFIG.lazyLoadThreshold}px`
    });
    
    lazyImages.forEach(img => {
        lazyLoadObserver.observe(img);
    });
}

// 加载初始图片
function loadInitialImages() {
    loadAvatarImages();
}

// 初始化关于页面模态框
function initAboutModal() {
    // 点击logo打开关于页面
    aboutLogo.addEventListener('click', function() {
        aboutModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // 禁止背景滚动
    });
    
    // 点击关闭按钮
    closeModal.addEventListener('click', function() {
        aboutModal.style.display = 'none';
        document.body.style.overflow = ''; // 恢复背景滚动
    });
    
    // 点击模态框背景关闭
    aboutModal.addEventListener('click', function(e) {
        if (e.target === aboutModal) {
            aboutModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && aboutModal.style.display === 'block') {
            aboutModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

// 更新图片数量统计
function updateImageCounts() {
    const avatarImages = CONFIG.customAvatars.length > 0 ? CONFIG.customAvatars : [CONFIG.defaultImage];
    const wallpaperImages = CONFIG.customWallpapers.length > 0 ? CONFIG.customWallpapers : [CONFIG.defaultImage];
    
    // 动态计算实际显示的图片数量
    const avatarCount = avatarImages.length;
    const wallpaperCount = wallpaperImages.length;
    
    // 更新显示
    avatarCountElement.textContent = avatarCount;
    wallpaperCountElement.textContent = wallpaperCount;
    
    // 更新页面长度
    updatePageLength();
}

// 更新页面长度显示
function updatePageLength() {
    const currentContainer = currentPage === 'avatars-page' ? avatarsContainer : wallpapersContainer;
    const scrollHeight = currentContainer.scrollHeight;
    const scrollTop = window.scrollY;
    
    // 更新当前位置（从页面开始的距离）
    currentPositionElement.textContent = Math.round(scrollTop);
    
    // 更新总长度
    totalLengthElement.textContent = Math.round(scrollHeight);
    
    // 检测爱心是否重叠
    checkHeartsOverlap();
}

// 检测爱心是否重叠
function checkHeartsOverlap() {
    if (!progressThumb || !endThumb) return;
    
    const progressRect = progressThumb.getBoundingClientRect();
    const endRect = endThumb.getBoundingClientRect();
    
    // 检测两个爱心是否重叠
    const isOverlapping = !(progressRect.right < endRect.left || 
                           progressRect.left > endRect.right || 
                           progressRect.bottom < endRect.top || 
                           progressRect.top > endRect.bottom);
    
    // 如果重叠，显示图片；否则隐藏
    if (isOverlapping) {
        overlapImage.style.display = 'flex';
    } else {
        overlapImage.style.display = 'none';
    }
}

// 加载头像图片
function loadAvatarImages() {
    if (avatarImagesLoaded) return;
    
    // 优先使用自定义头像图片
    const avatarImages = CONFIG.customAvatars.length > 0 ? CONFIG.customAvatars : [CONFIG.defaultImage];
    
    // 动态计算要加载的图片数量：使用自定义图片数组的长度，但不超过实际图片数量
    const imageCount = Math.min(CONFIG.avatarCount, avatarImages.length);
    
    for (let i = 0; i < imageCount; i++) {
        const imageUrl = avatarImages[i]; // 直接使用数组索引，不重复加载
        const imgItem = createImageItem(imageUrl, true);
        avatarsContainer.appendChild(imgItem);
    }
    
    avatarImagesLoaded = true;
    initLazyLoad();
    updateImageCounts(); // 更新统计
}

// 加载壁纸图片
function loadWallpaperImages() {
    if (wallpaperImagesLoaded) return;
    
    // 优先使用自定义壁纸图片
    const wallpaperImages = CONFIG.customWallpapers.length > 0 ? CONFIG.customWallpapers : [CONFIG.defaultImage];
    
    // 动态计算要加载的图片数量：使用自定义图片数组的长度，但不超过实际图片数量
    const imageCount = Math.min(CONFIG.wallpaperCount, wallpaperImages.length);
    
    for (let i = 0; i < imageCount; i++) {
        const imageUrl = wallpaperImages[i]; // 直接使用数组索引，不重复加载
        const imgItem = createImageItem(imageUrl, false);
        wallpapersContainer.appendChild(imgItem);
    }
    
    wallpaperImagesLoaded = true;
    initLazyLoad();
    updateImageCounts(); // 更新统计
}

// 创建图片项
function createImageItem(imageUrl, isAvatar) {
    const item = document.createElement('div');
    item.className = 'waterfall-item';
    
    const img = document.createElement('img');
    img.setAttribute('data-src', imageUrl);
    img.src = CONFIG.placeholderImage;
    img.alt = isAvatar ? '情侣头像' : '情侣壁纸';
    img.classList.add('loading');
    
    // 添加加载错误处理
    img.addEventListener('error', function() {
        // 如果加载失败，但还有data-src属性，说明是懒加载失败
        if (this.hasAttribute('data-src')) {
            // 延迟重试加载
            setTimeout(() => {
                if (this.hasAttribute('data-src')) {
                    this.src = this.getAttribute('data-src');
                }
            }, 1000);
        } else {
            // 如果已经移除了data-src但加载失败，显示占位图
            this.src = CONFIG.placeholderImage;
            this.classList.remove('loading');
        }
    });
    
    // 添加加载完成处理
    img.addEventListener('load', function() {
        this.classList.remove('loading');
    });
    
    // 添加鼠标左键点击放大图片功能
    img.addEventListener('click', function(e) {
        // 只响应鼠标左键点击
        if (e.button === 0) {
            // 阻止默认的链接跳转行为
            e.preventDefault();
            e.stopPropagation();
            
            // 使用data-src属性获取原始高质量图片URL
            const originalImageUrl = this.getAttribute('data-src') || this.src;
            showImageLightbox(originalImageUrl, isAvatar);
        }
    });
    
    item.appendChild(img);
    return item;
}

// 滚动加载更多（可选功能）
let isLoadingMore = false;

window.addEventListener('scroll', function() {
    if (isLoadingMore) return;
    
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    
    // 距离底部200px时加载更多
    if (scrollTop + clientHeight >= scrollHeight - 200) {
        loadMoreImages();
    }
});

// 加载更多图片
function loadMoreImages() {
    isLoadingMore = true;
    
    setTimeout(() => {
        const container = currentPage === 'avatars-page' ? avatarsContainer : wallpapersContainer;
        const isAvatar = currentPage === 'avatars-page';
        const count = isAvatar ? 10 : 5;
        
        // 获取对应的自定义图片数组
        const customImages = isAvatar ? CONFIG.customAvatars : CONFIG.customWallpapers;
        const images = customImages.length > 0 ? customImages : [CONFIG.defaultImage];
        
        // 计算当前已加载的图片数量
        const currentImageCount = container.querySelectorAll('.waterfall-item').length;
        
        // 计算从哪个索引开始加载新图片
        const startIndex = currentImageCount;
        
        // 确保不超过图片数组长度
        const maxImagesToLoad = Math.min(count, images.length - startIndex);
        
        for (let i = 0; i < maxImagesToLoad; i++) {
            const imageUrl = images[startIndex + i]; // 加载新的图片，不重复
            const imgItem = createImageItem(imageUrl, isAvatar);
            container.appendChild(imgItem);
        }
        
        initLazyLoad();
        isLoadingMore = false;
    }, 500);
}

// 添加键盘导航支持
document.addEventListener('keydown', function(e) {
    // 如果灯箱打开，不处理页面切换
    if (document.getElementById('image-lightbox')) {
        return;
    }
    
    if (e.key === 'ArrowLeft') {
        // 切换到头像页
        switchPage('avatars-page');
    } else if (e.key === 'ArrowRight') {
        // 切换到壁纸页
        switchPage('wallpapers-page');
    }
});

// 页面加载完成后设置默认激活状态
window.addEventListener('load', function() {
    document.querySelector('.tab-item[data-page="avatars-page"]').classList.add('active');
});

// 显示图片灯箱功能
function showImageLightbox(imageUrl, isAvatar) {
    console.log('打开灯箱，图片URL:', imageUrl);
    
    // 获取当前页面的所有图片 - 修复选择器错误
    const currentPageImages = document.querySelectorAll('.waterfall-item img');
    console.log('当前页面图片数量:', currentPageImages.length);
    
    let currentImageIndex = -1;
    
    // 找到当前点击的图片索引
    for (let i = 0; i < currentPageImages.length; i++) {
        const imgSrc = currentPageImages[i].getAttribute('data-src') || currentPageImages[i].src;
        console.log('图片', i, 'URL:', imgSrc);
        if (imgSrc === imageUrl) {
            currentImageIndex = i;
            console.log('找到当前图片索引:', currentImageIndex);
            break;
        }
    }
    
    // 创建灯箱容器
    const lightbox = document.createElement('div');
    lightbox.id = 'image-lightbox';
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    // 创建放大图片
    const enlargedImg = document.createElement('img');
    enlargedImg.src = imageUrl;
    enlargedImg.style.cssText = `
        max-width: 90vw;
        max-height: 90vh;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        transform: scale(0.8);
        transition: transform 0.3s ease;
        cursor: default;
    `;
    
    // 创建底部提示和切换按钮
    const hintContainer = document.createElement('div');
    hintContainer.style.cssText = `
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 20px;
        background: rgba(0, 0, 0, 0.5);
        padding: 8px 16px;
        border-radius: 20px;
        backdrop-filter: blur(10px);
    `;
    
    // 上一张按钮
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '← 上一张';
    prevButton.style.cssText = `
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        transition: background 0.2s;
    `;
    prevButton.onmouseover = () => prevButton.style.background = 'rgba(255, 255, 255, 0.3)';
    prevButton.onmouseout = () => prevButton.style.background = 'rgba(255, 255, 255, 0.2)';
    
    // 下一张按钮
    const nextButton = document.createElement('button');
    nextButton.innerHTML = '下一张 →';
    nextButton.style.cssText = `
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        transition: background 0.2s;
    `;
    nextButton.onmouseover = () => nextButton.style.background = 'rgba(255, 255, 255, 0.3)';
    nextButton.onmouseout = () => nextButton.style.background = 'rgba(255, 255, 255, 0.2)';
    
    // 提示文字
    const hintText = document.createElement('div');
    hintText.textContent = '键盘方向键/左右滑动切换';
    hintText.style.cssText = `
        color: rgba(255, 255, 255, 0.8);
        font-size: 14px;
        pointer-events: none;
    `;
    
    // 按钮点击事件
    prevButton.addEventListener('click', function(e) {
        e.stopPropagation();
        // 从lightbox对象获取最新的图片索引和列表
        let currentIndex = lightbox._currentIndex !== undefined ? lightbox._currentIndex : currentImageIndex;
        let imagesList = lightbox._images !== undefined ? lightbox._images : currentPageImages;
        
        if (currentIndex > 0) {
            currentIndex--;
            lightbox._currentIndex = currentIndex;
            const prevImgSrc = imagesList[currentIndex].getAttribute('data-src') || imagesList[currentIndex].src;
            switchImage(enlargedImg, prevImgSrc);
        }
    });
    
    nextButton.addEventListener('click', function(e) {
        e.stopPropagation();
        // 从lightbox对象获取最新的图片索引和列表
        let currentIndex = lightbox._currentIndex !== undefined ? lightbox._currentIndex : currentImageIndex;
        let imagesList = lightbox._images !== undefined ? lightbox._images : currentPageImages;
        
        if (currentIndex < imagesList.length - 1) {
            currentIndex++;
            lightbox._currentIndex = currentIndex;
            const nextImgSrc = imagesList[currentIndex].getAttribute('data-src') || imagesList[currentIndex].src;
            switchImage(enlargedImg, nextImgSrc);
        } else {
            // 如果是最后一张图片，自动加载更多图片
            loadMoreImagesForLightbox(lightbox, enlargedImg, currentIndex, imagesList, isAvatar);
        }
    });
    
    // 添加到灯箱
    hintContainer.appendChild(prevButton);
    hintContainer.appendChild(hintText);
    hintContainer.appendChild(nextButton);
    
    lightbox.appendChild(enlargedImg);
    lightbox.appendChild(hintContainer);
    document.body.appendChild(lightbox);
    
    // 禁止页面滚动
    document.body.style.overflow = 'hidden';
    
    // 显示动画
    setTimeout(() => {
        lightbox.style.opacity = '1';
        enlargedImg.style.transform = 'scale(1)';
    }, 10);
    
    // 点击任意位置关闭灯箱
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target === enlargedImg) {
            closeLightbox(lightbox);
        }
    });
    
    // 键盘事件处理
    function handleKeydown(e) {
        console.log('灯箱键盘事件:', e.key);
        
        // 从lightbox对象获取最新的图片索引和列表
        let currentIndex = lightbox._currentIndex !== undefined ? lightbox._currentIndex : currentImageIndex;
        let imagesList = lightbox._images !== undefined ? lightbox._images : currentPageImages;
        
        if (e.key === 'Escape') {
            console.log('关闭灯箱');
            closeLightbox(lightbox);
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            // 下一张图片
            console.log('切换到下一张图片');
            e.preventDefault();
            e.stopPropagation();
            if (currentIndex < imagesList.length - 1) {
                currentIndex++;
                lightbox._currentIndex = currentIndex;
                const nextImgSrc = imagesList[currentIndex].getAttribute('data-src') || imagesList[currentIndex].src;
                console.log('下一张图片URL:', nextImgSrc);
                switchImage(enlargedImg, nextImgSrc);
            } else {
                console.log('已经是最后一张图片，自动加载更多');
                // 如果是最后一张图片，自动加载更多图片
                loadMoreImagesForLightbox(lightbox, enlargedImg, currentIndex, imagesList, isAvatar);
            }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            // 上一张图片
            console.log('切换到上一张图片');
            e.preventDefault();
            e.stopPropagation();
            if (currentIndex > 0) {
                currentIndex--;
                lightbox._currentIndex = currentIndex;
                const prevImgSrc = imagesList[currentIndex].getAttribute('data-src') || imagesList[currentIndex].src;
                console.log('上一张图片URL:', prevImgSrc);
                switchImage(enlargedImg, prevImgSrc);
            } else {
                console.log('已经是第一张图片');
            }
        }
    }
    
    // 保存事件监听器引用以便后续移除
    lightbox._keydownHandler = handleKeydown;
    lightbox._currentIndex = currentImageIndex;
    lightbox._images = currentPageImages;
    
    document.addEventListener('keydown', handleKeydown);
    
    // 移动端触摸滑动切换功能
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    
    function handleTouchStart(e) {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }
    
    function handleTouchEnd(e) {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        
        // 计算滑动距离
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        // 只处理水平滑动，且滑动距离大于30px
        if (Math.abs(deltaX) > 30 && Math.abs(deltaX) > Math.abs(deltaY)) {
            e.preventDefault();
            e.stopPropagation();
            
            // 从lightbox对象获取最新的图片索引和列表
            let currentIndex = lightbox._currentIndex !== undefined ? lightbox._currentIndex : currentImageIndex;
            let imagesList = lightbox._images !== undefined ? lightbox._images : currentPageImages;
            
            if (deltaX < 0) {
                // 向左滑动 - 下一张
                console.log('向左滑动，切换到下一张图片');
                if (currentIndex < imagesList.length - 1) {
                    currentIndex++;
                    lightbox._currentIndex = currentIndex;
                    const nextImgSrc = imagesList[currentIndex].getAttribute('data-src') || imagesList[currentIndex].src;
                    console.log('下一张图片URL:', nextImgSrc);
                    switchImage(enlargedImg, nextImgSrc);
                } else {
                    console.log('已经是最后一张图片，自动加载更多');
                    // 如果是最后一张图片，自动加载更多图片
                    loadMoreImagesForLightbox(lightbox, enlargedImg, currentIndex, imagesList, isAvatar);
                }
            } else {
                // 向右滑动 - 上一张
                console.log('向右滑动，切换到上一张图片');
                if (currentIndex > 0) {
                    currentIndex--;
                    lightbox._currentIndex = currentIndex;
                    const prevImgSrc = imagesList[currentIndex].getAttribute('data-src') || imagesList[currentIndex].src;
                    console.log('上一张图片URL:', prevImgSrc);
                    switchImage(enlargedImg, prevImgSrc);
                } else {
                    console.log('已经是第一张图片');
                }
            }
        }
    }
    
    // 添加触摸事件监听器
    lightbox.addEventListener('touchstart', handleTouchStart, { passive: true });
    lightbox.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    // 保存触摸事件监听器引用以便后续移除
    lightbox._touchStartHandler = handleTouchStart;
    lightbox._touchEndHandler = handleTouchEnd;
}

// 切换图片
function switchImage(imgElement, newImageUrl) {
    // 添加淡出效果
    imgElement.style.opacity = '0.5';
    imgElement.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        // 切换图片源
        imgElement.src = newImageUrl;
        
        // 添加淡入效果
        imgElement.style.opacity = '1';
        imgElement.style.transform = 'scale(1)';
    }, 150);
}

// 为灯箱自动加载更多图片
function loadMoreImagesForLightbox(lightbox, enlargedImg, currentImageIndex, currentPageImages, isAvatar) {
    console.log('灯箱自动加载更多图片...');
    
    // 临时禁用按钮和键盘事件，防止重复加载
    const hintContainer = lightbox.querySelector('div');
    const buttons = hintContainer.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
    
    // 显示加载提示
    const loadingText = document.createElement('div');
    loadingText.textContent = '正在加载更多图片...';
    loadingText.style.cssText = `
        color: rgba(255, 255, 255, 0.8);
        font-size: 14px;
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.7);
        padding: 8px 16px;
        border-radius: 20px;
        backdrop-filter: blur(10px);
    `;
    lightbox.appendChild(loadingText);
    
    // 模拟加载延迟
    setTimeout(() => {
        // 调用现有的加载更多图片函数
        loadMoreImages();
        
        // 重新获取当前页面的所有图片
        const newPageImages = document.querySelectorAll('.waterfall-item img');
        console.log('加载后图片数量:', newPageImages.length);
        
        if (newPageImages.length > currentPageImages.length) {
            // 有新图片加载成功
            const nextImageIndex = currentImageIndex + 1;
            if (nextImageIndex < newPageImages.length) {
                const nextImgSrc = newPageImages[nextImageIndex].getAttribute('data-src') || newPageImages[nextImageIndex].src;
                
                // 更新灯箱状态 - 通过lightbox对象传递更新
                lightbox._currentIndex = nextImageIndex;
                lightbox._images = newPageImages;
                
                // 切换到新图片
                switchImage(enlargedImg, nextImgSrc);
                
                console.log('成功加载并切换到新图片:', nextImgSrc);
            }
        } else {
            // 没有更多图片可加载
            console.log('没有更多图片可加载');
            
            // 显示提示信息
            const noMoreText = document.createElement('div');
            noMoreText.textContent = '已加载所有图片';
            noMoreText.style.cssText = `
                color: rgba(255, 255, 255, 0.8);
                font-size: 14px;
                position: absolute;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(255, 100, 100, 0.7);
                padding: 8px 16px;
                border-radius: 20px;
                backdrop-filter: blur(10px);
            `;
            lightbox.appendChild(noMoreText);
            
            // 2秒后移除提示
            setTimeout(() => {
                if (noMoreText.parentNode) {
                    noMoreText.parentNode.removeChild(noMoreText);
                }
            }, 2000);
        }
        
        // 移除加载提示
        if (loadingText.parentNode) {
            loadingText.parentNode.removeChild(loadingText);
        }
        
        // 重新启用按钮
        buttons.forEach(btn => btn.disabled = false);
        
    }, 1000); // 1秒延迟模拟加载过程
}

// 关闭灯箱
function closeLightbox(lightbox) {
    const img = lightbox.querySelector('img');
    if (img) {
        img.style.transform = 'scale(0.8)';
    }
    lightbox.style.opacity = '0';
    
    // 移除键盘事件监听器
    const handleKeydown = lightbox._keydownHandler;
    if (handleKeydown) {
        document.removeEventListener('keydown', handleKeydown);
    }
    
    // 移除触摸事件监听器
    const handleTouchStart = lightbox._touchStartHandler;
    const handleTouchEnd = lightbox._touchEndHandler;
    if (handleTouchStart && handleTouchEnd) {
        lightbox.removeEventListener('touchstart', handleTouchStart);
        lightbox.removeEventListener('touchend', handleTouchEnd);
    }
    
    setTimeout(() => {
        if (lightbox.parentNode) {
            document.body.removeChild(lightbox);
        }
        document.body.style.overflow = '';
    }, 300);
}



// 添加淡入淡出动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateY(-10px); }
        20% { opacity: 1; transform: translateY(0); }
        80% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);