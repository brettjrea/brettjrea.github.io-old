---
title: Blog
layout: loop
permalink: /blog/
navigation_weight: 3
---
<section id="myLoop" class="loop">
<ul>
    {% for post in site.posts %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        {{ post.excerpt }}
      </li>
    {% endfor %}
</ul>
</section>