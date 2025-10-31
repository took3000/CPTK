// 配置
const CONFIG = {
    placeholderImage: 'https://gd-hbimg.huaban.com/0856b38d6bc20ff747f27b6a96ec0630350047c4a2713-8ZGGar_fw658',
    defaultImage: 'https://gd-hbimg.huaban.com/0856b38d6bc20ff747f27b6a96ec0630350047c4a2713-8ZGGar_fw658',
    avatarCount: 50, // 头像图片初始加载数量（增加到50张）
    wallpaperCount: 30, // 壁纸图片初始加载数量（增加到30张）
    lazyLoadThreshold: 300, // 懒加载阈值（增加到300像素，提前加载）
    loadMoreThreshold: 500, // 加载更多阈值（距离底部500px时触发）
    loadMoreCount: 20, // 每次加载更多的图片数量
    
    // 页面头图配置
    headerImages: {
        avatars: 'https://pic2.zhimg.com/80/v2-c84f21e8d2644c519888963dea0713ad.webp', // 头像页面头图链接
        wallpapers: 'https://pic2.zhimg.com/80/v2-c84f21e8d2644c519888963dea0713ad.webp' // 壁纸页面头图链接
    },
    
    // 自定义头像图片链接数组（替换这里的链接）
    customAvatars: [
        // 在这里添加你的头像图片链接
        // 示例：'https://example.com/avatar1.jpg',
      
'https://picx.zhimg.com/v2-5771cb86e9ce0541393a388ff8e4772c_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-41eb9c06b678fcfab3be343b9ed98cfc_r.jpg?source=1def8aca',
'https://pic1.zhimg.com/v2-f5b4be77b025c0438c2a5489d77fc807_r.jpg?source=1def8aca',
'https://picx.zhimg.com/v2-6dc37ac9c3f0c0073a797ab59b679fd1_r.jpg?source=1def8aca',// 示例：'https://example.com/avatar2.jpg',
    ],
    
    // 自定义壁纸图片链接数组（替换这里的链接）
    customWallpapers: [
        // 在这里添加你的壁纸图片链接
        // 示例：'https://example.com/wallpaper1.jpg',
        // 示例：'https://example.com/wallpaper2.jpg',

       'https://gd-hbimg.huaban.com/908f57dfe5a5df12da74e6fa1cfac7c9c3e88bc6387a47-JFw9Sc_fw1200',
        'https://gd-hbimg.huaban.com/e37b98b88dc05b4c6cb35a318402af0f05801846112991-zCeTc2',
        'https://gd-hbimg.huaban.com/5c586a7f7116f4e0236529faeb4a752a696d66b7419af-SJG9g7_fw1200',
    ]
};

// 页面状态
let currentPage = 'avatars-page';
let avatarImagesLoaded = false;
let wallpaperImagesLoaded = false;

// 从文本文件加载的图片链接数组
let loadedAvatarImages = [];
let loadedWallpaperImages = [];

// DOM 元素
const tabItems = document.querySelectorAll('.tab-item');
const pages = document.querySelectorAll('.page');
const avatarsContainer = document.getElementById('avatars-container');
const wallpapersContainer = document.getElementById('wallpapers-container');
const avatarCountElement = document.getElementById('avatar-count');
const wallpaperCountElement = document.getElementById('wallpaper-count');
const aboutLogo = document.getElementById('about-logo');
const aboutModal = document.getElementById('about-modal');
const closeModal = document.querySelector('.close-modal');
const currentPositionElement = document.getElementById('current-position');
const totalLengthElement = document.getElementById('total-length');
const overlapImage = document.getElementById('overlap-image');
const progressThumb = document.getElementById('progress-thumb');
const endThumb = document.querySelector('.end-thumb');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    initRouter();
    initProgressBar();
    initLazyLoad();
    initAboutModal();
    loadInitialImages();
    
    // 初始显示当前页面的标题或头图
    initHeaderDisplay();
    
    // 初始更新页面长度
    updatePageLength();
});

// 初始化进度条
function initProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const progressFill = document.getElementById('progress-fill');
    const progressThumb = document.getElementById('progress-thumb');
    
    let isDragging = false;
    
    // 更新进度条位置
function updateProgressBar() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    
    progressFill.style.width = progress + '%';
    progressThumb.style.left = progress + '%';
    
    // 更新页面长度
    updatePageLength();
}
    
    // 点击进度条跳转
    function handleProgressBarClick(e) {
        const rect = progressBar.getBoundingClientRect();
        const clickPosition = e.clientX - rect.left;
        const progress = (clickPosition / rect.width) * 100;
        
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const targetScroll = (progress / 100) * scrollHeight;
        
        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
    }
    
    // 拖拽进度条
    function startDrag(e) {
        isDragging = true;
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('touchmove', handleDrag);
        document.addEventListener('touchend', stopDrag);
        handleDrag(e);
    }
    
    function handleDrag(e) {
        if (!isDragging) return;
        
        const rect = progressBar.getBoundingClientRect();
        let dragPosition = e.clientX || (e.touches && e.touches[0].clientX) || 0;
        dragPosition = dragPosition - rect.left;
        dragPosition = Math.max(0, Math.min(rect.width, dragPosition));
        const progress = (dragPosition / rect.width) * 100;
        
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const targetScroll = (progress / 100) * scrollHeight;
        
        window.scrollTo({
            top: targetScroll,
            behavior: 'auto'
        });
    }
    
    function stopDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', handleDrag);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchmove', handleDrag);
        document.removeEventListener('touchend', stopDrag);
    }
    
    // 绑定事件
    progressBar.addEventListener('click', handleProgressBarClick);
    progressBar.addEventListener('touchstart', handleProgressBarClick, { passive: true });
    progressThumb.addEventListener('mousedown', startDrag);
    progressThumb.addEventListener('touchstart', startDrag, { passive: true });
    
    // 监听滚动事件
    window.addEventListener('scroll', updateProgressBar);
    
    // 初始更新
    updateProgressBar();
}

