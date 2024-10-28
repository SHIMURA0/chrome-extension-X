(function() {
    // 创建搜索面板
    function createSearchPanel() {
        const panel = document.createElement('div');
        panel.className = 'timestamp-search-panel';
        panel.innerHTML = `
            <div class="timestamp-search-header">时间戳搜索</div>
            <input type="text" 
                   class="timestamp-search-input" 
                   placeholder="搜索视频内容..."
            >
            <div class="timestamp-result-area">
                搜索结果将显示在这里...
            </div>
        `;

        document.body.appendChild(panel);
        
        // 使面板可拖动
        makeDraggable(panel);
    }

    // 使元素可拖动
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

    // 等待页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createSearchPanel);
    } else {
        createSearchPanel();
    }
})();


