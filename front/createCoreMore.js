
function probUnused() {
    cjs.makeManifest = cjs.makeMan = function (a) {
        alert('cjs.makeMan')
        return cjs.manifest.apply(null, _.m(a.images, function (i) {
                return Graphics.fromSource(i)
            })
        )
    }
}