// SPA路由初始化
function initRouter() {
    // 监听hash变化（浏览器前进后退）
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.replace('#', '');
        if (hash && (hash === 'avatars-page' || hash === 'wallpapers-page')) {
            switchPage(hash);
        }
    });
    
    // 初始页面根据hash决定
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && (initialHash === 'avatars-page' || initialHash === 'wallpapers-page')) {
        // 如果URL有hash，切换到对应页面
        switchPage(initialHash);
    } else {
        // 默认显示头像页
        currentPage = 'avatars-page';
        // 更新URL
        window.location.hash = 'avatars-page';
    }
}

// 初始化标签页功能
function initTabs() {
    tabItems.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetPage = this.getAttribute('data-page');
            switchPage(targetPage);
        });
    });
}

// 初始化头图显示
function initHeaderDisplay() {
    const currentPage = document.querySelector('.page.active');
    if (!currentPage) return;
    
    const pageId = currentPage.id;
    const headerImageUrl = pageId === 'avatars-page' ? CONFIG.headerImages.avatars : CONFIG.headerImages.wallpapers;
    const headerImage = currentPage.querySelector('.page-header-image');
    const title = currentPage.querySelector('.page-header');
    
    if (headerImageUrl && headerImageUrl.trim() !== '') {
        // 如果有配置头图，先显示标题，然后加载头图
        if (title) {
            title.style.display = 'block';
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }
        
        if (headerImage) {
            // 设置头图
            if (!headerImage.querySelector('img')) {
                const img = document.createElement('img');
                img.src = headerImageUrl;
                img.alt = pageId === 'avatars-page' ? '情侣头像分享头图' : '情侣壁纸分享头图';
                img.referrerPolicy = 'no-referrer';
                
                // 头图加载完成后隐藏标题
                img.onload = function() {
                    headerImage.style.display = 'block';
                    headerImage.style.opacity = '1';
                    headerImage.style.transform = 'translateY(0)';
                    
                    // 延迟隐藏标题，让用户看到头图加载完成
                    setTimeout(() => {
                        if (title) {
                            title.style.display = 'none';
                        }
                    }, 300);
                };
                
                // 头图加载失败时保持标题显示
                img.onerror = function() {
                    console.warn('头图加载失败，保持标题显示');
                    if (headerImage) {
                        headerImage.style.display = 'none';
                    }
                    if (title) {
                        title.style.display = 'block';
                    }
                };
                
                headerImage.appendChild(img);
            } else {
                // 如果头图已经存在，直接显示
                headerImage.style.display = 'block';
                headerImage.style.opacity = '1';
                headerImage.style.transform = 'translateY(0)';
                if (title) {
                    title.style.display = 'none';
                }
            }
        }
    } else {
        // 如果没有配置头图，显示标题，隐藏头图
        if (title) {
            title.style.display = 'block';
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }
        if (headerImage) {
            headerImage.style.display = 'none';
        }
    }
}

// 重置图片加载状态
function resetImageLoading() {
    const allImages = document.querySelectorAll('img[data-src]');
    allImages.forEach(img => {
        // 如果图片还在加载状态，重置为占位图
        if (img.hasAttribute('data-src') && img.src !== CONFIG.placeholderImage) {
            img.src = CONFIG.placeholderImage;
            img.classList.add('loading');
        }
    });
}

