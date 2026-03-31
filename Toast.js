//Toast.js

(function(global) {
    class Toast {
        static activeToasts = [];

        constructor(options = {}) {
            this.options = options;
            this.toastElement = document.createElement("div");
            this.configureToastElement();
            document.body.appendChild(this.toastElement);
        }

        configureToastElement() {
            const el = this.toastElement;

            el.style.position = "fixed";
            el.style.left = "0";
            el.style.top = "0";
            el.style.backgroundColor = "#333";
            el.style.color = "white";
            el.style.padding = "10px";
            el.style.borderRadius = "5px";
            el.style.opacity = "0";
            el.style.transition = "all 0.4s ease";
            el.style.zIndex = "1000";
            el.style.maxWidth = "250px";
            el.style.textAlign = "center";
            el.style.wordWrap = "break-word";

            // Accessibility
            el.setAttribute("role", "alert");
            el.setAttribute("aria-live", "assertive");

            // Custom class
            if (this.options.className) {
                el.classList.add(this.options.className);
            }
        }

        setPosition() {
            const position = this.options.position || "center";
            const index = Toast.activeToasts.indexOf(this);
            const offset = index * 60 + 20;

            const el = this.toastElement;

            // Reset positioning
            el.style.top = "";
            el.style.bottom = "";
            el.style.left = "";
            el.style.right = "";
            el.style.transform = "";

            switch(position) {
                case "top":
                    el.style.top = `${offset}px`;
                    el.style.left = "50%";
                    el.style.transform = "translateX(-50%)";
                    break;

                case "bottom":
                    el.style.bottom = `${offset}px`;
                    el.style.left = "50%";
                    el.style.transform = "translateX(-50%)";
                    break;

                case "top-right":
                    el.style.top = `${offset}px`;
                    el.style.right = "20px";
                    break;

                case "bottom-left":
                    el.style.bottom = `${offset}px`;
                    el.style.left = "20px";
                    break;

                default:
                    el.style.top = "50%";
                    el.style.left = "50%";
                    el.style.transform = "translate(-50%, -50%)";
            }
        }

        setContent(message) {
            const { icon, closable } = this.options;

            const el = this.toastElement;
            el.innerHTML = "";

            if (icon) {
                const iconSpan = document.createElement("span");
                iconSpan.textContent = icon;
                iconSpan.style.marginRight = "8px";
                el.appendChild(iconSpan);
            }

            const text = document.createElement("span");
            text.innerText = message;
            el.appendChild(text);

            if (closable) {
                const closeBtn = document.createElement("span");
                closeBtn.textContent = "\u00D7";
                closeBtn.style.fontWeight = "bold";
                closeBtn.style.fontSize = "26px";
                closeBtn.style.marginLeft = "10px";
                closeBtn.style.cursor = "pointer";

                closeBtn.onclick = () => this.hide();

                el.appendChild(closeBtn);
            }
        }

        applyAnimation() {
            if (this.options.animation === "slide") {
                this.toastElement.style.transform += " translateY(-20px)";
                setTimeout(() => {
                    this.toastElement.style.opacity = "1";
                    this.toastElement.style.transform =
                        this.toastElement.style.transform.replace(" translateY(-20px)", "");
                }, 10);
            } else {
                this.toastElement.style.opacity = "1";
            }
        }

        show(message) {
            const {
                duration = 3000,
                color = "#333",
                contextId
            } = this.options;

            const el = this.toastElement;

            el.style.backgroundColor = color;

            this.setContent(message);

            // Context positioning (preserves original behavior)
            if (contextId) {
                const contextElement = document.getElementById(contextId);
                if (contextElement) {
                    const rect = contextElement.getBoundingClientRect();
                    el.style.position = "absolute";
                    el.style.left = `${rect.left + (rect.width - el.offsetWidth) / 2}px`;
                    el.style.top = `${rect.bottom + window.scrollY + 10}px`;
                }
            } else {
                Toast.activeToasts.push(this);
                this.setPosition();
            }

            this.applyAnimation();

            if (duration > 0) {
                setTimeout(() => this.hide(), duration);
            }
        }

        hide() {
            this.toastElement.style.opacity = "0";

            setTimeout(() => {
                this.toastElement.remove();

                Toast.activeToasts = Toast.activeToasts.filter(t => t !== this);

                // Re-stack remaining toasts
                Toast.activeToasts.forEach(t => t.setPosition());
            }, 400);
        }

        static makeText(message, options = {}, color, contextId) {
            // Backward compatibility (old API)
            if (typeof options === "number") {
                options = {
                    duration: options,
                    color: color,
                    contextId: contextId
                };
            }

            const toast = new Toast(options);
            toast.show(message);
        }

  static async promise(promise, messages) {
    const toast = new Toast({ duration: 0 });
    toast.show(messages.loading);

    try {
        await promise;
        toast.options.color = "green";
        toast.setContent(messages.success);

        // Auto-hide after 4 seconds
        setTimeout(() => toast.hide(),4000);
    } catch {
        toast.options.color = "red";
        toast.setContent(messages.error);

        // Auto-hide after 4 seconds
        setTimeout(() => toast.hide(), 4000);
    }
  }

  }

    global.Toast = Toast;

})(window);


