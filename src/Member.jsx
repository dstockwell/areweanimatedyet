var React = require('react'),
    BugIcon = require('./BugIcon.jsx'),
    MemberDetail = require('./MemberDetail.jsx');

module.exports = React.createClass({
  render: function() {
    var specLink =
      [ 'http://w3c.github.io/web-animations/#dom',
        this.props.interface.toLowerCase(),
        this.props.name.toLowerCase() ].join('-');
    var detailsId =
      [ 'details',
        this.props.interface.toLowerCase(),
        this.props.name.toLowerCase() ].join('-');

    return (
      <div className={'member ' + this.props.status}>
        <div className='member-summary'>
          <a href={'#' + detailsId} aria-controls={detailsId}
            onClick={this.toggleDetails}>{this.props.name}</a>
          {' '}
          <span className='member-status'>{this.props.status}</span>
          {' '}
          {
            this.props.bugs.map(function(bugNum) {
              return <BugIcon key={'bug-icon-' + bugNum} id={bugNum} />;
            }.bind(this))
          }
        </div>
        <MemberDetail {...this.props} specLink={specLink}
          id={detailsId} ref="details"/>
      </div>
    );
  },
  toggleDetails: function() {
    this.refs.details.toggle();
  }
});
