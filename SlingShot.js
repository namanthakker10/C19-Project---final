class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    fly(){
        this.sling.bodyA = null;
    }
    

    display(){
        //if(this.sling.bodyA){

        
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    //}

           
    
}

}