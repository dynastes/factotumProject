<div class="page-header">
        <h2>Card list</h2>
</div>

<table class="table table-striped">
    <tr>
        <th> Nome </th>
        <th> Titolo </th>
        <th> HP </th>
        <th> ATK </th>
        <th> DEF </th>
    </tr>

    <tr ng-repeat="carta in carte">
        <td> {{carta.nome}} </td>
        <td ng-bind="carta.titolo"> </td>
        <td ng-bind="carta.hp"> </td>
        <td ng-bind="carta.atk"> </td>
        <td ng-bind="carta.def"> </td>
    </tr>
</table>
