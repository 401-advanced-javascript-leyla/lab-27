Counter example:

```js
<section className="counter">
  <a href="#" className="down clicker" onClick=  {this.handleDown}>
    -
  </a>
  <span className={classes}>{this.state.count}</span>
  <a href="#" className="up clicker" onClick={this.handleUp}>
    +
  </a>
</section>
```