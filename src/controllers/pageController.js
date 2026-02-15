class PageController {
    static homePage(req, res) {
        res.render('index');
    }

    static aboutPage(req, res) {
        res.render('about');
    }

    static privacyPage(req, res) {
        res.render('privacy');
    }
}

module.exports = PageController;