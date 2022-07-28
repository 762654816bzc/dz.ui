const mixin = {
    methods: {
        move(e, node) {
            let width = node.offsetWidth;
            let height = node.offsetHeight;
            let left = e.clientX - node.getBoundingClientRect().left;
            let top = e.clientY - node.getBoundingClientRect().top;
            if (left > width) left = width;
            if (left < 0) left = 0;
            if (top > height) top = height;
            if (top < 0) top = 0;
            let radiox = (parseFloat(left) / parseFloat(width)).toFixed(6);
            let radioy = (parseFloat(top) / parseFloat(height)).toFixed(6);
            return {
                left,
                top,
                radiox,
                radioy,
            };
        },
        getOffset(node) {
            let detail = node.getBoundingClientRect();
            let top =
                detail.top +
                (window.pageYOffset || document.documentElement.scrollTop) -
                (document.documentElement.clientTop || 0);
            let left =
                detail.left +
                (window.pageXOffset || document.documentElement.scrollLeft) -
                (document.documentElement.clientLeft || 0);
            let width = node.offsetWidth;
            let height = node.offsetHeight;
            return {
                top,
                left,
                width,
                height,
            };
        },
        getWindow() {
            // 返回窗口宽高
            let width =
                document.documentElement.clientWidth ||
                document.body.clientWidth;
            let height =
                document.documentElement.clientHeight ||
                document.body.clientHeight;
            return { width, height };
        },
        multipleChoice(arr, name) {
            let newArr = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr.indexOf(name) == -1) {
                    newArr = [...arr, name];
                    break;
                } else {
                    newArr = arr.filter((item) => item !== name);
                    break;
                }
            }
            return newArr;
        },
        getSecond(time) {
            let second = 0;
            second =
                Number(time.split(":")[0] * 3600) +
                Number(time.split(":")[1] * 60) +
                Number(time.split(":")[2]);
            return second;
        },
        getHMS(time) {
            let h =
                Math.floor(time / 3600) < 10
                    ? "0" + Math.floor(time / 3600)
                    : Math.floor(time / 3600);
            let m =
                Math.floor((time / 60) % 60) < 10
                    ? "0" + Math.floor((time / 60) % 60)
                    : Math.floor((time / 60) % 60);
            let s =
                Math.floor(time % 60) < 10
                    ? "0" + Math.floor(time % 60)
                    : Math.floor(time % 60);
            return h + ":" + m + ":" + s;
        },
    },
};
export default mixin;
