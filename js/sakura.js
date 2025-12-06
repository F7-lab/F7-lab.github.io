// /* 枫叶/秋叶飘落特效 - 本地代码版 */
// (function() {
//     // 兼容低版本浏览器的动画 API
//     var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
//     function(callback) {
//         window.setTimeout(callback, 1000 / 60);
//     };
//     window.requestAnimationFrame = requestAnimationFrame;

//     // 主要配置
//     var flakes = [],
//         canvas = document.createElement("canvas"),
//         ctx = canvas.getContext("2d"),
//         flakeCount = 30,  // 【可修改】叶子数量，建议 25-50 之间
//         mX = -100,
//         mY = -100;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
    
//     // 设置画布样式，确保在最上层
//     canvas.style.position = "fixed";
//     canvas.style.top = "0";
//     canvas.style.left = "0";
//     canvas.style.zIndex = "-1"; // 强制最上层
//     canvas.style.pointerEvents = "none"; // 让鼠标可以透过叶子点击网页
    
//     document.body.appendChild(canvas);

//     // 定义秋叶的颜色系 (红、橙、褐)
//     var leafColors = [
//         'rgba(204, 51, 0, ',   // 深红
//         'rgba(255, 102, 0, ',  // 橙色
//         'rgba(218, 165, 32, ', // 金麒麟色
//         'rgba(139, 69, 19, '   // 鞍褐色
//     ];

//     function snow() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         for (var i = 0; i < flakeCount; i++) {
//             var flake = flakes[i],
//                 x = mX,
//                 y = mY,
//                 minDist = 150,
//                 x2 = flake.x,
//                 y2 = flake.y;

//             var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
//                 dx = x2 - x,
//                 dy = y2 - y;

//             // 鼠标交互效果 (鼠标靠近时叶子会加速飘开)
//             if (dist < minDist) {
//                 var force = minDist / (dist * dist),
//                     xcomp = (x - x2) / dist,
//                     ycomp = (y - y2) / dist,
//                     deltaV = force / 2;

//                 flake.velX -= deltaV * xcomp;
//                 flake.velY -= deltaV * ycomp;
//             } else {
//                 // 正常的飘落速度控制
//                 flake.velX *= .98;
//                 if (flake.velY <= flake.speed) {
//                     flake.velY = flake.speed
//                 }
//                 // 左右摇摆效果
//                 flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
//             }

//             // 计算旋转角度
//             flake.rotate += flake.rotateSpeed;

//             // 开始绘制叶子 (用旋转的矩形模拟)
//             ctx.save(); // 保存当前画布状态
//             ctx.translate(flake.x, flake.y); // 将画布中心移动到叶子位置
//             ctx.rotate(flake.rotate * Math.PI / 180); // 旋转画布

//             // 设置颜色
//             ctx.fillStyle = flake.color + flake.opacity + ")";
//             // 绘制一个中心对称的矩形
//             ctx.fillRect(-flake.size / 2, -flake.size / 2, flake.size, flake.size);
            
//             ctx.restore(); // 恢复画布状态

//             // 更新位置
//             flake.y += flake.velY;
//             flake.x += flake.velX;
                
//             // 边界检查：掉出屏幕后重置到顶部
//             if (flake.y >= canvas.height || flake.y <= -flake.size * 2) {
//                 reset(flake);
//             }
//             if (flake.x >= canvas.width || flake.x <= -flake.size * 2) {
//                 reset(flake);
//             }
//         }
//         requestAnimationFrame(snow);
//     };

//     // 重置叶子状态的函数
//     function reset(flake) {
//         flake.x = Math.floor(Math.random() * canvas.width);
//         flake.y = -flake.size * (Math.random() * 5); // 初始在屏幕外上方
//         flake.size = (Math.random() * 10) + 8; // 【可修改】叶子大小范围
//         flake.speed = (Math.random() * 1.5) + 0.8; // 下落速度
//         flake.velY = flake.speed;
//         flake.velX = 0;
//         flake.opacity = (Math.random() * 0.5) + 0.5; // 透明度
//         flake.color = leafColors[Math.floor(Math.random() * leafColors.length)]; // 随机颜色
//         flake.rotate = Math.floor(Math.random() * 360); // 初始角度
//         flake.rotateSpeed = (Math.random() * 2) - 1; // 旋转速度和方向
//     }

//     // 初始化
//     function init() {
//         for (var i = 0; i < flakeCount; i++) {
//             var x = Math.floor(Math.random() * canvas.width),
//                 y = Math.floor(Math.random() * canvas.height),
//                 size = (Math.random() * 10) + 8,
//                 speed = (Math.random() * 1.5) + 0.8,
//                 opacity = (Math.random() * 0.5) + 0.5,
//                 color = leafColors[Math.floor(Math.random() * leafColors.length)],
//                 rotate = Math.floor(Math.random() * 360),
//                 rotateSpeed = (Math.random() * 2) - 1;
            
//             flakes.push({
//                 speed: speed,
//                 velY: speed,
//                 velX: 0,
//                 x: x,
//                 y: y,
//                 size: size,
//                 stepSize: (Math.random()) / 30,
//                 step: 0,
//                 opacity: opacity,
//                 color: color,
//                 rotate: rotate,
//                 rotateSpeed: rotateSpeed
//             });
//         }
//         snow();
//     };

//     // 窗口大小改变时自动调整画布
//     window.addEventListener("resize", function() {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//     })

//     init();
// })();

