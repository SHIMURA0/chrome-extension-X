(function() {
    function createSearchPanel() {
        const panel = document.createElement('div');
        panel.className = 'timestamp-search-panel';
        panel.innerHTML = `
            <div class="timestamp-search-header">
                <img src="https://example.com/avatar.png" alt="Avatar">
                <span class="timestamp-search-header-text">视频知识点导航</span>
            </div>
            <input type="text" 
                   class="timestamp-search-input" 
                   placeholder="搜索关键词..."
            >
            <div class="timestamp-result-area">
                <div class="timestamp-item">
                    <span class="timestamp-item-time">00:00</span>
                    <span>Mac mini 选择与初始化设置</span>
                </div>
                <div class="timestamp-item">
                    <span class="timestamp-item-time">00:20</span>
                    <span>介绍苹果 Mac mini 可作家用服务器</span>
                </div>
                <!-- 添加更多时间戳项目 -->
            </div>
            <div class="timestamp-actions">
                <button class="timestamp-action-button">亮点</button>
                <button class="timestamp-action-button">视频选集</button>
            </div>
        `;

        document.body.appendChild(panel);
        makeDraggable(panel);
    }

    function makeDraggable(element) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        element.querySelector('.timestamp-search-header').style.cursor = 'move';
        element.querySelector('.timestamp-search-header').onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            element.style.top = (element.offsetTop - pos2) + "px";
            element.style.right = (parseInt(getComputedStyle(element).right) + pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createSearchPanel);
    } else {
        createSearchPanel();
    }
})();




