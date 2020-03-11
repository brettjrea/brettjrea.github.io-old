---
title: blog
layout: default
permalink: /blog/
navigation_weight: 3
---

<ul>
    {% for post in site.posts %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        {{ post.excerpt }}
      </li>
    {% endfor %}
  </ul>