/* 真·枫叶飘落特效 - 本地代码版 (几何形状绘制) */
(function() {
    // 兼容低版本浏览器的动画 API
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
    window.requestAnimationFrame = requestAnimationFrame;

    // 主要配置
    var flakes = [],
        canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d"),
        flakeCount = 25,  // 【可修改】叶子数量，如果觉得卡顿就调小，觉得不够就调大(比如50)
        mX = -100,
        mY = -100;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // 设置画布样式，确保在最上层
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1"; // 强制最上层
    canvas.style.pointerEvents = "none"; // 让鼠标可以透过叶子点击网页
    
    document.body.appendChild(canvas);

    // 定义秋叶的颜色系 (红、橙、褐、黄)
    var leafColors = [
        'rgba(220, 60, 20, ',   // 深红枫叶
        'rgba(255, 110, 20, ',  // 亮橙
        'rgba(200, 150, 30, ',  // 枯黄
        'rgba(160, 80, 30, '    // 褐色
    ];

    function snow() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < flakeCount; i++) {
            var flake = flakes[i],
                x = mX,
                y = mY,
                minDist = 150,
                x2 = flake.x,
                y2 = flake.y;

            var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
                dx = x2 - x,
                dy = y2 - y;

            // 鼠标交互效果 (鼠标靠近时叶子会加速飘开)
            if (dist < minDist) {
                var force = minDist / (dist * dist),
                    xcomp = (x - x2) / dist,
                    ycomp = (y - y2) / dist,
                    deltaV = force / 2;

                flake.velX -= deltaV * xcomp;
                flake.velY -= deltaV * ycomp;
            } else {
                // 正常的飘落速度控制
                flake.velX *= .98;
                if (flake.velY <= flake.speed) {
                    flake.velY = flake.speed
                }
                // 左右摇摆效果
                flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
            }

            // 计算旋转角度
            flake.rotate += flake.rotateSpeed;

            // --- 开始绘制真实枫叶形状 ---
            ctx.save(); // 保存当前画布状态
            ctx.translate(flake.x, flake.y); // 将画布中心移动到叶子位置
            ctx.rotate(flake.rotate * Math.PI / 180); // 旋转画布

            // 设置颜色
            ctx.fillStyle = flake.color + flake.opacity + ")";
            
            // 开始描绘路径
            ctx.beginPath();
            // 定义缩放比例，基于基础大小
            var s = flake.size / 10; 
            // 绘制枫叶的几何路径 (五个尖角和底部叶柄)
            ctx.moveTo(0 * s, -6 * s); // 顶部尖端
            ctx.lineTo(2 * s, -3 * s);
            ctx.lineTo(5 * s, -4 * s); // 右上尖端
            ctx.lineTo(3 * s, 0 * s);
            ctx.lineTo(4 * s, 3 * s);  // 右下尖端
            ctx.lineTo(1 * s, 2 * s);
            ctx.lineTo(0 * s, 5 * s);  // 底部叶柄中心
            ctx.lineTo(-1 * s, 2 * s);
            ctx.lineTo(-4 * s, 3 * s); // 左下尖端
            ctx.lineTo(-3 * s, 0 * s);
            ctx.lineTo(-5 * s, -4 * s); // 左上尖端
            ctx.lineTo(-2 * s, -3 * s);
            ctx.closePath(); // 闭合路径
            ctx.fill();      // 填充颜色

            ctx.restore(); // 恢复画布状态
            // --- 绘制结束 ---

            // 更新位置
            flake.y += flake.velY;
            flake.x += flake.velX;
                
            // 边界检查：掉出屏幕后重置到顶部
            if (flake.y >= canvas.height + flake.size * 5 || flake.y <= -flake.size * 6) {
                reset(flake);
            }
            if (flake.x >= canvas.width + flake.size * 5 || flake.x <= -flake.size * 6) {
                reset(flake);
            }
        }
        requestAnimationFrame(snow);
    };

    // 重置叶子状态的函数
    function reset(flake) {
        flake.x = Math.floor(Math.random() * canvas.width);
        flake.y = -flake.size * (Math.random() * 5 + 5); // 初始在屏幕上方更高处
        flake.size = (Math.random() * 15) + 12; // 【可修改】叶子大小范围，现在设置得更大了
        flake.speed = (Math.random() * 1.2) + 0.6; // 下落速度
        flake.velY = flake.speed;
        flake.velX = 0;
        flake.opacity = (Math.random() * 0.4) + 0.6; // 透明度，让它更实一点
        flake.color = leafColors[Math.floor(Math.random() * leafColors.length)]; // 随机颜色
        flake.rotate = Math.floor(Math.random() * 360); // 初始角度
        flake.rotateSpeed = (Math.random() * 3) - 1.5; // 旋转速度和方向
    }

    // 初始化
    function init() {
        for (var i = 0; i < flakeCount; i++) {
            var size = (Math.random() * 15) + 12;
            flakes.push({
                speed: (Math.random() * 1.2) + 0.6,
                velY: 0,
                velX: 0,
                x: Math.floor(Math.random() * canvas.width),
                y: Math.floor(Math.random() * canvas.height),
                size: size,
                stepSize: (Math.random()) / 30,
                step: 0,
                opacity: (Math.random() * 0.4) + 0.6,
                color: leafColors[Math.floor(Math.random() * leafColors.length)],
                rotate: Math.floor(Math.random() * 360),
                rotateSpeed: (Math.random() * 3) - 1.5
            });
        }
        snow();
    };

    // 窗口大小改变时自动调整画布
    window.addEventListener("resize", function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    })

    init();
})();