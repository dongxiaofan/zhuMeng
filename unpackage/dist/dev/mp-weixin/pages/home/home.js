"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "home",
  setup(__props) {
    common_vendor.ref(true);
    let scrollTop = common_vendor.ref(0);
    let screenHeight = common_vendor.ref(0);
    let contHeight = common_vendor.ref(0);
    let menuOffsetTop = common_vendor.ref(0);
    let menuScrollTop = common_vendor.ref(0);
    let menuHeight = common_vendor.ref(0);
    let menuFixed = common_vendor.ref(false);
    let showMask = common_vendor.ref(false);
    const gradientColor = common_vendor.ref("rgba(255, 255, 255, 0)");
    common_vendor.onMounted(() => {
      let query = common_vendor.index.createSelectorQuery();
      query.select(".home-top-menu").boundingClientRect((res) => {
        menuScrollTop.value = res.top;
        menuHeight.value = res.height;
        menuOffsetTop.value = res.top + res.height;
      }).exec();
      query.select(".home-wrap").boundingClientRect((res) => {
        contHeight.value = res.height;
      }).exec();
    });
    common_vendor.onReady(() => {
      const sysInfo = common_vendor.index.getSystemInfoSync();
      screenHeight.value = sysInfo.screenHeight;
    });
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
      { name: "home_swiper_03" }
    ]);
    let videoList = common_vendor.ref([
      { name: "item_01.jpg", title: "高速公路养护作业控制区最小长度规定120km", pros: 30, isNew: "最新", cont: "高速公路养护" },
      { name: "item_02.jpg", title: "高速公路设施清洗", pros: 60, isNew: "最新", cont: "高速公路设施清洗是一项复杂且重要的工作，其目的是确保道路环境整洁、安全，为过往车辆提供良好的通行条件" },
      { name: "item_03.jpg", title: "边坡小塌方、开裂和沉陷处理", pros: 0, isNew: "最新", cont: "边坡小塌方、开裂和沉陷处理" },
      { name: "item_01.jpg", title: "死亡事故上报及处理方法", pros: 50, cont: "死亡事故上报及处理方法" },
      { name: "item_02.jpg", title: "护栏更换作业要点", pros: 20, cont: "1、准备工作；2、拆除旧护栏；3、测量与定位" },
      { name: "item_03.jpg", title: "伸缩装置安装作业要点", pros: 0, cont: "伸缩装置安装作业要点如下" },
      { name: "item_01.jpg", title: "中间护栏施工交通导改风险提示", pros: 0, cont: "中间护栏施工交通导改的风险主要包括以下几个方面" },
      { name: "item_02.jpg", title: "护栏更换风险提示", pros: 0, cont: "护栏更换风险提示、施工风险、法律与规范要求" },
      { name: "item_03.jpg", title: "路面铣刨风险提示", pros: 0, cont: "包括机械操作风险、施工环境风险以及对交通和人员的影响" },
      { name: "item_01.jpg", title: "桥梁顶升与支座更换风险提示", pros: 0, cont: "桥梁顶升与支座更换风险提示" }
    ]);
    common_vendor.onPullDownRefresh(() => {
      common_vendor.index.__f__("log", "at pages/home/home.vue:136", "下拉刷新整个页面");
      videoList.value = videoList.value.slice(0, 10);
    });
    common_vendor.onReachBottom(() => {
      common_vendor.index.__f__("log", "at pages/home/home.vue:142", "触底了");
      if (videoList.value.length <= 100) {
        common_vendor.index.__f__("log", "at pages/home/home.vue:144", "数据复制");
        videoList.value = [...videoList.value, ...videoList.value];
      }
    });
    common_vendor.onPageScroll((e) => {
      scrollTop.value = e.scrollTop;
      if (e.scrollTop >= menuScrollTop.value) {
        menuFixed.value = true;
      } else {
        menuFixed.value = false;
      }
      gradientColor.value = `rgba(0,0,0, ${e.scrollTop}%)`;
      showMask.value = false;
    });
    const scrollToTop = () => {
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        duration: 100
      });
    };
    const chooseType = () => {
      showMask.value = true;
    };
    const chooseTypeOk = () => {
      showMask.value = false;
      common_vendor.index.showToast({
        title: "已分类"
      });
    };
    const goDetail = () => {
      common_vendor.index.navigateTo({
        url: "/subPackage/pages/detail/detail"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(showMask)
      }, common_vendor.unref(showMask) ? {
        b: common_vendor.unref(contHeight) + "px",
        c: common_vendor.unref(menuFixed) ? "0px" : common_vendor.unref(menuOffsetTop) + "px",
        d: common_vendor.o(($event) => common_vendor.isRef(showMask) ? showMask.value = false : showMask = false)
      } : {}, {
        e: common_vendor.unref(scrollTop) > 400
      }, common_vendor.unref(scrollTop) > 400 ? {
        f: common_vendor.unref(scrollTop) - 400 + "%",
        g: common_vendor.o(scrollToTop)
      } : {}, {
        h: common_vendor.unref(menuFixed)
      }, common_vendor.unref(menuFixed) ? {
        i: common_vendor.unref(menuHeight) + "px",
        j: common_vendor.unref(scrollTop) + "%",
        k: (common_vendor.unref(scrollTop) - common_vendor.unref(menuScrollTop)) * 3 + "%"
      } : {}, {
        l: common_vendor.f(common_vendor.unref(typeTabList), (type, index, i0) => {
          return {
            a: common_vendor.t(type.text),
            b: index,
            c: common_vendor.n("type-item " + (common_vendor.unref(currentTypeIndex) == index ? "active" : "")),
            d: common_vendor.o(($event) => typeBarClick(index), index)
          };
        }),
        m: common_vendor.o(($event) => chooseType()),
        n: common_vendor.unref(showMask)
      }, common_vendor.unref(showMask) ? {
        o: common_vendor.o(($event) => chooseTypeOk()),
        p: common_vendor.o(($event) => chooseTypeOk())
      } : {}, {
        q: common_vendor.n(common_vendor.unref(menuFixed) ? "home-top-menu menu-fixed" : "home-top-menu"),
        r: common_vendor.f(common_vendor.unref(swiperList), (img, index, i0) => {
          return {
            a: "/static/images/home_swiper/" + img.name + ".png",
            b: index
          };
        }),
        s: common_vendor.f(common_vendor.unref(videoList), (item, index, i0) => {
          return common_vendor.e({
            a: "/static/images/home_video_list/" + item.name,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.cont),
            d: item.pros > 0
          }, item.pros > 0 ? {
            e: item.pros + "%",
            f: common_vendor.t(item.pros)
          } : {}, {
            g: item.isNew
          }, item.isNew ? {} : {}, {
            h: index,
            i: common_vendor.o(($event) => goDetail(), index)
          });
        })
      });
    };
  }
};
_sfc_main.__runtimeHooks = 1;
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/home.js.map
