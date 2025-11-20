

export class Visitable{
	accept(visitor, ...args){
		return visitor.visit(this, ...args)
	}
}