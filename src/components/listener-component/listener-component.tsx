import { Component, Listen, State } from '@stencil/core';

@Component({
  tag: 'listener-component',
  styleUrl: 'listener-component.css',
  shadow: true
})
export class listenerComponent {

@State() oldCount: number = 0;
@State() newCount: number = 0;

@Listen('oldMethod')
listenerMethod(){
    this.oldCount = this.oldCount + 1;
}

newMethod(){
    this.newCount = this.newCount + 1;
}

  render() {
    return (
      <div>
          <p>Old Method Clicked: {this.oldCount} New Method Clicked: {this.newCount}</p>
        <event-component onNewMethod={() => this.newMethod()}></event-component>
      </div>
    );
  }
}