// 页面切换函数
function switchPage(pageId) {
    // 如果已经是当前页面，不执行切换
    if (currentPage === pageId) return;
    
    // 保存当前页面的滚动位置
    if (currentPage) {
        sessionStorage.setItem(`scrollPos-${currentPage}`, window.scrollY);
    }
    
    // 更新URL hash（模拟路由）
    window.location.hash = pageId;
    
    // 更新标签栏激活状态
    tabItems.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-page') === pageId) {
            tab.classList.add('active');
        }
    });
    
    // 更新标签栏的data-active-page属性（控制共用指示条）
    const tabBar = document.querySelector('.tab-bar');
    tabBar.setAttribute('data-active-page', pageId);
    
    // 获取页面元素
    const currentActivePage = document.querySelector('.page.active');
    const targetPage = document.getElementById(pageId);
    
    // 获取标题和头图元素
    const currentTitle = document.querySelector('.page.active .page-header');
    const currentHeaderImage = document.querySelector('.page.active .page-header-image');
    const targetTitle = targetPage ? targetPage.querySelector('.page-header') : null;
    const targetHeaderImage = targetPage ? targetPage.querySelector('.page-header-image') : null;
    
    if (currentActivePage && targetPage) {
        // 先保存目标页面的滚动位置
        const savedScrollPos = sessionStorage.getItem(`scrollPos-${pageId}`);
        const targetScrollPos = savedScrollPos ? parseInt(savedScrollPos) : 0;
        
        // 开始切换动画
        currentActivePage.classList.remove('active');
        
        // 隐藏当前标题和头图（如果有）
        if (currentTitle) {
            currentTitle.style.opacity = '0';
            currentTitle.style.transform = 'translateY(-20px)';
        }
        if (currentHeaderImage) {
            currentHeaderImage.style.opacity = '0';
            currentHeaderImage.style.transform = 'translateY(-20px)';
        }
        
        // 等待动画完成后再显示新页面
        setTimeout(() => {
            // 显示新页面
            targetPage.classList.add('active');
            
            // 根据配置显示目标页面的标题或头图
            const headerImageUrl = pageId === 'avatars-page' ? CONFIG.headerImages.avatars : CONFIG.headerImages.wallpapers;
            
            if (headerImageUrl && headerImageUrl.trim() !== '') {
                // 如果有配置头图，先显示标题，然后加载头图
                if (targetTitle) {
                    targetTitle.style.display = 'block';
                    targetTitle.style.opacity = '1';
                    targetTitle.style.transform = 'translateY(0)';
                }
                
                if (targetHeaderImage) {
                    // 设置头图
                    if (!targetHeaderImage.querySelector('img')) {
                        const img = document.createElement('img');
                        img.src = headerImageUrl;
                        img.alt = pageId === 'avatars-page' ? '情侣头像分享头图' : '情侣壁纸分享头图';
                        img.referrerPolicy = 'no-referrer';
                        
                        // 头图加载完成后隐藏标题
                        img.onload = function() {
                            targetHeaderImage.style.display = 'block';
                            targetHeaderImage.style.opacity = '1';
                            targetHeaderImage.style.transform = 'translateY(0)';
                            
                            // 延迟隐藏标题，让用户看到头图加载完成
                            setTimeout(() => {
                                if (targetTitle) {
                                    targetTitle.style.display = 'none';
                                }
                            }, 300);
                        };
                        
                        // 头图加载失败时保持标题显示
                        img.onerror = function() {
                            console.warn('头图加载失败，保持标题显示');
                            if (targetHeaderImage) {
                                targetHeaderImage.style.display = 'none';
                            }
                            if (targetTitle) {
                                targetTitle.style.display = 'block';
                            }
                        };
                        
                        targetHeaderImage.appendChild(img);
                    } else {
                        // 如果头图已经存在，直接显示
                        targetHeaderImage.style.display = 'block';
                        targetHeaderImage.style.opacity = '1';
                        targetHeaderImage.style.transform = 'translateY(0)';
                        if (targetTitle) {
                            targetTitle.style.display = 'none';
                        }
                    }
                }
            } else {
                // 如果没有配置头图，显示标题，隐藏头图
                if (targetTitle) {
                    targetTitle.style.display = 'block';
                    targetTitle.style.opacity = '1';
                    targetTitle.style.transform = 'translateY(0)';
                }
                if (targetHeaderImage) {
                    targetHeaderImage.style.display = 'none';
                }
            }
            
            // 更新当前页面状态
            currentPage = pageId;
            
            // 重置当前页面的图片加载状态
            resetImageLoading();
            
            // 加载对应页面的图片
            if (pageId === 'avatars-page' && !avatarImagesLoaded) {
                loadAvatarImages();
            } else if (pageId === 'wallpapers-page' && !wallpaperImagesLoaded) {
                loadWallpaperImages();
            }
            
            // 等待页面渲染完成后再恢复滚动位置
            setTimeout(() => {
                // 强制恢复滚动位置
                window.scrollTo(0, targetScrollPos);
                
                // 再次确认滚动位置（防止浏览器自动重置）
                setTimeout(() => {
                    window.scrollTo(0, targetScrollPos);
                    
                    // 初始化懒加载
                    initLazyLoad();
                    
                    // 更新页面长度
                    updatePageLength();
                }, 50);
            }, 100);
        }, 1000); // 等待当前页面淡出动画完成（1秒）
    }
}

// 初始化懒加载
let lazyLoadObserver = null;

function initLazyLoad() {
    // 如果已经存在观察器，先断开所有观察
    if (lazyLoadObserver) {
        lazyLoadObserver.disconnect();
    }
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    lazyLoadObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // 确保图片还没有加载
                if (img.hasAttribute('data-src')) {
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    img.classList.remove('loading');
                    lazyLoadObserver.unobserve(img);
                }
            }
        });
    }, {
        rootMargin: `${CONFIG.lazyLoadThreshold}px`
    });
    
    lazyImages.forEach(img => {
        lazyLoadObserver.observe(img);
    });
}

// 加载初始图片
function loadInitialImages() {
    // 同时加载头像和壁纸图片，确保图片数量统计准确
    loadAvatarImages();
    loadWallpaperImages();
}

