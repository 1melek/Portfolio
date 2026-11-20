// Portfolio Melek Khlass : bascule FR/EN, liens des projets, démos vidéo optionnelles
(function () {
  var root = document.documentElement;

  // 1. Bouton de langue
  var btn = document.getElementById('langBtn');
  if (btn) {
    btn.addEventListener('click', function () {
      var next = root.dataset.lang === 'fr' ? 'en' : 'fr';
      root.dataset.lang = next;
      root.lang = next;
      try { localStorage.setItem('lang', next); } catch (e) {}
      var url = new URL(location.href);
      url.searchParams.set('lang', next);
      history.replaceState(null, '', url);
    });
  }

  // 2. Liens des projets : un bouton dont le lien vaut "#" reste caché
  document.querySelectorAll('.links a[href="#"]').forEach(function (a) { a.remove(); });
  document.querySelectorAll('.links').forEach(function (p) { if (!p.querySelector('a')) p.remove(); });

  // 3. Démos : si assets/demos/<projet>.mp4 existe, la vidéo remplace le schéma
  document.querySelectorAll('.media[data-demo]').forEach(function (box) {
    var src = box.getAttribute('data-demo');
    var poster = box.getAttribute('data-poster');
    fetch(src, { method: 'HEAD' }).then(function (r) {
      var type = r.headers.get('content-type') || '';
      if (!r.ok || type.indexOf('video') !== 0) return;
      var v = document.createElement('video');
      v.src = src;
      v.muted = true; v.loop = true; v.playsInline = true; v.autoplay = true;
      v.controls = true; v.preload = 'metadata';
      if (poster) v.poster = poster;
      v.setAttribute('aria-label', box.querySelector('title') ? box.querySelector('title').textContent : 'Demo');
      box.innerHTML = '';
      box.appendChild(v);
    }).catch(function () {});
  });
})();
