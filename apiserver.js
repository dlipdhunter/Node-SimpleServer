exports.ApiServer = ApiServer;

function ApiServer(){

    var Method = {
        get     : 'GET',
        post    : 'POST',
        put     : 'PUT',
        delete  : 'DELETE',
        patch   : 'PATCH',
        options  : 'OPTIONS',
        head    : 'HEAD'
    }    

    var Controllers = [];

    this.register = function(route, controller){
        Controllers.push({
            'route': route,
            'controller':controller
        });
    }

    // Main entry
    this.request = function(req, res){
        
        console.log(req.method, ':', req.url);
        
        handler(req, res);

    }

    function canInvoke(functionType){
        if (typeof functionType === 'function'){
            return true;
        }
        return false;
    }

    function handler(req, res){
        var handled = false;
        for (let index = 0; index < Controllers.length; index++) {
            const ctrl = Controllers[index];
            if(String(req.url).startsWith(ctrl.route)){

                switch (req.method) {
                    case Method.get:
                        if(canInvoke(ctrl.controller.get)){
                            ctrl.controller.get(req, res);
                            handled = true;
                        }
                        break;
                    case Method.post:
                        if(canInvoke(ctrl.controller.post)){
                            ctrl.controller.post(req, res);
                            handled = true;
                        }
                        break;
                    case Method.put:
                        if(canInvoke(ctrl.controller.put)){
                            ctrl.controller.put(req, res);
                            handled = true;
                        }
                        break;
                    case Method.delete:
                        if(canInvoke(ctrl.controller.delete)){
                            ctrl.controller.delete(req, res);
                            handled = true;
                        }
                        break;
                    case Method.patch:
                        if(canInvoke(ctrl.controller.patch)){
                            ctrl.controller.patch(req, res);
                            handled = true;
                        }
                        break;
                    case Method.options:
                        if(canInvoke(ctrl.controller.options)){
                            ctrl.controller.options(req, res);
                            handled = true;
                        }
                        break;
                    case Method.head:
                        if(canInvoke(ctrl.controller.head)){
                            ctrl.controller.head(req, res);
                            handled = true;
                        }
                        break;
                    default:
                        break;
                }
                if(handled)
                    break;
            }            
        }

        if(!handled){
            res.writeHead(404, 'Not Found');
            res.end();
        } 
    }    

}
