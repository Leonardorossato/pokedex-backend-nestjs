import { MigrationInterface, QueryRunner } from 'typeorm';

export class pokemon1667577737974 implements MigrationInterface {
  name = 'pokemon1667577737974';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "pokemon" ("id" SERIAL NOT NULL, "name" character varying(256) NOT NULL, "type" character varying(256) NOT NULL, CONSTRAINT "PK_0b503db1369f46c43f8da0a6a0a" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "pokemon"`);
  }
}
