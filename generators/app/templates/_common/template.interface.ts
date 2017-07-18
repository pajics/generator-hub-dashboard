export interface I<%- componentNamePascalCase %> {
<% for(var i=0; i<properties.length; i++) {%>
  <%- properties[i] %>: string;<% } -%>

}