// 初始化关于页面模态框
function initAboutModal() {
    // 点击logo打开关于页面
    aboutLogo.addEventListener('click', function() {
        aboutModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // 禁止背景滚动
    });
    
    // 点击关闭按钮
    closeModal.addEventListener('click', function() {
        aboutModal.style.display = 'none';
        document.body.style.overflow = ''; // 恢复背景滚动
    });
    
    // 点击模态框背景关闭
    aboutModal.addEventListener('click', function(e) {
        if (e.target === aboutModal) {
            aboutModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && aboutModal.style.display === 'block') {
            aboutModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

// 更新图片数量统计
function updateImageCounts() {
    // 优先使用从文本文件加载的图片数组，如果为空则使用配置数组
    const avatarImages = loadedAvatarImages && loadedAvatarImages.length > 0 ? loadedAvatarImages : 
                        (CONFIG.customAvatars.length > 0 ? CONFIG.customAvatars : [CONFIG.defaultImage]);
    const wallpaperImages = loadedWallpaperImages && loadedWallpaperImages.length > 0 ? loadedWallpaperImages : 
                           (CONFIG.customWallpapers.length > 0 ? CONFIG.customWallpapers : [CONFIG.defaultImage]);
    
    // 动态计算实际显示的图片数量
    const avatarCount = avatarImages.length;
    const wallpaperCount = wallpaperImages.length;
    
    // 更新显示
    avatarCountElement.textContent = avatarCount;
    wallpaperCountElement.textContent = wallpaperCount;
    
    // 更新页面长度
    updatePageLength();
}

// 更新页面长度显示
function updatePageLength() {
    const currentContainer = currentPage === 'avatars-page' ? avatarsContainer : wallpapersContainer;
    const scrollHeight = currentContainer.scrollHeight;
    const scrollTop = window.scrollY;
    
    // 更新当前位置（从页面开始的距离）- 去掉最后一位数，个位数时显示0
    const currentPosition = Math.round(scrollTop);
    currentPositionElement.textContent = currentPosition >= 10 ? Math.floor(currentPosition / 10) : 0;
    
    // 更新总长度 - 去掉最后一位数，个位数时显示0
    const totalLength = Math.round(scrollHeight);
    totalLengthElement.textContent = totalLength >= 10 ? Math.floor(totalLength / 10) : 0;
    
    // 检测爱心是否重叠
    checkHeartsOverlap();
}

// 检测爱心是否重叠
function checkHeartsOverlap() {
    if (!progressThumb || !endThumb) return;
    
    const progressRect = progressThumb.getBoundingClientRect();
    const endRect = endThumb.getBoundingClientRect();
    
    // 检测两个爱心是否重叠
    const isOverlapping = !(progressRect.right < endRect.left || 
                           progressRect.left > endRect.right || 
                           progressRect.bottom < endRect.top || 
                           progressRect.top > endRect.bottom);
    
    // 如果重叠，显示图片；否则隐藏
    if (isOverlapping) {
        overlapImage.style.display = 'flex';
    } else {
        overlapImage.style.display = 'none';
    }
}

// 从文本文件加载图片链接
function loadImageLinksFromFile(filename, callback) {
    console.log(`开始加载文件: ${filename}`);
    
    fetch(filename)
        .then(response => {
            if (!response.ok) {
                throw new Error(`无法加载文件: ${filename}, 状态码: ${response.status}`);
            }
            return response.text();
        })
        .then(text => {
            console.log(`文件 ${filename} 加载成功，内容长度: ${text.length}`);
            
            // 按行分割，过滤空行和注释行
            const lines = text.split('\n')
                .map(line => line.trim())
                .filter(line => line && !line.startsWith('//') && !line.startsWith('#'));
            
            console.log(`文件 ${filename} 解析出行数: ${lines.length}`);
            
            // 过滤有效的图片URL
            const imageUrls = lines.filter(line => {
                return line.startsWith('http://') || line.startsWith('https://');
            });
            
            console.log(`文件 ${filename} 有效图片URL数量: ${imageUrls.length}`);
            console.log('前5个图片URL:', imageUrls.slice(0, 5));
            
            callback(imageUrls);
        })
        .catch(error => {
            console.error(`加载文件 ${filename} 失败:`, error);
            // 如果文件加载失败，使用默认配置
            const defaultImages = filename.includes('avatars') ? CONFIG.customAvatars : CONFIG.customWallpapers;
            console.log(`使用默认配置，图片数量: ${defaultImages.length}`);
            callback(defaultImages);
        });
}

// 加载头像图片
function loadAvatarImages() {
    if (avatarImagesLoaded) return;
    
    // 从avatars.txt文件加载图片链接
    loadImageLinksFromFile('avatars.txt', function(avatarImages) {
        // 如果没有从文件加载到图片，使用配置中的自定义头像图片
        if (avatarImages.length === 0) {
            avatarImages = CONFIG.customAvatars.length > 0 ? CONFIG.customAvatars : [CONFIG.defaultImage];
        }
        
        // 保存加载的图片链接到全局变量
        loadedAvatarImages = avatarImages;
        
        // 动态计算要加载的图片数量：使用图片数组的长度，但不超过实际图片数量
        const imageCount = Math.min(CONFIG.avatarCount, avatarImages.length);
        
        for (let i = 0; i < imageCount; i++) {
            const imageUrl = avatarImages[i]; // 直接使用数组索引，不重复加载
            const imgItem = createImageItem(imageUrl, true);
            avatarsContainer.appendChild(imgItem);
        }
        
        avatarImagesLoaded = true;
        initLazyLoad();
        updateImageCounts(); // 更新统计
    });
}

// 加载壁纸图片
function loadWallpaperImages() {
    if (wallpaperImagesLoaded) return;
    
    // 从wallpapers.txt文件加载图片链接
    loadImageLinksFromFile('wallpapers.txt', function(wallpaperImages) {
        // 如果没有从文件加载到图片，使用配置中的自定义壁纸图片
        if (wallpaperImages.length === 0) {
            wallpaperImages = CONFIG.customWallpapers.length > 0 ? CONFIG.customWallpapers : [CONFIG.defaultImage];
        }
        
        // 保存加载的图片链接到全局变量
        loadedWallpaperImages = wallpaperImages;
        
        // 动态计算要加载的图片数量：使用图片数组的长度，但不超过实际图片数量
        const imageCount = Math.min(CONFIG.wallpaperCount, wallpaperImages.length);
        
        for (let i = 0; i < imageCount; i++) {
            const imageUrl = wallpaperImages[i]; // 直接使用数组索引，不重复加载
            const imgItem = createImageItem(imageUrl, false);
            wallpapersContainer.appendChild(imgItem);
        }
        
        wallpaperImagesLoaded = true;
        initLazyLoad();
        updateImageCounts(); // 更新统计
    });
}

// 创建图片项
function createImageItem(imageUrl, isAvatar) {
    const item = document.createElement('div');
    item.className = 'waterfall-item';
    
    const img = document.createElement('img');
    img.setAttribute('data-src', imageUrl);
    img.src = CONFIG.placeholderImage;
    img.alt = isAvatar ? '情侣头像' : '情侣壁纸';
    img.referrerPolicy = 'no-referrer';
    img.classList.add('loading');
    
    // 添加加载错误处理
    img.addEventListener('error', function() {
        // 如果加载失败，但还有data-src属性，说明是懒加载失败
        if (this.hasAttribute('data-src')) {
            // 延迟重试加载
            setTimeout(() => {
                if (this.hasAttribute('data-src')) {
                    this.src = this.getAttribute('data-src');
                }
            }, 1000);
        } else {
            // 如果已经移除了data-src但加载失败，显示占位图
            this.src = CONFIG.placeholderImage;
            this.classList.remove('loading');
        }
    });
    
    // 添加加载完成处理 - 获取图片分辨率
    img.addEventListener('load', function() {
        this.classList.remove('loading');
        
        // 如果是壁纸图片，获取并显示分辨率
        if (!isAvatar) {
            const resolutionText = this.parentNode.querySelector('.pure-text');
            if (resolutionText) {
                resolutionText.textContent = `${this.naturalWidth} × ${this.naturalHeight}`;
            }
        }
    });
    
    // 添加鼠标左键点击放大图片功能
    img.addEventListener('click', function(e) {
        // 只响应鼠标左键点击
        if (e.button === 0) {
            // 阻止默认的链接跳转行为
            e.preventDefault();
            e.stopPropagation();
            
            // 使用data-src属性获取原始高质量图片URL
            const originalImageUrl = this.getAttribute('data-src') || this.src;
            showImageLightbox(originalImageUrl, isAvatar);
        }
    });
    
    // 创建右上角文字容器
    const textOverlay = document.createElement('div');
    textOverlay.className = 'image-overlay-text';
    
    // 创建背景层（使用叠加模式）
    const labelBackground = document.createElement('div');
    labelBackground.className = 'label-background';
    
    // 创建纯白文字（不使用叠加模式）
    const pureText = document.createElement('div');
    pureText.className = 'pure-text';
    
    // 根据页面类型设置不同的文字内容
    if (isAvatar) {
        pureText.textContent = 'CPTUKU';
        textOverlay.classList.add('avatar-text');
    } else {
        pureText.textContent = '加载中...';
        textOverlay.classList.add('resolution-text');
    }
    
    // 将背景层和文字层添加到容器中
    textOverlay.appendChild(labelBackground);
    textOverlay.appendChild(pureText);
    
    item.appendChild(img);
    item.appendChild(textOverlay);
    return item;
}

// 滚动加载更多（优化版）
let isLoadingMore = false;
let scrollTimeout = null;

window.addEventListener('scroll', function() {
    if (isLoadingMore) return;
    
    // 防抖处理，避免频繁触发
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(() => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;
        
        // 距离底部500px时加载更多（使用配置的阈值）
        if (scrollTop + clientHeight >= scrollHeight - CONFIG.loadMoreThreshold) {
            loadMoreImages();
        }
    }, 100); // 100ms防抖
});

// 加载更多图片（优化版）
function loadMoreImages() {
    if (isLoadingMore) return;
    isLoadingMore = true;
    
    const container = currentPage === 'avatars-page' ? avatarsContainer : wallpapersContainer;
    const isAvatar = currentPage === 'avatars-page';
    
    // 获取对应的图片数组（优先使用从文本文件加载的图片）
    let images = [];
    if (isAvatar) {
        images = loadedAvatarImages.length > 0 ? loadedAvatarImages : 
                 (CONFIG.customAvatars.length > 0 ? CONFIG.customAvatars : [CONFIG.defaultImage]);
    } else {
        images = loadedWallpaperImages.length > 0 ? loadedWallpaperImages : 
                 (CONFIG.customWallpapers.length > 0 ? CONFIG.customWallpapers : [CONFIG.defaultImage]);
    }
    
    // 计算当前已加载的图片数量
    const currentImageCount = container.querySelectorAll('.waterfall-item').length;
    
    // 计算从哪个索引开始加载新图片
    const startIndex = currentImageCount;
    
    // 确保不超过图片数组长度
    const maxImagesToLoad = Math.min(CONFIG.loadMoreCount, images.length - startIndex);
    
    if (maxImagesToLoad <= 0) {
        // 没有更多图片可加载
        isLoadingMore = false;
        return;
    }
    
    // 批量创建图片元素
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < maxImagesToLoad; i++) {
        const imageUrl = images[startIndex + i]; // 加载新的图片，不重复
        const imgItem = createImageItem(imageUrl, isAvatar);
        fragment.appendChild(imgItem);
    }
    
    // 一次性添加到容器中，减少DOM操作
    container.appendChild(fragment);
    
    // 初始化懒加载
    initLazyLoad();
    
    // 更新图片计数
    updateImageCounts();
    
    isLoadingMore = false;
    
    console.log(`加载了 ${maxImagesToLoad} 张${isAvatar ? '头像' : '壁纸'}图片，当前总数: ${currentImageCount + maxImagesToLoad}`);
}

// 添加键盘导航支持
document.addEventListener('keydown', function(e) {
    // 如果灯箱打开，不处理页面切换
    if (document.getElementById('image-lightbox')) {
        return;
    }
    
    if (e.key === 'ArrowLeft') {
        // 切换到头像页
        switchPage('avatars-page');
    } else if (e.key === 'ArrowRight') {
        // 切换到壁纸页
        switchPage('wallpapers-page');
    }
});

// 页面加载完成后设置默认激活状态
window.addEventListener('load', function() {
    document.querySelector('.tab-item[data-page="avatars-page"]').classList.add('active');
});

// 显示图片灯箱功能
function showImageLightbox(imageUrl, isAvatar) {
    console.log('打开灯箱，图片URL:', imageUrl);
    
    // 获取当前页面的所有图片 - 修复选择器错误
    const currentPageImages = document.querySelectorAll('.waterfall-item img');
    console.log('当前页面图片数量:', currentPageImages.length);
    
    let currentImageIndex = -1;
    
    // 找到当前点击的图片索引
    for (let i = 0; i < currentPageImages.length; i++) {
        const imgSrc = currentPageImages[i].getAttribute('data-src') || currentPageImages[i].src;
        console.log('图片', i, 'URL:', imgSrc);
        if (imgSrc === imageUrl) {
            currentImageIndex = i;
            console.log('找到当前图片索引:', currentImageIndex);
            break;
        }
    }
    
    // 创建灯箱容器
    const lightbox = document.createElement('div');
    lightbox.id = 'image-lightbox';
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    // 创建放大图片
    const enlargedImg = document.createElement('img');
    enlargedImg.src = imageUrl;
    enlargedImg.referrerPolicy = 'no-referrer';
    enlargedImg.style.cssText = `
        max-width: 90vw;
        max-height: 90vh;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        transform: scale(0.8);
        transition: transform 0.3s ease;
        cursor: default;
    `;
    
    // 创建底部提示和切换按钮
    const hintContainer = document.createElement('div');
    hintContainer.style.cssText = `
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 20px;
        background: rgba(0, 0, 0, 0.5);
        padding: 8px 16px;
        border-radius: 20px;
        backdrop-filter: blur(10px);
    `;
    
    // 上一张按钮
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '← 上一张';
    prevButton.style.cssText = `
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        transition: background 0.2s;
    `;
    prevButton.onmouseover = () => prevButton.style.background = 'rgba(255, 255, 255, 0.3)';
    prevButton.onmouseout = () => prevButton.style.background = 'rgba(255, 255, 255, 0.2)';
    
    // 下一张按钮
    const nextButton = document.createElement('button');
    nextButton.innerHTML = '下一张 →';
    nextButton.style.cssText = `
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        transition: background 0.2s;
    `;
    nextButton.onmouseover = () => nextButton.style.background = 'rgba(255, 255, 255, 0.3)';
    nextButton.onmouseout = () => nextButton.style.background = 'rgba(255, 255, 255, 0.2)';
    
    // 提示文字
    const hintText = document.createElement('div');
    hintText.textContent = '键盘方向键/左右滑动切换';
    hintText.style.cssText = `
        color: rgba(255, 255, 255, 0.8);
        font-size: 14px;
        pointer-events: none;
    `;
    
    // 按钮点击事件
    prevButton.addEventListener('click', function(e) {
        e.stopPropagation();
        // 从lightbox对象获取最新的图片索引和列表
        let currentIndex = lightbox._currentIndex !== undefined ? lightbox._currentIndex : currentImageIndex;
        let imagesList = lightbox._images !== undefined ? lightbox._images : currentPageImages;
        
        if (currentIndex > 0) {
            currentIndex--;
            lightbox._currentIndex = currentIndex;
            const prevImgSrc = imagesList[currentIndex].getAttribute('data-src') || imagesList[currentIndex].src;
            switchImage(enlargedImg, prevImgSrc);
        }
    });
    
    nextButton.addEventListener('click', function(e) {
        e.stopPropagation();
        // 从lightbox对象获取最新的图片索引和列表
        let currentIndex = lightbox._currentIndex !== undefined ? lightbox._currentIndex : currentImageIndex;
        let imagesList = lightbox._images !== undefined ? lightbox._images : currentPageImages;
        
        if (currentIndex < imagesList.length - 1) {
            currentIndex++;
            lightbox._currentIndex = currentIndex;
            const nextImgSrc = imagesList[currentIndex].getAttribute('data-src') || imagesList[currentIndex].src;
            switchImage(enlargedImg, nextImgSrc);
        } else {
            // 如果是最后一张图片，自动加载更多图片
            loadMoreImagesForLightbox(lightbox, enlargedImg, currentIndex, imagesList, isAvatar);
        }
    });
    
    // 添加到灯箱
    hintContainer.appendChild(prevButton);
    hintContainer.appendChild(hintText);
    hintContainer.appendChild(nextButton);
    
    lightbox.appendChild(enlargedImg);
    lightbox.appendChild(hintContainer);
    document.body.appendChild(lightbox);
    
    // 禁止页面滚动
    document.body.style.overflow = 'hidden';
    
    // 显示动画
    setTimeout(() => {
        lightbox.style.opacity = '1';
        enlargedImg.style.transform = 'scale(1)';
    }, 10);
    
    // 点击任意位置关闭灯箱
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target === enlargedImg) {
            closeLightbox(lightbox);
        }
    });
    
    // 键盘事件处理
    function handleKeydown(e) {
        console.log('灯箱键盘事件:', e.key);
        
        // 从lightbox对象获取最新的图片索引和列表
        let currentIndex = lightbox._currentIndex !== undefined ? lightbox._currentIndex : currentImageIndex;
        let imagesList = lightbox._images !== undefined ? lightbox._images : currentPageImages;
        
        if (e.key === 'Escape') {
            console.log('关闭灯箱');
            closeLightbox(lightbox);
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            // 下一张图片
            console.log('切换到下一张图片');
            e.preventDefault();
            e.stopPropagation();
            if (currentIndex < imagesList.length - 1) {
                currentIndex++;
                lightbox._currentIndex = currentIndex;
                const nextImgSrc = imagesList[currentIndex].getAttribute('data-src') || imagesList[currentIndex].src;
                console.log('下一张图片URL:', nextImgSrc);
                switchImage(enlargedImg, nextImgSrc);
            } else {
                console.log('已经是最后一张图片，自动加载更多');
                // 如果是最后一张图片，自动加载更多图片
                loadMoreImagesForLightbox(lightbox, enlargedImg, currentIndex, imagesList, isAvatar);
            }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            // 上一张图片
            console.log('切换到上一张图片');
            e.preventDefault();
            e.stopPropagation();
            if (currentIndex > 0) {
                currentIndex--;
                lightbox._currentIndex = currentIndex;
                const prevImgSrc = imagesList[currentIndex].getAttribute('data-src') || imagesList[currentIndex].src;
                console.log('上一张图片URL:', prevImgSrc);
                switchImage(enlargedImg, prevImgSrc);
            } else {
                console.log('已经是第一张图片');
            }
        }
    }
    
    // 保存事件监听器引用以便后续移除
    lightbox._keydownHandler = handleKeydown;
    lightbox._currentIndex = currentImageIndex;
    lightbox._images = currentPageImages;
    
    document.addEventListener('keydown', handleKeydown);
    
    // 移动端触摸滑动切换功能
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    
    function handleTouchStart(e) {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }
    
    function handleTouchEnd(e) {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        
        // 计算滑动距离
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        // 只处理水平滑动，且滑动距离大于30px
        if (Math.abs(deltaX) > 30 && Math.abs(deltaX) > Math.abs(deltaY)) {
            e.preventDefault();
            e.stopPropagation();
            
            // 从lightbox对象获取最新的图片索引和列表
            let currentIndex = lightbox._currentIndex !== undefined ? lightbox._currentIndex : currentImageIndex;
            let imagesList = lightbox._images !== undefined ? lightbox._images : currentPageImages;
            
            if (deltaX < 0) {
                // 向左滑动 - 下一张
                console.log('向左滑动，切换到下一张图片');
                if (currentIndex < imagesList.length - 1) {
                    currentIndex++;
                    lightbox._currentIndex = currentIndex;
                    const nextImgSrc = imagesList[currentIndex].getAttribute('data-src') || imagesList[currentIndex].src;
                    console.log('下一张图片URL:', nextImgSrc);
                    switchImage(enlargedImg, nextImgSrc);
                } else {
                    console.log('已经是最后一张图片，自动加载更多');
                    // 如果是最后一张图片，自动加载更多图片
                    loadMoreImagesForLightbox(lightbox, enlargedImg, currentIndex, imagesList, isAvatar);
                }
            } else {
                // 向右滑动 - 上一张
                console.log('向右滑动，切换到上一张图片');
                if (currentIndex > 0) {
                    currentIndex--;
                    lightbox._currentIndex = currentIndex;
                    const prevImgSrc = imagesList[currentIndex].getAttribute('data-src') || imagesList[currentIndex].src;
                    console.log('上一张图片URL:', prevImgSrc);
                    switchImage(enlargedImg, prevImgSrc);
                } else {
                    console.log('已经是第一张图片');
                }
            }
        }
    }
    
    // 添加触摸事件监听器
    lightbox.addEventListener('touchstart', handleTouchStart, { passive: true });
    lightbox.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    // 保存触摸事件监听器引用以便后续移除
    lightbox._touchStartHandler = handleTouchStart;
    lightbox._touchEndHandler = handleTouchEnd;
}

