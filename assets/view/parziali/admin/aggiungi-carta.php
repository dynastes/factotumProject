<div class="page-header">
        <h1>Add Card to Database</h1>
</div>

<form > <!-- class="form" -->
    <div class="form-group">

        <div class="row">
            <div class="col-md-6">
                <label for="cardName">Nome principale della carta</label>
                <input type="text" id="cardName" name="cardName" class="form-control" />
            </div>
            <div class="col-md-6">
                <label for="cardNameSecond">Nome secondario della carta</label>
                <input type="text" id="cardNameSecond" name="cardNameSecond" class="form-control" />
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <label for="cardNature">Natura</label>
                <select id="cardNature" name="cardNature" class="form-control">
                    <option value="">-- Seleziona --</option>
                    <option value="">Extreme</option>
                    <option value="">Super</option>
                </select>
            </div>
            <div class="col-md-6">
                <label for="cardType">Tipo</label>
                <select id="cardType" name="cardType" class="form-control">
                    <option value="">-- Seleziona --</option>
                    <option value="">STR</option>
                    <option value="">PHY</option>
                    <option value="">INT</option>
                    <option value="">TEQ</option>
                    <option value="">AGL</option>
                </select>
            </div>
        </div> <!-- /row (seconda)-->

        <div class="row">
            <div class="col-md-3">
                <label for="cardHp">HP</label>
                <input type="number" id="cardHp" name="cardHp" class="form-control" />
            </div>
            <div class="col-md-3">
                <label for="cardAtk">ATK</label>
                <input type="number" id="cardAtk" name="cardAtk" class="form-control" />
            </div>
            <div class="col-md-3">
                <label for="cardDef">DEF</label>
                <input type="number" id="cardDef" name="cardDef" class="form-control" />
            </div>
            <div class="col-md-3">
                <label for="cardCost">COST</label>
                <input type="number" id="cardCost" name="cardCost" class="form-control" />
            </div>
        </div> <!-- /row (terza) -->

        <div class="row">
            <div class="col-md-4">
                <label for="cardHp">Leader Skill</label>

                <div class="form-inline">
                    <input type="number" id="cardHp" name="cardHp" class="form-control" />
                    <button class="btn btn-info"><span class="glyphicon glyphicon-plus"></span></button>
                </div>
            </div>

            <div class="col-md-4">
                <label for="cardAtk">Special</label>
                <input type="number" id="cardAtk" name="cardAtk" class="form-control" />
            </div>

            <div class="col-md-4">
                <label for="cardDef">Passive Skill</label>
                <input type="number" id="cardDef" name="cardDef" class="form-control" />
            </div>
        </div> <!-- /row (quarta) -->


    </div> <!-- /form-group -->

</form>
