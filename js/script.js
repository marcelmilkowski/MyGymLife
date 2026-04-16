function switchScreen(name, btn) {
      document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.getElementById('screen-' + name).classList.add('active');
      if (btn) btn.classList.add('active');
    }

    function switchTab(el) {
      el.closest('.sh-tabs').querySelectorAll('.sh-tab').forEach(t => t.classList.remove('active'));
      el.classList.add('active');
    }

    document.querySelector('[onclick*="progress"]') && null;
