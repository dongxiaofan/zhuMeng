"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "examine",
  setup(__props) {
    const muluList = common_vendor.reactive([
      { title: "高速公路养护作业控制区最小长度规定高速公路养护作业控制区最小长度规定", status: 1 },
      { title: "高速公路设施清洗", status: 0 },
      { title: "边坡小塌方、开裂和沉陷处理", status: 0 },
      { title: "死亡事故上报及处理方法", status: 1 },
      { title: "护栏更换作业要点", status: 0 },
      { title: "伸缩装置安装作业要点", status: 0 }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(muluList, (item, index, i0) => {
          return {
            a: common_vendor.n("iconfont " + (item.status == 1 ? "icon-gou text-primary" : "icon-weiwancheng")),
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.status == 1 ? "已完成" : "待考核"),
            d: common_vendor.n("mulu-item-status " + (item.status == 1 ? "text-primary" : "text-grey")),
            e: index
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/examine/examine.js.map
