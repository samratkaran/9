type TPromiseResolver<T> = (value: T) => void
type TPromiseRejecter<T> = (reason: T) => void
type TPromiseExecutor<T, K> = (reslove: TPromiseResolver<T>, reject: TPromiseRejecter<K>) => void
type TPromiseThenCallback<T> = (value: T | undefined) => void
type TPromiseCatchCallback<T> = (reason: T | undefined) => void
type TPromiseFinallyCallback= () => void

enum PromiseState {
    PENDING = "pending",
    FULLFILLED = "fullfilled",
    REJECT = "reject"
}


class MyPromise<T, K> {
    private _state: PromiseState = PromiseState.PENDING

    private _SucessfullCallbackHandler: TPromiseThenCallback<T>[] = []
    private _FailureCallbackHandler: TPromiseCatchCallback<K>[] = []
    private _FinallyCallbackHandler: TPromiseFinallyCallback | undefined = undefined
    private _value: T | undefined = undefined
    private _reason: K | undefined = undefined

    constructor(executor: TPromiseExecutor<T, K>) {
        this._PromiseResolver.bind(this), this._PromiseRejecter.bind(this)

    }

    public then(handelerFn: TPromiseThenCallback<T>) {
        if(this._state === PromiseState.FULLFILLED){
            handelerFn(this._value)
        }else{
             this._SucessfullCallbackHandler.push(handelerFn)
     
        }
           return this
       
    }
    public catch(handelerFn: TPromiseCatchCallback<K>) {
        if(this._state === PromiseState.REJECT){
            handelerFn(this._reason)
        }else{
            this._FailureCallbackHandler.push(handelerFn)
        }
        return this
        
    }
    public finally(handelerFn:TPromiseFinallyCallback){
        if(this._state !== PromiseState.PENDING) return handelerFn()
            this._FinallyCallbackHandler = handelerFn
    }

    private _PromiseResolver(value: T) {
        console.log("inside promise resolver", this._state)
        if (this._state === PromiseState.FULLFILLED) return;
        this._state = PromiseState.FULLFILLED;
        this._value = value
         this._SucessfullCallbackHandler.forEach((cb) => cb(value))
         if (this._FinallyCallbackHandler) this._FinallyCallbackHandler()


    }

    private _PromiseRejecter(reason: K) {
        if (this._state === PromiseState.REJECT) return;
        this._state = PromiseState.REJECT;
        this._reason = reason
        this._FailureCallbackHandler.forEach((cb) => cb(reason))
        if (this._FinallyCallbackHandler) this._FinallyCallbackHandler();
        

    }
}





