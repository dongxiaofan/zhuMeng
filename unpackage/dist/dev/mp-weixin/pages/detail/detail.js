"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const muluList = common_vendor.reactive([
      { title: "高速公路养护作业控制区最小长度规定高速公路养护作业控制区最小长度规定", status: 1, statusName: "播放中" },
      { title: "高速公路设施清洗", status: 0, statusName: "待播放" },
      { title: "边坡小塌方、开裂和沉陷处理", status: 0, statusName: "待播放" },
      { title: "死亡事故上报及处理方法", status: 2, statusName: "已完成" },
      { title: "护栏更换作业要点", status: 0, statusName: "待播放" },
      { title: "伸缩装置安装作业要点", status: 0, statusName: "待播放" }
    ]);
    let videoList = common_vendor.ref([
      { name: "item_01.jpg", title: "高速公路养护作业控制区最小长度规定120km", pros: 30, isNew: "最新", cont: "高速公路养护" },
      { name: "item_02.jpg", title: "高速公路设施清洗", pros: 60, isNew: "最新", cont: "高速公路设施清洗是一项复杂且重要的工作，其目的是确保道路环境整洁、安全，为过往车辆提供良好的通行条件" },
      { name: "item_03.jpg", title: "边坡小塌方、开裂和沉陷处理", pros: 0, isNew: "最新", cont: "边坡小塌方、开裂和沉陷处理" },
      { name: "item_04.jpg", title: "死亡事故上报及处理方法", pros: 50, cont: "死亡事故上报及处理方法" },
      { name: "item_05.jpg", title: "护栏更换作业要点", pros: 20, cont: "1、准备工作；2、拆除旧护栏；3、测量与定位" },
      { name: "item_06.jpg", title: "伸缩装置安装作业要点", pros: 0, cont: "伸缩装置安装作业要点如下" },
      { name: "item_07.jpg", title: "中间护栏施工交通导改风险提示", pros: 0, cont: "中间护栏施工交通导改的风险主要包括以下几个方面" },
      { name: "item_08.jpg", title: "护栏更换风险提示", pros: 0, cont: "护栏更换风险提示、施工风险、法律与规范要求" },
      { name: "item_09.jpg", title: "路面铣刨风险提示", pros: 0, cont: "包括机械操作风险、施工环境风险以及对交通和人员的影响" },
      { name: "item_10.jpg", title: "桥梁顶升与支座更换风险提示", pros: 0, cont: "桥梁顶升与支座更换风险提示" }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(muluList, (item, index, i0) => {
          return {
            a: common_vendor.n("iconfont " + (item.status == 1 ? "icon-bofang" : "icon-zanting")),
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.statusName),
            d: common_vendor.n("mulu-item-status " + (item.status == 1 ? "text-primary" : item.status == 2 ? "text-success" : "text-grey")),
            e: index
          };
        }),
        b: common_vendor.f(common_vendor.unref(videoList), (item, index, i0) => {
          return {
            a: "/static/images/home_video_list/" + item.name,
            b: common_vendor.t(item.title),
            c: index
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/detail/detail.js.map
