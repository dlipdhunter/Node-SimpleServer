exports.SimpleApiController = SimpleApiController;

function SimpleApiController(){
    this.get = get;
    this.post = post;
    this.put = put;
    this.delete = remove;
    this.patch = patch;
    this.options = options;
    this.head = head;

    var contentType = {
        'Content-Type':'text/json'
    };

    function get(req, res) {
        res.writeHead(200, contentType);
        res.end("{request:'get'}");
        res.end();        
    }

    function post(req, res){
        res.writeHead(200, contentType);
        res.end("{request:'post'}");
        res.end();
    }

    function put(req, res){
        res.writeHead(200, contentType);
        res.end("{request:'put'}");
        res.end();
    }

    // Delete
    function remove(req, res){
        res.writeHead(200, contentType);
        res.end("{request:'delete'}");
        res.end();
    }

    function patch(req, res) {
        res.writeHead(200, contentType);
        res.end("{request:'patch'}");
        res.end();
    }

    function options(req, res){
        res.writeHead(200, contentType);
        res.end("{request:'options'}");
        res.end();
    }

    function head(req, res){
        res.writeHead(200, contentType);
        res.end("{request:'head'}");
        res.end();
    }
}