async function getCurrentTime() {
    const loading = document.getElementById('loading');
    loading.style.display = 'block';
    try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Shanghai');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        document.getElementById('currentTime').textContent = data.time;
        console.log('获取当前时间响应报文:', data);
        console.log('当前时间:', data.datetime);
        let aaa = document.getElementById('currentTime');
        currentTime.innerHTML = data.datetime;
    } catch (error) {
        console.error('获取当前时间出错:', error);
    } finally {
        loading.style.display = 'none';
    }
}

// 注册用户
async function register() {
    const loading = document.getElementById('loading');
    loading.style.display = 'block';
    const account = document.getElementById('account').value;
    const password = document.getElementById('password').value;
    try {
        const response = await fetch('http://43.143.169.168:9090/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": "陆超",
                "password": "123456"
            })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('注册响应报文:', data);
    } catch (error) {
        console.error('注册出错:', error);
    } finally {
        loading.style.display = 'none';
    }
}

// 获取用户列表并展示用户名
async function getUserList() {
    const loading = document.getElementById('loading');
    loading.style.display = 'block';
    try {
        const response = await fetch('http://43.143.169.168:9090/user/all');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const userListDiv = document.getElementById('userList');
        userListDiv.innerHTML = '';
        data.forEach(user => {
            const p = document.createElement('p');
            p.textContent = user.account;
            userListDiv.appendChild(p);
        });
        console.log('获取用户列表响应报文:', data);
    } catch (error) {
        console.error('获取用户列表出错:', error);
    } finally {
        loading.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getCurrentTime();
    const registerBtn = document.getElementById('registerBtn');
    const getUserListBtn = document.getElementById('getUserListBtn');
    registerBtn.addEventListener('click', register);
    getUserListBtn.addEventListener('click', getUserList);
});