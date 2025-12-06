// var a_idx = 0;
// jQuery(document).ready(function($) {
//     $("body").click(function(e) {
//         // 这里可以修改您想要弹出的文字
//         var a = new Array("❤可爱❤", "❤元气❤", "❤暴富❤", "❤灵感❤", "❤摸鱼❤");
//         var $i = $("<span/>").text(a[a_idx]);
//         a_idx = (a_idx + 1) % a.length;
//         var x = e.pageX,
//             y = e.pageY;
//         $i.css({
//             "z-index": 99999,
//             "top": y - 20,
//             "left": x,
//             "position": "absolute",
//             "font-weight": "bold",
//             "color": "#B36A24" // 文字颜色，您可以改成 "#FF0000" (红) 等
//         });
//         $("body").append($i);
//         $i.animate({
//             "top": y - 180,
//             "opacity": 0
//         }, 1500, function() {
//             $i.remove();
//         });
//     });
// });

/* 鼠标点击特效 - 原生JS版 */
(function() {
    // 1. 定义点击触发函数
    function clickEffect(e) {
        // console.log("点击生效！"); // 调试用，如果看到控制台输出这句话说明代码没问题
        
        // 这里的数组可以修改为您喜欢的文字
        var textArray = ["❤可爱❤", "❤元气❤", "❤暴富❤", "❤灵感❤", "❤摸鱼❤", "❤开心❤"];
        
        // 生成一个新元素
        var span = document.createElement("span");
        
        // 随机取一个词
        var text = textArray[Math.floor(Math.random() * textArray.length)];
        span.textContent = text;
        
        // 设置初始样式 (CSS)
        span.style.zIndex = "99999";
        span.style.position = "absolute";
        span.style.top = (e.pageY - 20) + "px"; // 鼠标位置上方一点
        span.style.left = e.pageX + "px";      // 鼠标位置
        span.style.fontWeight = "bold";
        span.style.color = "#B36A24";          // 您的主题橙色
        span.style.pointerEvents = "none";     // 关键：让鼠标可以透过文字点击下面的链接
        span.style.userSelect = "none";        // 禁止选中文字
        span.style.fontSize = "14px";
        span.style.opacity = "1";
        span.style.transition = "all 1s ease-out"; // 动画时间 1秒
        
        // 把它加到网页身体里
        document.body.appendChild(span);
        
        // 延迟一小会儿后开始飘动消失 (利用 CSS 动画)
        setTimeout(function() {
            span.style.top = (e.pageY - 150) + "px"; // 向上飘 150px
            span.style.opacity = "0";                // 变透明
        }, 10);

        // 动画结束后（1秒后）清理垃圾，把元素删掉
        setTimeout(function() {
            span.remove();
        }, 1000);
    }

    // 2. 绑定点击事件 (兼容手机和电脑)
    document.addEventListener('click', clickEffect);
})();