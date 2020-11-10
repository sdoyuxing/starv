var progressBar = (function () {
    var progressBar = Object.create(null);
    progressBar.option = Object.create(null);
    progressBar.option.color = '#2d8cf0';
    progressBar.option.height = 2;
    progressBar.option.speed = 250;
    progressBar.index = 0;
    progressBar.progressDom = null;
    progressBar.start = function () {
        progressBar.template =
            ' <div bar style=" width: 0%; opacity: 1; height: ' + progressBar.option.height +
            'px;position: fixed;border-radius:' + progressBar.option.height +
            'px; top: 0; z-index: 1060; background-color:' +
            progressBar.option.color + '; left: 0; transition: all .2s linear;"> </div>';
        var timeOut = '',
            $this = this,
            work = function () {
                timeOut = setTimeout(function () {
                    $this.index = $this.update($this.index);
                    if ($this.index === 0) {
                        clearTimeout(timeOut);
                        timeOut = null;
                        return;
                    }
                    work()
                }, 550 - progressBar.option.speed);
            };
        if (this.index === 0 && this.progressDom === null) {
            this.progress = this.init();
            work();
        }
    };
    progressBar.init = function () {
        var progress = document.getElementById("progress-bar");
        if (progress) return progress;
        progress = document.createElement("div");
        progress.id = "progress-bar";
        progress.innerHTML = this.template;
        document.body.appendChild(progress);
        this.progressDom = progress;
        return progress.querySelector("div[bar]");
    };
    progressBar.setWidth = function (n) {
        this.progress && (this.progress.style.width = n * 100 + '%');
    };
    progressBar.update = function (n) {
        n += Math.random() * 0.04;
        if (n > 0.9) {
            return 0;
        }
        this.setWidth(n);
        return n;
    };
    progressBar.setProgress = function (n) {
        if (n >= 0 && n <= 1) {
            this.index = n;
            this.setWidth(this.index);
        }
    };

    progressBar.finish = function () {
        if (this.progressDom) {
            this.index = 1;
            this.setWidth(this.index);
            this.hiden();
        }
    };

    progressBar.hiden = function () {
        var $this = this;
        var timeOut = setTimeout(function () {
            if ($this.progressDom) {
                $this.progress.style.opacity = 0;
                $this.remove();
            }
            clearTimeout(timeOut);
            timeOut = null;
        }, 300);
    };

    progressBar.remove = function () {
        var $this = this;
        var timeOut = setTimeout(function () {
            if ($this.progressDom) {
                document.body.removeChild($this.progressDom);
                $this.progress = null;
                $this.progressDom = null;
                $this.index = 0;
            }
            clearTimeout(timeOut);
            timeOut = null;
        }, 300);
    };
    progressBar.destroy = function () {
        document.body.removeChild($this.progressDom);
        this.progress = null;
        this.progressDom = null;
    };
    return {
        start: function () {
            progressBar.start();
        },
        finish: function () {
            progressBar.finish();
        },
        setProgress: function () {
            progressBar.setProgress();
        },
        destroy: function () {
            progressBar.destroy();
        },
        config: function (obj) {
            for (var key in obj) {
                if (typeof obj[key] === 'string' || typeof obj[key] === 'number' && key in progressBar.option) {
                    progressBar.option[key] = obj[key]
                }
            }
        },
        reset: function () {
            progressBar.option.color = '#2d8cf0';
            progressBar.option.height = 2;
            progressBar.option.speed = 300;
        }
    };
})();
export default progressBar;