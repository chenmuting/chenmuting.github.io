document.addEventListener('DOMContentLoaded', () => {
	const softwareData = [
		{
			name: "鸿蒙调试助手（电脑端）",
			description: "Auto-Installer是基于开源OpenHarmony项目的Hdc工具。该项目致力于为简化开发调试体验。我们正在积极开发中，以满足鸿蒙开发者随时调试应用需求。",
			mobileUrl: "https://github.com/likuai2010/auto-installer/releases/download/1.4.0/auto-installer.hap",
			desktopUrl: "https://github.com/likuai2010/auto-installer/releases/download/1.2.4/AutoInstaller.Setup.1.2.4.exe",
			repoUrl: "https://github.com/likuai2010/auto-installer"
		},
		{
			name: "Clash Next",
			description: "ClashNEXT是一个HarmonyOS NEXT(OpenHarmony)平台的代理软件，使用改版的ClashMate内核与flclash内核。使用前请仔细阅读免责声明和常见问题。鸿蒙首个基于navigation框架重新编译的Clash，手机、平板、折叠屏全线适配。",
			mobileUrl: "https://github.com/xiaobaigroup/hapapp/releases/download/1.2.4/ClashNEXT1.2.4.hap",
			desktopUrl: null,
			repoUrl: "https://github.com/xiaobaigroup/hapapp"
		},
		{
			name: "Kazumi",
			description: "使用 flutter 开发的基于自定义规则的番剧采集与在线观看程序。使用最多五行基于 Xpath 语法的选择器构建自己的规则。支持规则导入与规则分享。支持基于 Anime4K 的实时超分辨率",
			mobileUrl: "https://github.com/ErBWs/Kazumi/releases/download/1.6.2/Kazumi_ohos_1.6.2_unsigned.hap",
			desktopUrl: null,
			repoUrl: "https://github.com/ErBWs/Kazumi?tab=readme-ov-file"
		},
		{
			name: "冲浪喵",
			description: "Liny 的浏览器为 HarmonyOS NEXT 而构建，旨在为各种性能水平的设备提供一个浏览器的轻量之选。",
			mobileUrl: "https://github.com/awaLiny2333/LinysBrowser_NEXT/releases/download/v1.7.4-beta/OHOS-home-default-unsigned.hap",
			desktopUrl: null,
			repoUrl: "https://github.com/awaLiny2333/LinysBrowser_NEXT"
		}
	];

    const listContainer = document.getElementById('softwareList');
    const fragment = document.createDocumentFragment();

    softwareData.forEach(software => {
        const item = createSoftwareItem(software);
        fragment.appendChild(item);
    });

    listContainer.appendChild(fragment);
    setupEventDelegation();
});

function createSoftwareItem(software) {
    const item = document.createElement('div');
    item.className = 'software-item';
    
    const downloadButtons = [];
    if (software.mobileUrl) {
        downloadButtons.push(`
            <a href="${software.mobileUrl}" 
               class="btn download-btn mobile-download-btn"
               title="手机版下载"
               aria-label="手机版下载">
               移动端
            </a>
        `);
    }
    if (software.desktopUrl) {
        downloadButtons.push(`
            <a href="${software.desktopUrl}" 
               class="btn download-btn desktop-download-btn"
               title="电脑版下载"
               aria-label="电脑版下载">
               桌面端
            </a>
        `);
    }

    item.innerHTML = `
        <div class="software-header">
            <div class="software-name">${software.name}</div>
        </div>
        <div class="software-details">
            <div class="description">${software.description}</div>
            <div class="button-group">
                ${downloadButtons.join('')}
                <a href="${software.repoUrl}" 
                   class="btn repo-btn"
                   title="查看源代码"
                   aria-label="源代码仓库">
                   仓库
                </a>
            </div>
        </div>
    `;
    return item;
}

function setupEventDelegation() {
    let activeItem = null;

    document.getElementById('softwareList').addEventListener('click', (e) => {
        const header = e.target.closest('.software-header');
        if (!header) return;

        const item = header.parentElement;
        const details = item.querySelector('.software-details');
        const isActive = details.classList.contains('active');

        requestAnimationFrame(() => {
            if (activeItem === item) return;

            closeAllDetails();
            if (!isActive) {
                prepareAnimation(details);
                details.classList.add('active');
                activeItem = item;

                details.addEventListener('transitionend', () => {
                    cleanupAnimation(details);
                }, { once: true });
            }
        });
    });
}

function prepareAnimation(details) {
    details.style.display = 'block';
    const contentHeight = details.scrollHeight + 'px';
    details.style.setProperty('--content-height', contentHeight);
}

function cleanupAnimation(details) {
    details.style.height = '';
    details.style.display = '';
    details.style.removeProperty('--content-height');
}

function closeAllDetails() {
    document.querySelectorAll('.software-details').forEach(details => {
        if (details.classList.contains('active')) {
            const currentHeight = details.scrollHeight;
            details.style.height = currentHeight + 'px';
            
            requestAnimationFrame(() => {
                details.classList.remove('active');
                details.style.height = '';
            });
        }
    });
}