import { Component, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'event-component',
  styleUrl: 'event-component.css',
  shadow: true
})
export class EventComponent {

@Event() oldMethod: EventEmitter<string>
@Event() newMethod: EventEmitter<string>

  oldButtonClicked() {
      this.oldMethod.emit('old method');
  }

  newButtonClicked() {
      this.newMethod.emit('new method');
  }

  render() {
    return (
    <div>
        <div>
            <h1>Old Method</h1>
            <button class="container" onClick={() => this.oldButtonClicked()}></button>
        </div>
        <div>
            <h1>New Method</h1>
            <button class="container" onClick={() => this.newButtonClicked()}></button>
        </div>
    </div>
    );
  }
}