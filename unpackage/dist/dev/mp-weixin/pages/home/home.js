"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "home",
  setup(__props) {
    let typeTabList = common_vendor.reactive([
      { text: "首页", key: 0 },
      { text: "公路养护", key: 1 },
      { text: "风险提示", key: 2 },
      { text: "作业要点", key: 3 },
      { text: "平安工地", key: 4 },
      { text: "技术交流", key: 5 },
      { text: "三卡学习", key: 6 },
      { text: "三级安全教育", key: 7 },
      { text: "作业指导书", key: 8 },
      { text: "技能学习", key: 9 }
    ]);
    let currentTypeIndex = common_vendor.ref(0);
    const typeBarClick = (index) => {
      currentTypeIndex.value = index;
    };
    let swiperList = common_vendor.reactive([
      { name: "home_swiper_01" },
      { name: "home_swiper_02" },
      { name: "home_swiper_03" },
      { name: "home_swiper_04" }
    ]);
    let videoList = common_vendor.reactive([
      { name: "item_01.png", title: "高速公路养护作业控制区最小长度规定120km", cont: "sssss" },
      { name: "item_02.jpg", title: "高速公路设施清洗", cont: "sssss" },
      { name: "item_03.jpg", title: "边坡小塌方、开裂和沉陷处理", cont: "sssss" },
      { name: "item_04.jpg", title: "死亡事故上报及处理方法", cont: "sssss" },
      { name: "item_05.jpg", title: "护栏更换作业要点", cont: "sssss" },
      { name: "item_06.jpg", title: "伸缩装置安装作业要点", cont: "sssss" },
      { name: "item_07.jpg", title: "中间护栏施工交通导改风险提", cont: "sssss" },
      { name: "item_08.jpg", title: "护栏更换风险提示", cont: "sssss" },
      { name: "item_09.jpg", title: "路面铣刨风险提示", cont: "sssss" },
      { name: "item_10.jpg", title: "桥梁顶升与支座更换风险提示", cont: "sssss" }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(typeTabList), (tool, index, i0) => {
          return {
            a: common_vendor.t(tool.text),
            b: index,
            c: common_vendor.n("type-item " + (common_vendor.unref(currentTypeIndex) == index ? "active" : "")),
            d: common_vendor.o(($event) => typeBarClick(index), index)
          };
        }),
        b: common_vendor.f(common_vendor.unref(swiperList), (img, k0, i0) => {
          return {
            a: "/static/images/home_swiper/" + img.name + ".png"
          };
        }),
        c: common_vendor.f(common_vendor.unref(videoList), (item, k0, i0) => {
          return {
            a: "/static/images/home_video_list/" + item.name,
            b: common_vendor.t(item.title)
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/home.js.map
