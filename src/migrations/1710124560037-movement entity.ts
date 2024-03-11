import { MigrationInterface, QueryRunner } from "typeorm";

export class MovementEntity1710124560037 implements MigrationInterface {
    name = 'MovementEntity1710124560037'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movement" ("moveId" uuid NOT NULL DEFAULT uuid_generate_v4(), "moveData" character varying NOT NULL, "reference" character varying NOT NULL, "move" character varying NOT NULL, "quantity" double precision NOT NULL DEFAULT '0', "unit" character varying NOT NULL, "itemId" uuid, CONSTRAINT "PK_f2db306ec6e23506111c1e3bc6a" PRIMARY KEY ("moveId"))`);
        await queryRunner.query(`ALTER TABLE "movement" ADD CONSTRAINT "FK_1b6210256645bdac447ade10eac" FOREIGN KEY ("itemId") REFERENCES "items"("itemId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movement" DROP CONSTRAINT "FK_1b6210256645bdac447ade10eac"`);
        await queryRunner.query(`DROP TABLE "movement"`);
    }

}
