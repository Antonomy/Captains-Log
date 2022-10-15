const RESOURCE_PATH = '/logs'

const viewController = {
    index(req, res, next){
        res.render('logs/Index', res.locals.data)
    },
    newView(req, res, next){
        res.render('logs/New')
    },
    edit(req, res, next){
        res.render('logs/Edit', res.locals.data)
    },
    show(req, res, next){
        res.render('logs/Show', res.locals.data)
    },
    redirectHome(req, res, next){
        res.redirect(RESOURCE_PATH)
    },
    redirectShow(req, res, next){
        res.redirect(`${RESOURCE_PATH}/${res.locals.data.log.id}`)
    }

}

module.exports = viewController