function createUserTable(user) {
    
    document.getElementById('name').textContent = user.firstname
    document.getElementById('username').textContent = user.username
    document.getElementById('id').textContent = user.chatId
   
    if (user && user.role) {
        const roleStatus = user.role.status;
        const roleText = roleStatus !== null ? roleStatus : "User";
        document.getElementById('role').textContent = roleText;
    } else {
        document.getElementById('role').textContent = "User";
    }
    
    document.getElementById('registration-date').textContent = convertTime(user.createdAt)
    document.getElementById('balance').textContent = user.balance
    document.getElementById('cases-1').textContent = user.minecraftCase
    document.getElementById('cases-2').textContent = user.brawlCase
    document.getElementById('cases-3').textContent = user.hotlineCase
    document.getElementById('cases-4').textContent = user.falloutCase
    document.getElementById('cases-donate').textContent = user.donateCase
    document.getElementById('captcha-count').textContent = user.captureCounter
    document.getElementById('messages-day').textContent = user.dayMessageCounter
    document.getElementById('messages-week').textContent = user.weekMessageCounter
    document.getElementById('messages-month').textContent = user.monthMessageCounter
    document.getElementById('mef-level').textContent = user.meflvl
    document.getElementById('time-level').textContent = user.timelvl
}