// 切换图片
function switchImage(imgElement, newImageUrl) {
    // 添加淡出效果
    imgElement.style.opacity = '0.5';
    imgElement.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        // 切换图片源
        imgElement.src = newImageUrl;
        
        // 添加淡入效果
        imgElement.style.opacity = '1';
        imgElement.style.transform = 'scale(1)';
    }, 150);
}

// 为灯箱自动加载更多图片
function loadMoreImagesForLightbox(lightbox, enlargedImg, currentImageIndex, currentPageImages, isAvatar) {
    console.log('灯箱自动加载更多图片...');
    
    // 临时禁用按钮和键盘事件，防止重复加载
    const hintContainer = lightbox.querySelector('div');
    const buttons = hintContainer.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
    
    // 显示加载提示
    const loadingText = document.createElement('div');
    loadingText.textContent = '正在加载更多图片...';
    loadingText.style.cssText = `
        color: rgba(255, 255, 255, 0.8);
        font-size: 14px;
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.7);
        padding: 8px 16px;
        border-radius: 20px;
        backdrop-filter: blur(10px);
    `;
    lightbox.appendChild(loadingText);
    
    // 模拟加载延迟
    setTimeout(() => {
        // 调用现有的加载更多图片函数
        loadMoreImages();
        
        // 重新获取当前页面的所有图片
        const newPageImages = document.querySelectorAll('.waterfall-item img');
        console.log('加载后图片数量:', newPageImages.length);
        
        if (newPageImages.length > currentPageImages.length) {
            // 有新图片加载成功
            const nextImageIndex = currentImageIndex + 1;
            if (nextImageIndex < newPageImages.length) {
                const nextImgSrc = newPageImages[nextImageIndex].getAttribute('data-src') || newPageImages[nextImageIndex].src;
                
                // 更新灯箱状态 - 通过lightbox对象传递更新
                lightbox._currentIndex = nextImageIndex;
                lightbox._images = newPageImages;
                
                // 切换到新图片
                switchImage(enlargedImg, nextImgSrc);
                
                console.log('成功加载并切换到新图片:', nextImgSrc);
            }
        } else {
            // 没有更多图片可加载
            console.log('没有更多图片可加载');
            
            // 显示提示信息
            const noMoreText = document.createElement('div');
            noMoreText.textContent = '已加载所有图片';
            noMoreText.style.cssText = `
                color: rgba(255, 255, 255, 0.8);
                font-size: 14px;
                position: absolute;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(255, 100, 100, 0.7);
                padding: 8px 16px;
                border-radius: 20px;
                backdrop-filter: blur(10px);
            `;
            lightbox.appendChild(noMoreText);
            
            // 2秒后移除提示
            setTimeout(() => {
                if (noMoreText.parentNode) {
                    noMoreText.parentNode.removeChild(noMoreText);
                }
            }, 2000);
        }
        
        // 移除加载提示
        if (loadingText.parentNode) {
            loadingText.parentNode.removeChild(loadingText);
        }
        
        // 重新启用按钮
        buttons.forEach(btn => btn.disabled = false);
        
    }, 1000); // 1秒延迟模拟加载过程
}

// 关闭灯箱
function closeLightbox(lightbox) {
    const img = lightbox.querySelector('img');
    if (img) {
        img.style.transform = 'scale(0.8)';
    }
    lightbox.style.opacity = '0';
    
    // 移除键盘事件监听器
    const handleKeydown = lightbox._keydownHandler;
    if (handleKeydown) {
        document.removeEventListener('keydown', handleKeydown);
    }
    
    // 移除触摸事件监听器
    const handleTouchStart = lightbox._touchStartHandler;
    const handleTouchEnd = lightbox._touchEndHandler;
    if (handleTouchStart && handleTouchEnd) {
        lightbox.removeEventListener('touchstart', handleTouchStart);
        lightbox.removeEventListener('touchend', handleTouchEnd);
    }
    
    setTimeout(() => {
        if (lightbox.parentNode) {
            document.body.removeChild(lightbox);
        }
        document.body.style.overflow = '';
    }, 300);
}



// 添加淡入淡出动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateY(-10px); }
        20% { opacity: 1; transform: translateY(0); }
        80% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);