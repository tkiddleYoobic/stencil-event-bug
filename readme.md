

# Stencil Event Bug

This is a small project that reproduces a bug in the new method of listening to events in stencil 0.7.6.

This method does not work:

For example, if a component emits the event `ionChange`, then the JSX attribute `onIonChange` can be added, such as:
```
<ion-input onIonChange={ev => this.someMethod(ev)}/> 
```

To reproduce the bug using this repo run the following commands:

```
git clone https://github.com/tkiddleYoobic/stencil-event-bug.git stencil-event-bug
cd stencil-event-bug
npm install
npm start
```

## N.B: Sometimes the repo will show an error in a browser, wait for the build to finish and refresh the page.

There are two buttons in the `event-component` which each trigger an event. The listener component counts the clicks on the two buttons using two different listener methods. The first method, named the old method:
```
@Listen('oldMethod')
listenerMethod(){
    this.oldCount = this.oldCount + 1;
}
```

The second method, named the new method:
```
newMethod(){
    this.newCount = this.newCount + 1;
}
```
```
<event-component onNewMethod={() => this.newMethod()}></event-component>
```

The first method works fine, however the new method does not work.

If the second method is changed to the following then it works:
```
@Listen('newMethod')
newMethod(){
    this.newCount = this.newCount + 1;
}
```
