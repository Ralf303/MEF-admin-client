function createUserTable(user) {
    const balanceField = document.getElementById('balance')
    const minecraftCase = document.getElementById('cases-1')
    const brawlCase = document.getElementById('cases-2')
    const hotlineCase = document.getElementById('cases-3')
    const falloutCase = document.getElementById('cases-4')
    const donateCase = document.getElementById('cases-donate')
    const meflvl = document.getElementById('mef-level')
    const timelvl = document.getElementById('time-level')

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
    balanceField.textContent = user.balance
    minecraftCase.textContent = user.minecraftCase
    brawlCase.textContent = user.brawlCase
    hotlineCase.textContent = user.hotlineCase
    falloutCase.textContent = user.falloutCase
    donateCase.textContent = user.donateCase
    document.getElementById('captcha-count').textContent = user.captureCounter
    document.getElementById('messages-day').textContent = user.dayMessageCounter
    document.getElementById('messages-week').textContent = user.weekMessageCounter
    document.getElementById('messages-month').textContent = user.monthMessageCounter
    meflvl.textContent = user.meflvl
    timelvl.textContent = user.timelvl

    balanceField.addEventListener("click", () => {
        openDialog(user.chatId, "balance");
      });
    
      meflvl.addEventListener("click", () => {
        openDialog(user.chatId, "meflvl");
      });
    
      timelvl.addEventListener("click", () => {
        openDialog(user.chatId, "timelvl");
      });
    
      minecraftCase.addEventListener("click", () => {
        openDialog(user.chatId, "minecraftCase");
      });

      brawlCase.addEventListener("click", () => {
        openDialog(user.chatId, "brawlCase");
      });

      hotlineCase.addEventListener("click", () => {
        openDialog(user.chatId, "hotlineCase");
      });

      falloutCase.addEventListener("click", () => {
        openDialog(user.chatId, "falloutCase");
      });

      donateCase.addEventListener("click", () => {
        openDialog(user.chatId, "donateCase");
      });
}