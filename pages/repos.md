---
title: Repos
layout: repo
permalink: /Repos/
navigation_weight: 4
---
<div>
    <ul>
      {% assign repository_pages = site.html_pages | sort: 'repository_weight' %}
      {% for p in repository_pages %}
      {% if p.repository_weight %}
      <li>
        <a href="{{ p.url }}" {% if p.url == page.url %}class="active" {% endif %}>
          {{ p.title }}
        </a>
      </li>
      {% endif %}
      {% endfor %}
    </ul>
  </div>