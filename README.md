# 響應式設計

下了 7 個斷點

1. 首先針對設計稿的 375px, 768px 做處理
2. 再針對區塊做微調的 1240px, 1024px, 992px, 576px, 414px

## 特別處理

使用 Chrome dev 工具檢查時，發現 iPad Pro 的呈現不佳，但與 Nest Hub 寬度都為 1024px，因此使用了 media query 的條件判斷：`(max-width: 1024px) and (min-height: 1000px)`，當寬度最大值為 1024px 且高度大於 1000px 時才會套用該樣式

# 此版本全部使用原生寫法
