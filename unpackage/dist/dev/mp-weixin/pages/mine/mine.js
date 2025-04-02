"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _component_lEchart = common_vendor.resolveComponent("lEchart");
  _component_lEchart();
}
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    let menuList = common_vendor.reactive([
      { icon: "icon-wodexuexi", txt: "我的学习" },
      { icon: "icon-wodejifen", txt: "我的积分" },
      { icon: "icon-wodekaohe", txt: "我的考核" },
      { icon: "icon-wodepaiming", txt: "我的排名" }
    ]);
    common_vendor.ref(null);
    const optionData = common_vendor.ref({
      xAxis: {
        type: "category",
        data: ["04/01", "04/02", "04/03", "04/04", "04/05", "04/06"]
      },
      yAxis: {
        type: "value"
      },
      series: [{
        type: "line",
        data: [120, 110, 340, 301, 230, 110]
      }]
    });
    const init = () => {
      var myChart = common_vendor.init(document.getElementById("mine_echarts"));
      var option = optionData.value;
      myChart.setOption(option);
    };
    common_vendor.onMounted(() => {
      init();
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.f(common_vendor.unref(menuList), (item, index, i0) => {
          return {
            a: common_vendor.n("iconfont " + item.icon),
            b: common_vendor.t(item.txt),
            c: index
          };
        }),
        c: common_vendor.sr("barChartRef", "1869bca2-0")
      };
    };
  }
};
_sfc_main.__runtimeHooks = 1;
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/mine.js.map
