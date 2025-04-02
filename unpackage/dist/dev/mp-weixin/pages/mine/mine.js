"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  lEchart();
}
const lEchart = () => "../../uni_modules/lime-echart/components/l-echart/l-echart.js";
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    const echarts = require("../../uni_modules/lime-echart/static/echarts.min.js");
    let hostName = common_vendor.ref(null);
    let menuList = common_vendor.reactive([
      { icon: "icon-wodexuexi", txt: "我的学习" },
      { icon: "icon-wodejifen", txt: "我的积分" },
      { icon: "icon-wodekaohe", txt: "我的考核" },
      { icon: "icon-wodepaiming", txt: "我的排名" }
    ]);
    common_vendor.ref(null);
    const optionData = common_vendor.ref({
      grid: {
        top: "24px",
        bottom: "24px",
        left: "16px",
        right: "16px",
        containLabel: true
      },
      tooltip: {
        trigger: "item",
        // 设置触发类型为数据项
        formatter: function(params) {
          return `${params.name} 观看: ${params.value} 分钟`;
        },
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        // 提示框背景颜色
        borderColor: "rgba(0, 0, 0, 0.3)",
        // 提示框边框颜色
        borderWidth: 1,
        // 提示框边框宽度
        textStyle: {
          color: "#333",
          // 提示框文字颜色
          fontSize: 12
          // 提示框文字大小
        }
      },
      xAxis: {
        type: "category",
        data: ["04/01", "04/02", "04/03", "04/04", "04/05", "04/06"]
      },
      yAxis: {
        type: "value"
      },
      series: [{
        type: "line",
        data: [20, 10, 40, 30, 54, 23]
      }]
    });
    const barChartRef = common_vendor.ref({});
    const initChart_mini = () => {
      if (!barChartRef.value)
        return;
      const chartOptions = optionData.value;
      barChartRef.value.init(echarts, async (chart) => {
        chart.showLoading();
        chart.setOption(chartOptions);
        chart.hideLoading();
      });
    };
    const globaTip = () => {
      common_vendor.index.showToast({
        title: "待开发，敬请期待~",
        icon: "error"
      });
    };
    common_vendor.onMounted(() => {
      let systemInfo = common_vendor.index.getSystemInfoSync();
      common_vendor.index.__f__("log", "at pages/mine/mine.vue:154", "~~~~~~~~~~~~~~~~~~~~~ systemInfo: ", systemInfo, ",  env: ", systemInfo.hostName);
      hostName.value = systemInfo.hostName;
    });
    common_vendor.onLoad(() => {
      common_vendor.index.__f__("log", "at pages/mine/mine.vue:164", "~~~~~~~~~~~ onLoad");
    });
    common_vendor.onShow(() => {
      common_vendor.index.__f__("log", "at pages/mine/mine.vue:167", "~~~~~~~~~~~ onShow");
    });
    common_vendor.onReady(() => {
      common_vendor.index.__f__("log", "at pages/mine/mine.vue:170", "~~~~~~~~~~~ onReady");
      setTimeout(() => {
        common_vendor.index.__f__("log", "at pages/mine/mine.vue:172", "barChartRef: ", barChartRef);
        initChart_mini();
      }, 400);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0$1,
        b: common_vendor.f(common_vendor.unref(menuList), (item, index, i0) => {
          return {
            a: common_vendor.n("iconfont " + item.icon),
            b: common_vendor.t(item.txt),
            c: index,
            d: common_vendor.o(($event) => globaTip(), index)
          };
        }),
        c: common_vendor.unref(hostName) !== "WeChat"
      }, common_vendor.unref(hostName) !== "WeChat" ? {} : {}, {
        d: common_vendor.unref(hostName) == "WeChat"
      }, common_vendor.unref(hostName) == "WeChat" ? {
        e: common_vendor.sr(barChartRef, "1869bca2-0", {
          "k": "barChartRef"
        })
      } : {}, {
        f: common_vendor.o(($event) => globaTip()),
        g: common_vendor.o(($event) => globaTip())
      });
    };
  }
};
_sfc_main.__runtimeHooks = 1;
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/mine.js.map
