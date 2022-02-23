import "../App.css";
import React, { useState } from "react";
import classNames from "classnames";
import SwitchingButton from "./SwitchingButton";

function NewsPage() {
  return (
    <div className="page-content">
      <h1 className="page-header">News</h1>
      <div className="news-card">
        <h2 className="news-card-header">Header</h2>
        <h4 className="news-card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          accumsan quis mi et consequat. Vestibulum ullamcorper nibh quis nunc
          faucibus dignissim. Aliquam a aliquam mauris. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Aliquam laoreet pellentesque lorem, ac tincidunt erat sagittis
          sodales. Vivamus mattis varius tincidunt. Morbi eu neque vel ex
          vehicula semper. Donec gravida urna ac euismod tristique. Aenean sed
          rutrum felis, ac accumsan risus. Donec non nunc vel erat auctor
          vulputate. Pellentesque vel convallis enim. Pellentesque velit sem,
          eleifend in elit a, cursus sodales urna. Donec pulvinar odio lacus, id
          mattis eros tempor ut. Nullam sodales magna neque, eu fermentum magna
          aliquet ut. Nullam id turpis malesuada, porta nisi non, gravida enim.
          Vivamus ac tellus nulla. Mauris gravida pellentesque eleifend. Cras
          accumsan metus at nisi porttitor, a aliquam urna ornare. Nam quis
          blandit diam, a facilisis sapien. Ut malesuada maximus velit, et
          eleifend tortor sagittis at. Donec magna sapien, sollicitudin a erat
          quis, faucibus faucibus tellus. Proin finibus eleifend metus, vel
          volutpat justo hendrerit nec. Morbi vitae neque vel sapien iaculis
          porttitor id commodo ante. Fusce egestas consectetur mi, quis
          scelerisque justo condimentum sit amet. Maecenas convallis interdum
          vestibulum. Maecenas a posuere neque. Suspendisse at lorem eu enim
          ullamcorper blandit ut at nisi. Duis elit sem, posuere sagittis
          lacinia sit amet, facilisis vitae lectus. Nullam lobortis odio luctus
          nisl egestas, nec finibus enim tincidunt. Curabitur rutrum massa sed
          mi lobortis, mattis maximus dolor posuere. Cras hendrerit interdum
          nisi, sit amet iaculis sapien malesuada in. Nulla dictum urna dolor,
          eu commodo augue sagittis in. Nullam rhoncus diam laoreet urna
          pellentesque, id pharetra eros luctus. Vestibulum sollicitudin, diam
          nec molestie rutrum, libero ligula pharetra turpis, eu scelerisque
          dolor lacus vel leo. Donec convallis tellus velit. Nulla metus magna,
          tincidunt vitae nibh ut, luctus sagittis libero. Vestibulum eget velit
          accumsan, aliquet nunc vel, maximus mi. Cras at mattis libero. Cras
          vestibulum malesuada augue id feugiat. Praesent euismod vitae dolor ac
          varius. Sed id cursus mauris, quis ornare tellus. Aliquam maximus urna
          ut fermentum porttitor. Phasellus vulputate turpis nec velit commodo,
          hendrerit dictum nisi ullamcorper. Nullam laoreet ullamcorper congue.
          Maecenas eget felis velit. Quisque vel urna molestie, consequat nulla
          eu, gravida tellus. Phasellus id neque at eros congue rutrum ac in
          nisi. Ut bibendum orci id erat aliquet pellentesque. Ut auctor libero
          nibh, nec vulputate augue posuere nec. Nam eget vestibulum sem. Duis
          et sapien velit. Nulla sed consequat ante, at eleifend quam. Vivamus
          fermentum porta malesuada. Morbi non sagittis libero. Quisque
          venenatis semper aliquam. Integer condimentum vestibulum lacus ut
          pellentesque. Vivamus in quam tincidunt, eleifend leo ac, pharetra
          lacus.
        </h4>
      </div>
    </div>
  );
}

export default NewsPage;
